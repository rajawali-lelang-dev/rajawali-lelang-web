@echo off
echo Sedang memproses update website...
git add .
git commit -m "Takedown aset otomatis"
git push
echo BERHASIL! Web akan terupdate dalam 1 menit.
pause