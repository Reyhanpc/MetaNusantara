/* ==============================================================
   SCRIPT HALAMAN DEPAN (LANDING PAGE)
   Fungsi: Menampilkan Grid & Mengarahkan ke Halaman Detail
   Lokasi File: halaman-depan/assets/script.js
   ============================================================== */

/* --- BAGIAN 1: DATABASE 38 PROVINSI --- */
const provinces = [
    // --- SUMATERA (10) ---
    { id: "aceh", name: "ACEH", attire: "Ulee Balang", region: "Sumatera" },
    { id: "sumut", name: "SUMATERA UTARA", attire: "Ulos", region: "Sumatera" },
    { id: "sumbar", name: "SUMATERA BARAT", attire: "Bundo Kanduang", region: "Sumatera" },
    { id: "riau", name: "RIAU", attire: "Teluk Belanga", region: "Sumatera" },
    { id: "kepri", name: "KEPULAUAN RIAU", attire: "Kebaya Labuh", region: "Sumatera" },
    { id: "jambi", name: "JAMBI", attire: "Baju Kurung", region: "Sumatera" },
    { id: "sumsel", name: "SUMATERA SELATAN", attire: "Aesan Gede", region: "Sumatera" },
    { id: "babel", name: "BANGKA BELITUNG", attire: "Paksian", region: "Sumatera" },
    { id: "bengkulu", name: "BENGKULU", attire: "Rejang Lebong", region: "Sumatera" },
    { id: "lampung", name: "LAMPUNG", attire: "Tulang Bawang", region: "Sumatera" },

    // --- JAWA (6) ---
    { id: "banten", name: "BANTEN", attire: "Pangsi", region: "Jawa" },
    { id: "dki", name: "DKI JAKARTA", attire: "Sadariah", region: "Jawa" },
    { id: "jabar", name: "JAWA BARAT", attire: "Bedahan", region: "Jawa" },
    { id: "jateng", name: "JAWA TENGAH", attire: "Jawi Jangkep", region: "Jawa" },
    { id: "diy", name: "DI YOGYAKARTA", attire: "Kesatrian", region: "Jawa" },
    { id: "jatim", name: "JAWA TIMUR", attire: "Pesa'an", region: "Jawa" },

    // --- BALI & NUSA TENGGARA (3) ---
    { id: "bali", name: "BALI", attire: "Payas Agung", region: "Bali & Nusa" },
    { id: "ntb", name: "NUSA TENGGARA BARAT", attire: "Lambung", region: "Bali & Nusa" },
    { id: "ntt", name: "NUSA TENGGARA TIMUR", attire: "Amarasi", region: "Bali & Nusa" },

    // --- KALIMANTAN (5) ---
    { id: "kalbar", name: "KALIMANTAN BARAT", attire: "King Baba", region: "Kalimantan" },
    { id: "kalteng", name: "KALIMANTAN TENGAH", attire: "Sangkarut", region: "Kalimantan" },
    { id: "kalsel", name: "KALIMANTAN SELATAN", attire: "Bagajah Gamuling", region: "Kalimantan" },
    { id: "kaltim", name: "KALIMANTAN TIMUR", attire: "Kustin", region: "Kalimantan" },
    { id: "kaltara", name: "KALIMANTAN UTARA", attire: "Ta'a", region: "Kalimantan" },

    // --- SULAWESI (6) ---
    { id: "sulut", name: "SULAWESI UTARA", attire: "Laku Tepu", region: "Sulawesi" },
    { id: "gorontalo", name: "GORONTALO", attire: "Biliu", region: "Sulawesi" },
    { id: "sulteng", name: "SULAWESI TENGAH", attire: "Nggembe", region: "Sulawesi" },
    { id: "sulbar", name: "SULAWESI BARAT", attire: "Lipa Saqbe", region: "Sulawesi" },
    { id: "sulsel", name: "SULAWESI SELATAN", attire: "Baju Bodo", region: "Sulawesi" },
    { id: "sultra", name: "SULAWESI TENGGARA", attire: "Babu Nggawi", region: "Sulawesi" },

    // --- MALUKU (2) ---
    { id: "maluku", name: "MALUKU", attire: "Baju Cele", region: "Maluku" },
    { id: "malut", name: "MALUKU UTARA", attire: "Manter Lamo", region: "Maluku" },

    // --- PAPUA (6) ---
    { id: "papua", name: "PAPUA", attire: "Koteka", region: "Papua" },
    { id: "papbar", name: "PAPUA BARAT", attire: "Ewer", region: "Papua" },
    { id: "papsel", name: "PAPUA SELATAN", attire: "Pummi", region: "Papua" },
    { id: "papteng", name: "PAPUA TENGAH", attire: "Koteka Mee", region: "Papua" },
    { id: "pappeg", name: "PAPUA PEGUNUNGAN", attire: "Koteka Dani", region: "Papua" },
    { id: "papbd", name: "PAPUA BARAT DAYA", attire: "Kain Rumput", region: "Papua" }
];


/* --- BAGIAN 2: LOGIKA PROGRAM --- */

// Ambil Elemen HTML
const gridContainer = document.getElementById('grid-container');
const searchInput = document.getElementById('search-input');

// 1. FUNGSI RENDER (Membuat Kotak Provinsi)
function renderGrid(data) {
    // Cek jika elemen grid ada (mencegah error)
    if (!gridContainer) return;

    // Bersihkan isi grid sebelum diisi baru
    gridContainer.innerHTML = ''; 

    // Jika hasil pencarian kosong
    if(data.length === 0) {
        gridContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: #888; margin-top: 50px;">
                <h3>DATA TIDAK DITEMUKAN</h3>
                <p>Coba kata kunci lain...</p>
            </div>
        `;
        return;
    }

    // Loop data dan buat elemen kartu
    data.forEach(prov => {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.setAttribute('data-province-name', prov.name);
        // Isi HTML Kartu
        item.innerHTML = `
            <h3>${prov.name}</h3>
            <p><span style="color:var(--neon)">region</span></p>
            <div class="grid-icon">${prov.region}</div>
        `;

        // --- NAVIGASI KE HALAMAN DETAIL ---
        // Saat diklik, browser pindah ke folder sebelah
        item.addEventListener('click', () => {
            // Format Link: ../halaman-detail/index.html?id=KODE_PROVINSI
            const targetUrl = `../halaman-detail/index.html?id=${prov.id}`;
            console.log("Navigasi ke:", targetUrl); // Debugging di Console
            window.location.href = targetUrl;
        });
        
        gridContainer.appendChild(item);
    });
}

// 2. FITUR PENCARIAN (SEARCH)
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        // Filter berdasarkan Nama Provinsi
        const filtered = provinces.filter(p => p.name.toLowerCase().includes(term));
        renderGrid(filtered);
    });
}

// 3. JALANKAN SAAT LOAD
document.addEventListener('DOMContentLoaded', () => {
    console.log("Halaman Depan Siap. Memuat Data...");
    renderGrid(provinces);
});