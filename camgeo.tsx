<?php
/**
 * GeoCam Ultra Pro - Map Integrated & Solid Box
 * FIXED VERSION - Penempatan Estetik & Presisi
 */

// Konfigurasi Font
function findFont($preferredFonts) {
    foreach ($preferredFonts as $font) {
        if (file_exists($font)) return $font;
    }
    return null;
}

$fontBold = findFont([
    __DIR__ . '/Roboto-Bold.ttf',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
    '/usr/share/fonts/truetype/freefont/FreeSansBold.ttf',
    '/System/Library/Fonts/Helvetica.ttc',
    'C:/Windows/Fonts/arialbd.ttf',
    'C:/Windows/Fonts/arial.ttf',
]);

$fontReg = findFont([
    __DIR__ . '/Roboto-Regular.ttf',
    '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf',
    '/usr/share/fonts/truetype/freefont/FreeSans.ttf',
    '/System/Library/Fonts/Helvetica.ttc',
    'C:/Windows/Fonts/arial.ttf',
]);

if (!$fontReg && $fontBold) $fontReg = $fontBold;
if (!$fontBold && $fontReg) $fontBold = $fontReg;

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['foto'])) {
    $uploadDir = __DIR__ . '/results/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);

    $tempFile = $_FILES['foto']['tmp_name'];
    $targetFile = 'GeoCam_' . time() . '.jpg';
    $targetPath = $uploadDir . $targetFile;
    $targetUrl  = 'results/' . $targetFile;

    $info = @getimagesize($tempFile);
    if (!$info) die("File tidak valid");
    
    if ($info['mime'] == 'image/jpeg') {
        $sourceImg = imagecreatefromjpeg($tempFile);
    } elseif ($info['mime'] == 'image/png') {
        $sourceImg = imagecreatefrompng($tempFile);
    } else {
        die("Format harus JPG/PNG");
    }

    $sw = imagesx($sourceImg);
    $sh = imagesy($sourceImg);

    // --- LOGIKA UKURAN (Lebih Kecil & Teks Lebih Besar) ---
    $scale   = $sw / 1920.0; 
    $boxW    = (int)($sw * 0.45); // Box lebih pendek (85% lebar foto)
    $boxH    = (int)(220 * $scale); // Box sedikit lebih tinggi untuk mengakomodasi teks besar
    if ($boxH < 180) $boxH = 180;
    
    $mapSize = (int)($boxH * 0.88); // Map diperbesar memenuhi tinggi box

    $overlay = imagecreatetruecolor($boxW, $boxH);
    imagealphablending($overlay, false);
    imagesavealpha($overlay, true);
    $bgColor = imagecolorallocatealpha($overlay, 10, 10, 10, 25); // Lebih solid sedikit
    imagefill($overlay, 0, 0, $bgColor);
    imagealphablending($overlay, true);

    $white  = imagecolorallocate($overlay, 255, 255, 255);
    $yellow = imagecolorallocate($overlay, 250, 204, 21);
    $gray   = imagecolorallocate($overlay, 190, 190, 190);

    $lat  = floatval($_POST['lat']);
    $long = floatval($_POST['long']);

    $mapPadding = (int)(12 * $scale);
    $textStartX = $mapPadding;

    // 4. Ambil Map
    $mapProviders = [
        "https://static-maps.yandex.ru/1.x/?ll={$long},{$lat}&z=15&l=map&size=300,300&lang=en_US&pt={$long},{$lat},pm2rdm",
        "https://maps.googleapis.com/maps/api/staticmap?center={$lat},{$long}&zoom=15&size=300x300&markers=color:red%7C{$lat},{$long}"
    ];

    $mapPlaced = false;
    $ctx = stream_context_create([
        'http' => ['timeout' => 6, 'user_agent' => 'Mozilla/5.0 GeoCamApp/1.0'],
        'ssl'  => ['verify_peer' => false, 'verify_peer_name' => false],
    ]);

    foreach ($mapProviders as $mapUrl) {
        $mapRaw = @file_get_contents($mapUrl, false, $ctx);
        if ($mapRaw) {
            $mapImg = @imagecreatefromstring($mapRaw);
            if ($mapImg) {
                $mapX = $mapPadding;
                $mapY = (int)(($boxH - $mapSize) / 2);
                imagecopyresampled($overlay, $mapImg, $mapX, $mapY, 0, 0, $mapSize, $mapSize, imagesx($mapImg), imagesy($mapImg));
                imagerectangle($overlay, $mapX, $mapY, $mapX + $mapSize, $mapY + $mapSize, $yellow);
                imagedestroy($mapImg);
                $mapPlaced = true;
                $textStartX = $mapPadding + $mapSize + (int)(30 * $scale);
                break;
            }
        }
    }

    // Garis Pemisah Vertikal
    $lineX = $textStartX - (int)(15 * $scale);
    imagefilledrectangle($overlay, $lineX, (int)(25 * $scale), $lineX + (int)(3 * $scale), $boxH - (int)(25 * $scale), $yellow);

    // 5. Render Teks
    $waktu   = $_POST['waktu']   ?? '00:00';
    $tanggal = $_POST['tanggal'] ?? '';
    $hari    = strtoupper($_POST['hari'] ?? '');
    $kota    = strtoupper($_POST['kota'] ?? '');
    $alamat  = $_POST['alamat']  ?? '';
    $latStr  = number_format($lat, 6);
    $longStr = number_format($long, 6);

    if ($fontBold && $fontReg) {
        // Teks Waktu (Diperbesar signifikan)
        $fsTime = (int)(65 * $scale);
        imagettftext($overlay, $fsTime, 0, $textStartX, (int)(85 * $scale), $white, $fontBold, $waktu);

        // Hari & Tanggal (Sejajar waktu)
        $bboxTime = imagettfbbox($fsTime, 0, $fontBold, $waktu);
        $tw = abs($bboxTime[2] - $bboxTime[0]);
        $dateX = $textStartX + $tw + (int)(20 * $scale);
        
        imagettftext($overlay, (int)(14 * $scale), 0, $dateX, (int)(55 * $scale), $yellow, $fontBold, $hari);
        imagettftext($overlay, (int)(13 * $scale), 0, $dateX, (int)(82 * $scale), $gray, $fontReg, $tanggal);

        // Kota (Besar & Tegas)
        imagettftext($overlay, (int)(22 * $scale), 0, $textStartX, (int)(130 * $scale), $yellow, $fontBold, $kota);

        // Alamat
        $wrapLen = (int)(55 * ($boxW / ($sw * 0.85)));
        $alamatLines = explode("\n", wordwrap($alamat, max(35, $wrapLen), "\n", true));
        $lineY = (int)(160 * $scale);
        foreach (array_slice($alamatLines, 0, 2) as $line) {
            imagettftext($overlay, (int)(13 * $scale), 0, $textStartX, $lineY, $white, $fontReg, $line);
            $lineY += (int)(22 * $scale);
        }

        // GPS Footer
        imagettftext($overlay, (int)(10 * $scale), 0, $textStartX, $boxH - (int)(15 * $scale), $gray, $fontReg, "Lat {$latStr}, Long {$longStr}");
    }

    $destX = (int)(($sw - $boxW) / 2);
    $destY = (int)($sh - $boxH - ($sh * 0.05));
    if ($destY < 0) $destY = 0;

    imagealphablending($sourceImg, true);
    imagecopy($sourceImg, $overlay, $destX, $destY, 0, 0, $boxW, $boxH);

    imagejpeg($sourceImg, $targetPath, 95);
    imagedestroy($sourceImg);
    imagedestroy($overlay);

    header("Location: ?success=" . urlencode($targetUrl));
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GeoCam Ultra | Smart Editor</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #0f172a; color: #f8fafc; }
        .glass { background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); }
        /* Sync Preview CSS dengan PHP */
        .preview-overlay { 
            background: rgba(10, 10, 10, 0.92); 
            border-left: 6px solid #facc15; 
            min-height: 120px;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col">

    <header class="p-4 border-b border-white/10 flex justify-between items-center glass sticky top-0 z-50">
        <div class="flex items-center gap-3">
            <div class="bg-yellow-400 text-black p-2 rounded-lg font-black text-xl">GC</div>
            <h1 class="font-bold tracking-tight hidden sm:block">GEOCAM <span class="text-yellow-400">ULTRA</span></h1>
        </div>
        <button type="button" onclick="document.getElementById('foto').click()" class="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-semibold transition">
            Ganti Foto
        </button>
    </header>

    <main class="flex-1 flex flex-col md:flex-row overflow-hidden">

        <section class="flex-1 p-4 md:p-8 flex items-center justify-center bg-black/40 overflow-auto">
            <div id="capture-area" class="relative shadow-2xl max-w-full">
                <img id="pv-img" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000" class="max-h-[75vh] rounded-lg block">

                <div class="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[85%] preview-overlay rounded-lg text-white pointer-events-none flex gap-5 p-4">
                    <div class="w-[100px] h-[100px] bg-slate-800 rounded-sm overflow-hidden shrink-0 border-2 border-yellow-400">
                        <img id="map-preview" src="" class="w-full h-full object-cover">
                    </div>
                    
                    <div class="w-1 bg-yellow-400 rounded self-stretch my-1 shrink-0"></div>
                    
                    <div class="flex-1 flex flex-col justify-center min-w-0">
                        <div class="flex items-center gap-4">
                            <span id="out-time" class="text-5xl font-black leading-none tracking-tighter shrink-0">00:00</span>
                            <div class="flex flex-col">
                                <span id="out-day" class="text-xs font-black text-yellow-400 leading-none">MONDAY</span>
                                <span id="out-date" class="text-[11px] text-slate-400 font-bold mt-1">01 JAN 2026</span>
                            </div>
                        </div>
                        
                        <div id="out-loc" class="text-lg font-black text-yellow-400 truncate mt-2 leading-none">LOKASI ANDA</div>
                        <div id="out-addr" class="text-[11px] opacity-90 line-clamp-2 leading-snug mt-1">Alamat lengkap akan muncul di sini...</div>
                        
                        <div class="text-[9px] font-mono opacity-40 mt-2">GPS: <span id="out-lat">0</span>, <span id="out-long">0</span></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full md:w-[420px] glass p-6 overflow-y-auto border-l border-white/10">
            <form action="" method="POST" enctype="multipart/form-data" class="space-y-5">
                <input type="file" name="foto" id="foto" class="hidden" accept="image/jpeg,image/png" onchange="loadImg(this)" required>
                <h2 class="text-xl font-bold">Editor Data</h2>
                <div class="grid grid-cols-2 gap-3">
                    <div class="space-y-1">
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Waktu</label>
                        <input type="text" name="waktu" id="waktu" oninput="sync()" class="w-full bg-slate-800 border border-white/10 rounded-lg p-2.5 text-sm outline-none focus:ring-1 ring-yellow-400">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Hari</label>
                        <input type="text" name="hari" id="hari" oninput="sync()" class="w-full bg-slate-800 border border-white/10 rounded-lg p-2.5 text-sm outline-none focus:ring-1 ring-yellow-400">
                    </div>
                </div>
                <div class="space-y-1">
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Tanggal</label>
                    <input type="text" name="tanggal" id="tanggal" oninput="sync()" class="w-full bg-slate-800 border border-white/10 rounded-lg p-2.5 text-sm outline-none focus:ring-1 ring-yellow-400">
                </div>
                <div class="space-y-1">
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Kota / Provinsi</label>
                    <input type="text" name="kota" id="kota" oninput="sync()" class="w-full bg-slate-800 border border-white/10 rounded-lg p-2.5 text-sm outline-none focus:ring-1 ring-yellow-400">
                </div>
                <div class="space-y-1">
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Alamat Lengkap</label>
                    <textarea name="alamat" id="alamat" oninput="sync()" class="w-full bg-slate-800 border border-white/10 rounded-lg p-2.5 text-sm h-24 resize-none outline-none focus:ring-1 ring-yellow-400"></textarea>
                </div>
                <div class="flex gap-2">
                    <div class="flex-1">
                        <label class="text-[10px] text-slate-500 uppercase">LAT</label>
                        <input type="text" name="lat" id="lat" oninput="sync()" class="w-full bg-slate-800 border border-white/10 p-2 rounded text-xs outline-none focus:ring-1 ring-yellow-400">
                    </div>
                    <div class="flex-1">
                        <label class="text-[10px] text-slate-500 uppercase">LONG</label>
                        <input type="text" name="long" id="long" oninput="sync()" class="w-full bg-slate-800 border border-white/10 p-2 rounded text-xs outline-none focus:ring-1 ring-yellow-400">
                    </div>
                    <button type="button" onclick="getGPS()" title="Ambil GPS" class="self-end p-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg transition text-lg">📡</button>
                </div>
                <button type="submit" class="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold py-4 rounded-xl shadow-lg shadow-yellow-400/20 active:scale-95 transition-all text-lg uppercase">
                    Generate & Simpan Foto
                </button>
            </form>
        </section>
    </main>

    <?php if (isset($_GET['success'])): $imgPath = htmlspecialchars($_GET['success']); ?>
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <div class="glass max-w-lg w-full rounded-3xl p-6 text-center border border-yellow-400/40">
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">✓ Hasil Generate</h3>
            <img src="<?= $imgPath ?>" class="w-full rounded-xl mb-6 shadow-2xl">
            <div class="flex gap-3">
                <a href="<?= $imgPath ?>" download class="flex-1 bg-white text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition text-center">⬇ Download</a>
                <a href="?" class="flex-1 bg-slate-800 font-bold py-3 rounded-xl hover:bg-slate-700 transition text-center">✕ Tutup</a>
            </div>
        </div>
    </div>
    <?php endif; ?>

    <script>
        function sync() {
            document.getElementById('out-time').innerText  = document.getElementById('waktu').value   || '00:00';
            document.getElementById('out-date').innerText  = document.getElementById('tanggal').value || '';
            document.getElementById('out-day').innerText   = (document.getElementById('hari').value || '').toUpperCase();
            document.getElementById('out-loc').innerText   = (document.getElementById('kota').value || 'LOKASI').toUpperCase();
            document.getElementById('out-addr').innerText  = document.getElementById('alamat').value  || 'Alamat...';
            document.getElementById('out-lat').innerText   = document.getElementById('lat').value     || '0';
            document.getElementById('out-long').innerText  = document.getElementById('long').value    || '0';

            const lat = document.getElementById('lat').value;
            const lon = document.getElementById('long').value;
            if (lat && lon) {
                document.getElementById('map-preview').src = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&z=15&l=map&size=200,200&lang=en_US&pt=${lon},${lat},pm2rdm`;
            }
        }

        function loadImg(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = e => document.getElementById('pv-img').src = e.target.result;
                reader.readAsDataURL(input.files[0]);
            }
        }

        async function getGPS() {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const { latitude: lat, longitude: lon } = pos.coords;
                document.getElementById('lat').value  = lat.toFixed(6);
                document.getElementById('long').value = lon.toFixed(6);
                try {
                    const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                    const data = await res.json();
                    const addr = data.address;
                    document.getElementById('kota').value   = (addr.city || addr.town || addr.state || '').toUpperCase() + ', INDONESIA';
                    document.getElementById('alamat').value = data.display_name;
                } catch(e) {}
                sync();
            });
        }

        window.onload = () => {
            const now = new Date();
            document.getElementById('waktu').value   = String(now.getHours()).padStart(2,'0') + ":" + String(now.getMinutes()).padStart(2,'0');
            document.getElementById('tanggal').value = now.toLocaleDateString('id-ID', { day:'2-digit', month:'short', year:'numeric'}).toUpperCase();
            document.getElementById('hari').value    = now.toLocaleDateString('id-ID', { weekday:'long'}).toUpperCase();
            document.getElementById('kota').value    = 'SURABAYA, JAWA TIMUR';
            document.getElementById('alamat').value  = 'Jl. Raya Gubeng No. 1, Surabaya, Jawa Timur';
            document.getElementById('lat').value     = '-7.257500';
            document.getElementById('long').value    = '112.752100';
            sync();
        };
    </script>
</body>
</html>