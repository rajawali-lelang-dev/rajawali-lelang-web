# 📘 Panduan Hands-On - Rajawali Lelang Web

Panduan lengkap untuk mengerjakan dan mengembangkan proyek Rajawali Lelang Web.

---

## 📋 Daftar Isi

1. [Struktur Proyek](#-struktur-proyek)
2. [Instalasi & Setup](#-instalasi--setup)
3. [Struktur Folder & Fungsinya](#-struktur-folder--fungsinya)
4. [Cara Menambahkan Produk](#-cara-menambahkan-produk)
5. [Integrasi Google Drive](#-integrasi-google-drive)
6. [Development Workflow](#-development-workflow)
7. [Tips & Best Practices](#-tips--best-practices)

---

## 🏗️ Struktur Proyek

Proyek ini adalah aplikasi web Next.js 15 dengan TypeScript yang menggunakan:
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Language**: TypeScript
- **Image Storage**: Google Drive API

```
rajawali-lelang-web/
├── src/                          # Source code utama
│   ├── app/                      # Next.js App Router (pages & routes)
│   ├── components/               # React components
│   ├── lib/                      # Utility functions & data
│   └── hooks/                    # Custom React hooks
├── public/                       # Static assets
├── modules/                      # Module tambahan
└── scripts/                      # Utility scripts
```

---

## 🚀 Instalasi & Setup

### 1. Install Dependencies
```bash
npm install
# atau gunakan perintah setup
npm run setup
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000)

### 3. Build untuk Production
```bash
npm run build
npm start
```

---

## 📁 Struktur Folder & Fungsinya

### 1. **`src/app/`** - Routing & Pages
Menggunakan Next.js App Router. Setiap folder = route URL.

```
app/
├── page.tsx                      # Homepage (/)
├── about-us/page.tsx             # Halaman About Us (/about-us)
├── aset/                         # Halaman aset
│   ├── lelang/                   # Aset yang dilelang (/aset/lelang)
│   │   ├── properti/page.tsx     # Properti lelang (/aset/lelang/properti)
│   │   ├── mobil/page.tsx        # Mobil lelang (/aset/lelang/mobil)
│   │   ├── mesin/page.tsx        # Mesin lelang (/aset/lelang/mesin)
│   │   └── perhiasan/page.tsx    # Perhiasan lelang (/aset/lelang/perhiasan)
│   ├── dijual/                   # Aset yang dijual (/aset/dijual)
│   │   ├── properti/page.tsx     # Properti dijual (/aset/dijual/properti)
│   │   ├── mobil/page.tsx        # Mobil dijual (/aset/dijual/mobil)
│   │   ├── mesin/page.tsx        # Mesin dijual (/aset/dijual/mesin)
│   │   └── perhiasan/page.tsx    # Perhiasan dijual (/aset/dijual/perhiasan)
│   └── [mode]/[type]/[id]/       # Detail produk dinamis
├── calculator/page.tsx           # Kalkulator KPR
├── faq/page.tsx                  # FAQ
├── lelang-terdekat/page.tsx      # Lelang terdekat
├── api/                          # API routes
│   └── drive-image/route.ts      # Proxy untuk Google Drive images
└── globals.css                   # Global styles
```

**Catatan Penting:**
- Setiap `page.tsx` = halaman yang bisa diakses
- Folder dengan `[]` = dynamic route (contoh: `[id]` = parameter dinamis)
- `layout.tsx` = wrapper untuk semua halaman child

---

### 2. **`src/components/`** - React Components
Komponen reusable untuk UI.

```
components/
├── aset/                         # Komponen untuk halaman aset
│   ├── aset-card.tsx             # Card untuk menampilkan aset
│   ├── aset-layout.tsx           # Layout dengan filter & search
│   ├── ImageGallery.tsx          # Gallery untuk detail produk
│   ├── lelang/card.tsx           # Card khusus lelang
│   └── dijual/dijual-card.tsx    # Card khusus dijual
├── layout/                       # Komponen layout global
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Header
│   └── contact.tsx               # Contact section
├── common/                       # Komponen umum/reusable
│   ├── item-card.tsx             # Card item generik
│   ├── ItemCardCarousel.tsx      # Carousel untuk items
│   ├── action-card.tsx           # Card dengan action button
│   └── ScrollAnimation.tsx       # Animation on scroll
├── ui/                           # Shadcn/ui components
│   ├── button.tsx                # Button component
│   ├── card.tsx                  # Card component
│   ├── input.tsx                 # Input component
│   └── ...                       # Dan lain-lain
└── about-us/                     # Komponen halaman about us
    ├── service-card.tsx
    ├── DasarHukumCard.tsx
    └── TataCaraCard.tsx
```

**Cara Penggunaan:**
```tsx
import AsetCard from "@/components/aset/aset-card";
import { Button } from "@/components/ui/button";
```

---

### 3. **`src/lib/`** - Data & Utilities
**⭐ FOLDER PALING PENTING UNTUK MENAMBAH PRODUK!**

```
lib/
├── properti.ts                   # ⭐ Data & interface properti
├── mobil.ts                      # ⭐ Data & interface mobil
├── mesin.ts                      # ⭐ Data & interface mesin
├── perhiasan.ts                  # ⭐ Data & interface perhiasan
├── data.ts                       # Interface dasar (BaseItem)
├── drive-utils.ts                # Utility untuk Google Drive
├── image-utils.ts                # Utility untuk images
├── filter-utils.ts               # Utility untuk filter
├── lelang-utils.ts               # Utility untuk lelang
├── province.ts                   # Data provinsi Indonesia
└── utils.ts                      # Utility umum (cn, etc)
```

**File Data Structure:**
Setiap file (properti.ts, mobil.ts, dll) berisi:
1. **Type definitions** - tipe data
2. **Interface** - struktur data
3. **Mock data arrays** - data produk

---

### 4. **`src/hooks/`** - Custom Hooks
```
hooks/
├── use-mobile.ts                 # Hook untuk detect mobile
└── use-scroll-animation.ts       # Hook untuk scroll animations
```

---

### 5. **`public/`** - Static Assets
```
public/
├── fonts/                        # Custom fonts
└── images/                       # Gambar statis
    ├── landing_page/             # Gambar untuk homepage
    ├── about-us/                 # Gambar untuk about us
    ├── assets/                   # Assets umum
    └── products/                 # ⚠️ Gambar produk (fallback)
        ├── properti/
        ├── mobil/
        ├── mesin/
        └── perhiasan/
```

**⚠️ Catatan:** 
- Gambar produk sebaiknya disimpan di **Google Drive** (lihat bagian integrasi)
- Folder `public/images/products/` hanya untuk fallback/testing

---

## ➕ Cara Menambahkan Produk

### Langkah-langkah Menambahkan Produk Baru:

#### 1️⃣ **Upload Gambar ke Google Drive**
```
1. Upload gambar ke Google Drive
2. Klik kanan > Dapatkan link > Siapapun yang memiliki link
3. Copy link yang didapat (contoh: https://drive.google.com/open?id=ABC123...)
```

#### 2️⃣ **Edit File Data yang Sesuai**

**Contoh: Menambahkan Properti Lelang**

📄 Edit file: `src/lib/properti.ts`

```typescript
// Tambahkan ke array lelangProperties
export const lelangProperties: PropertiDilelang[] = [
  // ... data yang sudah ada
  
  // ✨ PRODUK BARU - tambahkan di sini
  {
    id: "L99",                                    // ID unik (L = Lelang)
    title: "RUMAH MEWAH 2 LANTAI MALANG",        // Judul produk
    type: "Rumah",                               // Tipe: "Rumah" | "Ruko" | "Villa" | "Apartemen" | "Tanah" | "Gudang"
    location: "Jl. Raya Malang No. 123, Kota Malang", // Alamat lengkap
    provinsi: "Jawa Timur",                      // Provinsi
    kota: "Malang",                              // Kota/Kabupaten
    landArea: 200,                               // Luas tanah (m²)
    buildingArea: 150,                           // Luas bangunan (m²)
    certificateType: "SHM",                      // "SHM" | "HGB"
    description: `
      - 5 menit dari Mall
      - 10 menit dari Rumah Sakit
      - Dekat sekolah dan fasilitas umum
    `,
    status: "Lelang Aktif",                      // "Lelang Aktif" | "Lelang Segera" | "Lelang Selesai"
    image: [                                     // Array gambar dari Google Drive
      getDriveImageUrl("https://drive.google.com/open?id=YOUR_FILE_ID_1"),
      getDriveImageUrl("https://drive.google.com/open?id=YOUR_FILE_ID_2"),
      getDriveImageUrl("https://drive.google.com/open?id=YOUR_FILE_ID_3"),
    ],
    endPrice: 1500000000,                        // Harga limit (Rp)
    tanggalLelang: "2025-02-15",                // Tanggal lelang (YYYY-MM-DD)
    batasWaktuLelang: "2025-02-10",             // Batas waktu daftar (YYYY-MM-DD)
  },
];
```

---

#### 3️⃣ **Contoh untuk Tipe Produk Lain**

**📦 Menambahkan Mobil Lelang**
📄 Edit: `src/lib/mobil.ts`

```typescript
export const lelangMobils: MobilLelang[] = [
  {
    id: "LM1",
    title: "Toyota Avanza 2020",
    type: "MPV",                                 // "Sedan" | "SUV" | "MPV" | "Hatchback" | "Pickup" | "Sport"
    brand: "Toyota",
    model: "Avanza",
    year: 2020,
    mileage: 45000,                             // Kilometer
    transmission: "Manual",                      // "Manual" | "Automatic" | "CVT"
    fuelType: "Bensin",                         // "Bensin" | "Diesel" | "Hybrid" | "Electric"
    color: "Putih",
    engineCapacity: 1500,                       // cc
    location: "Jakarta Selatan",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    description: "Mobil terawat, service rutin, pajak hidup",
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=..."),
    ],
    endPrice: 150000000,
    tanggalLelang: "2025-02-01",
    batasWaktuLelang: "2025-01-25",
  },
];
```

---

**⚙️ Menambahkan Mesin/Alat Berat**
📄 Edit: `src/lib/mesin.ts`

```typescript
export const lelangMesin: MesinLelang[] = [
  {
    id: "LMS1",
    title: "Excavator Komatsu PC200",
    type: "Alat Berat",                         // Sesuaikan dengan MesinType
    brand: "Komatsu",
    model: "PC200",
    year: 2018,
    condition: "Bekas - Terawat",               // Kondisi mesin
    location: "Surabaya",
    provinsi: "Jawa Timur",
    kota: "Surabaya",
    description: "Excavator dalam kondisi prima, siap pakai",
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=..."),
    ],
    endPrice: 500000000,
    tanggalLelang: "2025-02-10",
    batasWaktuLelang: "2025-02-05",
  },
];
```

---

**💎 Menambahkan Perhiasan**
📄 Edit: `src/lib/perhiasan.ts`

```typescript
export const lelangPerhiasan: PerhiasanLelang[] = [
  {
    id: "LP1",
    title: "Kalung Emas 24K",
    type: "Kalung",                             // Sesuaikan dengan PerhiasanType
    material: "Emas",
    weight: 50,                                 // gram
    karat: 24,
    location: "Jakarta",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Pusat",
    description: "Kalung emas murni 24 karat",
    status: "Lelang Aktif",
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=..."),
    ],
    endPrice: 75000000,
    tanggalLelang: "2025-02-05",
    batasWaktuLelang: "2025-02-01",
  },
];
```

---

#### 4️⃣ **Menambahkan Produk Dijual (Non-Lelang)**

Untuk produk yang **DIJUAL** (bukan lelang), gunakan array yang berbeda:

```typescript
// PROPERTI DIJUAL (bukan lelang)
export const properties: Property[] = [
  {
    id: "P1",                                   // ID unik (P = Property, bukan L = Lelang)
    title: "Rumah Dijual di Malang",
    type: "Rumah",
    location: "Jl. Soekarno Hatta, Malang",
    provinsi: "Jawa Timur",
    kota: "Malang",
    landArea: 150,
    buildingArea: 120,
    certificateType: "SHM",
    description: "Rumah siap huni",
    status: "Available",                        // "Available" | "Featured" | "Sold"
    price: 1200000000,                         // 🔥 Pakai 'price', bukan 'endPrice'
    image: [
      getDriveImageUrl("https://drive.google.com/open?id=..."),
    ],
    // ❌ TIDAK perlu tanggalLelang & batasWaktuLelang
  },
];
```

---

### 📊 Tabel Perbedaan Lelang vs Dijual

| Field | Lelang (`BaseItemLelang`) | Dijual (`BaseItemDijual`) |
|-------|--------------------------|--------------------------|
| Price | `endPrice` (harga limit) | `price` (harga jual) |
| Status | "Lelang Aktif" \| "Lelang Segera" \| "Lelang Selesai" | "Available" \| "Featured" \| "Sold" |
| Tanggal | `tanggalLelang`, `batasWaktuLelang` | ❌ Tidak ada |
| ID Prefix | `L` (L1, L2, LM1, dst) | Bebas (P1, M1, dst) |

---

## 🔗 Integrasi Google Drive

### Mengapa Google Drive?
- ✅ Gratis unlimited storage (15GB)
- ✅ Mudah di-manage
- ✅ Bisa share dengan client
- ✅ Fast CDN

### Setup Google Drive (Ringkas)
Detail lengkap ada di [GOOGLE_DRIVE_SETUP.md](./GOOGLE_DRIVE_SETUP.md)

**Quick Setup:**

1. **Buat Project di Google Cloud Console**
2. **Enable Google Drive API**
3. **Setup OAuth 2.0 Credentials**
4. **Get Refresh Token** (pakai OAuth Playground)
5. **Set Environment Variables**

Buat file `.env.local`:
```env
GOOGLE_DRIVE_CLIENT_ID=your_client_id
GOOGLE_DRIVE_CLIENT_SECRET=your_client_secret
GOOGLE_DRIVE_REFRESH_TOKEN=your_refresh_token
```

### Cara Pakai di Kode:

```typescript
import { getDriveImageUrl } from '@/lib/drive-utils';

// Konversi link Google Drive ke URL yang bisa digunakan
const imageUrl = getDriveImageUrl("https://drive.google.com/open?id=ABC123");

// Atau langsung pakai ID
const imageUrl = getDriveImageUrl("ABC123");
```

**Flow:**
```
Google Drive → getDriveImageUrl() → /api/drive-image?id=... → Ditampilkan di web
```

---

## 🔨 Development Workflow

### 1. Menambahkan Halaman Baru

```bash
src/app/nama-halaman/page.tsx
```

```tsx
// Contoh: src/app/kontak/page.tsx
export default function KontakPage() {
  return (
    <div>
      <h1>Halaman Kontak</h1>
      {/* konten */}
    </div>
  );
}
```

Otomatis bisa diakses di: `http://localhost:3000/kontak`

---

### 2. Menambahkan Component Baru

```tsx
// src/components/common/my-component.tsx
export default function MyComponent() {
  return <div>My Component</div>;
}

// Cara pakai di halaman lain:
import MyComponent from "@/components/common/my-component";
```

---

### 3. Menambahkan Utility Function

```typescript
// src/lib/my-utils.ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
}

// Cara pakai:
import { formatCurrency } from '@/lib/my-utils';
console.log(formatCurrency(1000000)); // Rp 1.000.000,00
```

---

### 4. Git Workflow (Recommended)

```bash
# 1. Buat branch baru untuk fitur
git checkout -b feature/nama-fitur

# 2. Lakukan perubahan
# ... edit files ...

# 3. Commit changes
git add .
git commit -m "feat: menambahkan fitur X"

# 4. Push ke remote
git push origin feature/nama-fitur

# 5. Buat Pull Request di GitHub
```

---

## 💡 Tips & Best Practices

### 1. **Naming Conventions**

#### File & Folder
```
✅ kebab-case untuk folder: aset-layout/
✅ PascalCase untuk components: AsetCard.tsx
✅ camelCase untuk utilities: drive-utils.ts
```

#### Variables & Functions
```typescript
✅ camelCase untuk variables: const userName = "John";
✅ camelCase untuk functions: function getUserName() {}
✅ PascalCase untuk Components: function AsetCard() {}
✅ UPPERCASE untuk constants: const API_URL = "...";
```

---

### 2. **TypeScript Tips**

```typescript
// ✅ Selalu define interface untuk data
interface Product {
  id: string;
  title: string;
  price: number;
}

// ✅ Pakai type untuk union types
type Status = "Available" | "Sold" | "Reserved";

// ✅ Pakai optional chaining
const price = product?.price ?? 0;
```

---

### 3. **Image Best Practices**

```typescript
// ✅ Pakai Google Drive untuk produk images
image: [
  getDriveImageUrl("https://drive.google.com/open?id=..."),
]

// ✅ Pakai Next.js Image untuk optimisasi
import Image from 'next/image';

<Image 
  src={imageUrl} 
  alt="Product" 
  width={500} 
  height={300}
  priority // untuk images above the fold
/>
```

---

### 4. **Performance Tips**

```typescript
// ✅ Use client components hanya jika perlu interactivity
"use client"; // di atas file

// ✅ Dynamic imports untuk large components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});

// ✅ Memoize expensive calculations
const filteredData = useMemo(() => {
  return data.filter(item => item.status === 'active');
}, [data]);
```

---

### 5. **Folder Organization**

```
✅ LAKUKAN:
- Kelompokkan by feature: aset/, lelang/, about-us/
- Pisahkan concerns: components/, lib/, hooks/
- Consistent naming

❌ HINDARI:
- File random di root folder
- Mixed naming conventions
- Deeply nested folders (max 3-4 levels)
```

---

### 6. **Data Management Tips**

```typescript
// ✅ Centralize data di lib/
// src/lib/properti.ts - single source of truth

// ✅ Export array untuk dipakai di mana saja
export const lelangProperties: PropertiDilelang[] = [...];

// ✅ Import dan filter sesuai kebutuhan
import { lelangProperties } from '@/lib/properti';
const activeProperties = lelangProperties.filter(p => p.status === 'Lelang Aktif');
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Gambar tidak muncul dari Google Drive
**Solusi:**
1. Pastikan file di Google Drive sudah di-share (Anyone with the link)
2. Check `.env.local` sudah diisi dengan benar
3. Restart development server setelah ubah `.env.local`

### Issue 2: Error "Module not found"
**Solusi:**
```bash
# Clear cache dan reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue 3: TypeScript Error setelah tambah data
**Solusi:**
1. Pastikan interface sesuai dengan data
2. Check semua required fields sudah diisi
3. Restart TypeScript server (VS Code: Cmd+Shift+P > "Restart TS Server")

---

## 📚 Resources Tambahan

### Dokumentasi
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### File Penting
- `GOOGLE_DRIVE_SETUP.md` - Setup Google Drive lengkap
- `QUICK_START_OAUTH.md` - Quick start OAuth
- `README.md` - General project info

---

## 🎯 Quick Reference Commands

```bash
# Development
npm run dev              # Run development server
npm run build            # Build untuk production
npm run start            # Run production build
npm run lint             # Check linting errors

# Git
git status               # Check status
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to remote

# Useful
npm install [package]    # Install package baru
npx shadcn@latest add [component]  # Add shadcn component
```

---

## 📞 Need Help?

Jika ada pertanyaan atau issue:
1. Check dokumentasi di atas
2. Check file `GOOGLE_DRIVE_SETUP.md` untuk masalah Google Drive
3. Search di codebase dengan keyword yang relevan
4. Tanya di team chat atau buat issue di GitHub

---

**Happy Coding! 🚀**

*Last updated: December 2025*
