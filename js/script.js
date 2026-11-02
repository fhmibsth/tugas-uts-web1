/**
 * File script.js - Berisi fungsi pendukung global untuk aplikasi web Toko Buku
 */

// Fungsi utilitas umum untuk menampilkan pesan konsol saat halaman siap
document.addEventListener("DOMContentLoaded", function() {
    console.log("Aplikasi Pemesanan Buku Online siap digunakan.");
});

// Fungsi tambahan global jika diperlukan untuk manipulasi UI bersama
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}