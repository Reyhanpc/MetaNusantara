// DATABASE DETAIL (Path gambar "../images/namafile.png")
const provinces = [
    {
        id: "aceh", name: "ACEH",
        data: {
            attire: { name: "Ulee Balang", img: "./assets/images/ulee balang.png" },
            house: { name: "Rumoh Aceh", img: "./assets/images/gadang.png" },
            weapon: { name: "Rencong", img: "./assets/images/rencong.png" },
            food: { name: "Mie Aceh", img: "https://i.pinimg.com/736x/fc/ef/20/fcef207c38b18647b396d3ebe707819f.jpg" },
        }
    },
    {
        id: "sumut", name: "SUMATERA UTARA",
        data: {
            attire: { name: "Ulos", img: "./assets/images/ulos.png" },
            house: { name: "Rumah Bolon", img: "https://i.pinimg.com/1200x/21/d8/0a/21d80a7d981494e743887fd8a9e085b3.jpg" },
            weapon: { name: "Piso Gaja Dompak", img: "./assets/images/PisoGajaDompak.png" },
           food: { name: "Bika Ambon", img: "https://i.pinimg.com/736x/30/12/69/301269984a90df30d7f25795ade003e0.jpg" },
        }
    },
    {
        id: "sumbar", name: "SUMATERA BARAT",
        data: {
            attire: { name: "Bundo Kanduang", img: "./assets/images/bundo kanduang.png" },
            house: { name: "Rumah Gadang", img: "https://i.pinimg.com/736x/4b/96/9e/4b969e226eee6ac0d37bc692fcf147d9.jpg" },
            weapon: { name: "PIarit", img: "./assets/images/piarit.png" },
           food: { name: "Rendang", img: "https://i.pinimg.com/736x/23/6c/67/236c67198c6f4e7486d2bf81a9f3d60a.jpg" },
        }
    },
    {
        id: "riau", name: "RIAU",
        data: {
            attire: { name: "Teluk Belanga", img: "./assets/images/teluk belanga.png" },
            house: { name: "Rumah Selaso Jatuh Kembar", img: "https://i.pinimg.com/1200x/34/e7/b8/34e7b8303d9df177f6d216a549e162c4.jpg" },
            weapon: { name: "Klewang", img: "./assets/images/klewang.png" },
           food: { name: "Gulai Ikan Patin", img: "https://i.pinimg.com/736x/ef/6f/12/ef6f126767763720422e208c3db87f6d.jpg" },
        }
    },
    {
        id: "kepri", name: "KEPULAUAN RIAU",
        data: {
            attire: { name: "Kebaya Laboh", img: "./assets/images/kebaya laboh.png" },
            house: { name: "Rumah Belah Bubung", img: "https://i.pinimg.com/736x/a0/23/d0/a023d05840feff501ee42a8310e01d82.jpg" },
            weapon: { name: "Pedang Selangkeh", img: "./assets/images/pedang selangkeh.png" },
           food: { name: "Gonggong", img: "https://i.pinimg.com/1200x/19/68/61/19686143faf0021a27b98d0fd051c6e9.jpg" },
        }
    },
    {
        id: "jambi", name: "JAMBI",
        data: {
            attire: { name: "Baju Kurung Tanggung", img: "./assets/images/bajukurungtanggung.png" },
            house: { name: " Rumah Kajang Lako", img: "https://i.pinimg.com/736x/c6/77/80/c67780d8311a25c68648d04bfa94f373.jpg" },
            weapon: { name: "Tombak Jambi", img: "./assets/images/tombak jambi.png" },
           food: { name: "Tempoyak", img: "https://i.pinimg.com/736x/81/2b/62/812b6290624a7bca3c26b8010af5500c.jpg" },
        }
    },
    {
        id: "sumsel", name: "SUMATERA SELATAN",
        data: {
            attire: { name: "Aesan Gede", img: "./assets/images/aesangede.png" },
            house: { name: "Rumah Limas", img: "https://i.pinimg.com/1200x/df/3a/6f/df3a6fdccefd0e00d1a0bb6f2359d39b.jpg" },
            weapon: { name: "keris palembang", img: "./assets/images/keris palembang.png" },
           food: { name: "Pempek", img: "https://i.pinimg.com/736x/5c/48/e9/5c48e9c63b36ee1ecd99703dedaf70b1.jpg" },
        }
    },
    {
        id: "babel", name: "BANGKA BELITUNG",
        data: {
            attire: { name: "Paksian", img: "./assets/images/paksian.png" },
            house: { name: "Rumah Rakit", img: "https://i.pinimg.com/1200x/95/01/f9/9501f906185c1b5e2efc1324313357d8.jpg" },
            weapon: { name: "Parang badau", img: "./assets/images/parang badau.png" },
           food: { name: "Lempah Kuning", img: "https://i.pinimg.com/1200x/f1/6b/c2/f16bc2b2f656ae7d5042444d330722dc.jpg" },
        }
    },
    {
        id: "bengkulu", name: "BENGKULU",
        data: {
            attire: { name: "Rejang Lebong", img: "./assets/images/rejanglebong.png" },
            house: { name: "Bubungan Lima", img: "https://i.pinimg.com/736x/04/b0/17/04b017418480e1a99043666a0fa5bbbb.jpg" },
            weapon: { name: "Keris Bengkulu", img: "./assets/images/Keris Bengkulu.png" },
           food: { name: "Pendap", img: "https://i.pinimg.com/736x/d6/ab/71/d6ab710aa66c142560ecd704c18ac9e6.jpg" },
        }
    },
    {
        id: "lampung", name: "LAMPUNG",
        data: {
            attire: { name: "Tulang Bawang", img: "./assets/images/tulangbawang.png" },
            house: { name: "Nuwo Sesat", img: "https://i.pinimg.com/736x/90/d7/a0/90d7a094180e33f6663fa057051207ff.jpg" },
            weapon: { name: "Terapang", img: "./assets/images/terapang.png" },
           food: { name: "Seruit", img: "https://i.pinimg.com/736x/54/20/67/542067375906845ad43bbdf8c80c0675.jpg" },
        }
    },
    {
        id: "banten", name: "BANTEN",
        data: {
            attire: { name: "Baju Pangsi", img: "./assets/images/bajupangsi.png" },
            house: { name: "Sulah Nyanda", img: "https://i.pinimg.com/736x/3b/e6/40/3be640b2779bbc02ba08c553775f90a4.jpg" },
            weapon: { name: "Bedog", img: "./assets/images/bedog.png" },
           food: { name: "Sate Banten", img: "https://i.pinimg.com/736x/27/2d/d1/272dd1084f72554619f8cb98d620c835.jpg" },
        }
    },
    {
        id: "dki", name: "DKI JAKARTA",
        data: {
            attire: { name: "Sadariah", img: "./assets/images/sadariah.png" },
            house: { name: "Rumah Kebaya", img: "https://i.pinimg.com/736x/24/ab/be/24abbe24663eeed20b95fae9f49fd7e8.jpg" },
            weapon: { name: "Cangkingan", img: "./assets/images/cangkingan.png" },
           food: { name: "Kerak Telor", img: "https://i.pinimg.com/736x/f8/57/9e/f8579e61dec27e9a7db79e3edf427d90.jpg" },
        }
    },
    {
        id: "jabar", name: "JAWA BARAT",
        data: {
            attire: { name: "Kebaya Sunda", img: "./assets/images/kebayasunda.png" },
            house: { name: "Julang Ngapak", img: "https://i.pinimg.com/736x/8c/79/fb/8c79fb56e88bda1442402f3e3d6ced63.jpg" },
            weapon: { name: "Kujang", img: "./assets/images/kujang.png" },
           food: { name: "Karedok", img: "https://i.pinimg.com/1200x/0f/62/99/0f62993a509a380e2c216d4b21740727.jpg" },
        }
    },
    {
        id: "jateng", name: "JAWA TENGAH",
        data: {
            attire: { name: "Kebaya Jawa", img: "./assets/images/kebayajawa.png" },
            house: { name: "Joglo", img: "https://i.pinimg.com/1200x/85/8f/db/858fdb43a0221204f7467ced27e17f76.jpg" },
            weapon: { name: "Keris jawa Tengah", img: "./assets/images/keris jawa tengah.png" },
           food: { name: "Nasi Liwet", img: "https://i.pinimg.com/1200x/8d/d7/c1/8dd7c13aeef83aa76d9dd08bfbbadad6.jpg" },
        }
    },
    {
        id: "diy", name: "DI YOGYAKARTA",
        data: {
            attire: { name: "Kebaya Ksatrian", img: "./assets/images/kebayaksatrian.png" },
            house: { name: "Rumah Joglo", img: "https://i.pinimg.com/1200x/dc/78/b7/dc78b76bcaf8f777bea73f8c553819c5.jpg" },
            weapon: { name: "Keris Yogyakarta", img: "./assets/images/keris jogyakarta.png" },
           food: { name: "Gudeg", img: "https://i.pinimg.com/736x/65/99/d8/6599d8b5261f20d3f1863e94f6be9522.jpg" },
           }
    },
    {
        id: "jatim", name: "JAWA TIMUR",
        data: {
            attire: { name: "Pesa'an", img: "./assets/images/pesa'an.png" },
            house: { name: "Rumah Joglo", img: "https://i.pinimg.com/1200x/80/d0/13/80d013114ac590f61a39743074e45ae2.jpg" },
            weapon: { name: "Celurit", img: "./assets/images/celurit.png" },
            food: { name: "Rujak Cingur", img: "https://i.pinimg.com/736x/1a/ce/b6/1aceb65f4ce12ca8c30f23c5c043ea42.jpg" },
        }
    },
    {
        id: "bali", name: "BALI",
        data: {
            attire: { name: "Payas Agung", img: "./assets/images/payasagung.png" },
            house: { name: "Bale Sekapat", img: "https://i.pinimg.com/736x/df/9e/e3/df9ee3694e0b8cd22a8cf44da04f1a3a.jpg" },
            weapon: { name: "Keris Bali", img: "./assets/images/keris bali.png" },
            food: { name: "Sate Lilit", img: "https://i.pinimg.com/1200x/ec/e5/8f/ece58f8bb713458feecdbd2babf77ee4.jpg" },
        }
    },
    {
        id: "ntb", name: "NUSA TENGGARA BARAT",
        data: {
            attire: { name: "Pakaian Adat Lambung", img: "./assets/images/pakaianadatlambung.png" },
            house: { name: "Dalam Loka", img: "https://i.pinimg.com/736x/96/88/64/9688649fe66305525755432ff2d25edf.jpg" },
            weapon: { name: "Pedaang Alu", img: "./assets/images/pedang alu.png" },
            food: { name: "Ayam Taliwang", img: "https://i.pinimg.com/736x/7b/08/87/7b088722df9bf51662f71fb099d64b64.jpg" },
        }
    },
    {
        id: "ntt", name: "NUSA TENGGARA TIMUR",
        data: {
            attire: { name: "Pakaian Suku Sabu", img: "./assets/images/pakaiansukusabu.png" },
            house: { name: "Musalaki ", img: "https://i.pinimg.com/1200x/c4/29/5f/c4295f1413b80584f80065ed8390ed5c.jpg" },
            weapon: { name: "Surik", img: "./assets/images/surik.png" },
            food: { name: "Kolo", img: "https://i.pinimg.com/736x/c2/cf/19/c2cf19ddd52b25c093956c37c5bdce1c.jpg" },
        }
    },
    {
        id: "kalbar", name: "KALIMANTAN BARAT",
        data: {
            attire: { name: "King Baba", img: "./assets/images/kingbaba.png" },
            house: { name: "Rumah Betang", img: "https://i.pinimg.com/1200x/1a/5b/75/1a5b750eaf30775663d15e5535bdd996.jpg" },
            weapon: { name: "Mandau", img: "./assets/images/mandau.png" },
            food: { name: "Pengkang", img: "https://i.pinimg.com/736x/19/60/cd/1960cd242e8ba1352e2c3d1488f943f9.jpg" },
        }
    },
    {
        id: "kalteng", name: "KALIMANTAN TENGAH",
        data: {
            attire: { name: "Sangkarut", img: "./assets/images/sangkarut.png" },
            house: { name: "Rumah Betang", img: "https://i.pinimg.com/1200x/e4/be/2a/e4be2afb4d2a640993d1ea87a54fa8c3.jpg" },
            weapon: { name: "Sumpit", img: "./assets/images/sumpit.png" },
            food: { name: "Ikan Tongkol", img: "https://i.pinimg.com/736x/5a/be/ea/5abeeab988debd2ed5d9e9d447f63ba7.jpg" },
        }
    },
    {
        id: "kalsel", name: "KALIMANTAN SELATAN",
        data: {
            attire: { name: "Babaju Kun Galung Pacinan", img: "./assets/images/babajukungalungpacinan.png" },
            house: { name: "Bubungan", img: "https://i.pinimg.com/1200x/3d/33/73/3d33732350700bbbd1fea4a103a147c1.jpg" },
            weapon: { name: "Tombak", img: "./assets/images/tombak.png" },
            food: { name: "Soto Banjar", img: "https://i.pinimg.com/1200x/63/b9/81/63b981b8d255a5bda594a056ba07b7b5.jpg" },
        }
    },
    {
        id: "kaltim", name: "KALIMANTAN TIMUR",
        data: {
            attire: { name: "Pakaian Adat Kustin", img: "./assets/images/pakaianadatkustin.png" },
            house: { name: "Rumah Lamin", img: "https://i.pinimg.com/736x/d8/6a/f6/d86af6cfcdce0ddaf4d07d12347fd144.jpg" },
            weapon: { name: "Gayang", img: "./assets/images/Gayang.png" },
            food: { name: "Nasi Bekepor", img: "https://i.pinimg.com/1200x/f3/f8/80/f3f88043585f20e08a5f75af821f588c.jpg" },
        }
    },
    {
        id: "kaltara", name: "KALIMANTAN UTARA",
        data: {
            attire: { name: "Ta'a", img: "./assets/images/ta'a.png" },
            house: { name: "Rumah Baloy", img: "https://i.pinimg.com/736x/19/84/df/1984df53282315b2dd08a69c25708b39.jpg" },
            weapon: { name: "Mandau", img: "./assets/images/mandau kaltara.png" },
            food: { name: "Kepiting Soka", img: "https://i.pinimg.com/1200x/a8/5a/ac/a85aac40a7df509abf12ab759eb36903.jpg" },
        }
    },
    {
        id: "sulut", name: "SULAWESI UTARA",
        data: {
            attire: { name: "Laku Tepu", img: "./assets/images/lakutepu.png" },
            house: { name: "Rumah Walewangko", img: "https://i.pinimg.com/1200x/8c/8d/38/8c8d38e7a9fdbf617891c84ba63039ef.jpg" },
            weapon: { name: "Piso Gaja Dompak", img: "./assets/images/Piso Gaja Dompak.png" },
            food: { name: "Bubur Manado", img: "https://i.pinimg.com/1200x/b6/68/f0/b668f0389ab58edce517da22f7416ed9.jpg" },
        }
    },
    {
        id: "gorontalo", name: "GORONTALO",
        data: {
            attire: { name: "Biliu", img: "./assets/images/biliu.png" },
            house: { name: "dulohupa ", img: "https://i.pinimg.com/736x/92/8e/61/928e61d48920d1074b0ab51d294f289f.jpg" },
            weapon: { name: "Badi", img: "./assets/images/badi.png" },
            food: { name: "Binte Biluhuta", img: "https://i.pinimg.com/736x/6c/f5/72/6cf5729cc90927bb5113fd84069d59b8.jpg" },
        }
    },
    {
        id: "sulteng", name: "SULAWESI TENGAH",
        data: {
            attire: { name: "Baju Nggembe", img: "./assets/images/bajunggembe.png" },
            house: { name: "Rumah Tambi", img: "https://i.pinimg.com/1200x/b7/2c/2f/b72c2fbe56354f3db6a80d990bb22de9.jpg" },
            weapon: { name: "Balado", img: "./assets/images/balado.png" },
            food: { name: "KaledoLalampa", img: "https://i.pinimg.com/1200x/8d/e0/4d/8de04d14355adbb8cff7b038c31e2934.jpghttps://i.pinimg.com/736x/da/50/e5/da50e575ec35ca41cd54903a56c45c79.jpg" },
        }
    },
    {
        id: "sulbar", name: "SULAWESI BARAT",
        data: {
            attire: { name: "Pattuqduq Towaini", img: "./assets/images/pattuqduqtowaini.png" },
            house: { name: "Boyang", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHpy_rS9mQrS98sZIeu73wZGWS7_HIk_psw&s" },
            weapon: { name: "Kandawulo", img: "./assets/images/kandawulo.png" },
            food: { name: "Bikang", img: "https://i.pinimg.com/736x/eb/98/9e/eb989e824ff06ee2d403873e4964ff72.jpg" },
        }
    },
    {
        id: "sulsel", name: "SULAWESI SELATAN",
        data: {
            attire: { name: "Baju Bodo", img: "./assets/images/bajubodo.png" },
            house: { name: "Tongkonan ", img: "https://i.pinimg.com/736x/cb/b7/dc/cbb7dcb1a1a7f04f415166d9bffcdcf9.jpg" },
            weapon: { name: "Keris Tapi", img: "./assets/images/keris tapi.png" },
            food: { name: "Es Pisang Ijo", img: "https://i.pinimg.com/736x/ca/9e/22/ca9e22a0b10855c85514f771e8958889.jpg" },
        }
    },
    {
        id: "sultra", name: "SULAWESI TENGGARA",
        data: {
            attire: { name: "Kinawi", img: "./assets/images/kinawi.png" },
            house: { name: "Rumah Buton", img: "" },
            weapon: { name: "Keris Alu Palaka", img: "./assets/images/keris alu palaka.png" },
            food: { name: "Kasoami", img: "https://i.pinimg.com/1200x/ab/c4/a3/abc4a399024c5f19bf3654e5cbe7e343.jpg" },
        }
    },
    {
        id: "maluku", name: "MALUKU",
        data: {
            attire: { name: "Baju Cele", img: "./assets/images/bajucele.png" },
            house: { name: "Baileo", img: "https://i.pinimg.com/1200x/ed/3d/db/ed3ddb9df0ba7b3121f5a81d7b072282.jpg" },
            weapon: { name: "Prang Salawaku & Tombak", img: "./assets/images/parang salawaku dan tombak.png" },
            food: { name: "Kohu - Kohu", img: "https://i.pinimg.com/1200x/40/82/c2/4082c2e500c74af282280da1a72d6302.jpg" },
        }
    },
    {
        id: "malut", name: "MALUKU UTARA",
        data: {
            attire: { name: "Manteren Lamo", img: "./assets/images/manterenlamo.png" },
            house: { name: "Hibualamo", img: "https://i.pinimg.com/736x/71/a7/fb/71a7fb2cbe1b1f5d0d8ebf9d2d3c9302.jpg" },
            weapon: { name: "Parang Salawaku", img: "./assets/images/Parang Salawaku.png" },
            food: { name: "Bubur Sagu Ubi", img: "https://i.pinimg.com/736x/10/b9/ce/10b9ce4ed8526714b840865d712c22c2.jpg" },
        }
    },
    {
        id: "papua", name: "PAPUA",
        data: {
            attire: { name: "Koteka", img: "./assets/images/koteka.png" },
            house: { name: "Honai", img: "https://i.pinimg.com/736x/82/d6/7b/82d67be4d8cda3541b946346119527ab.jpg" },
            weapon: { name: "Pisau Belati", img: "./assets/images/Pisau Belati.png" },
            food: { name: "Papeda", img: "https://i.pinimg.com/736x/43/c8/03/43c803c9365600fb86b6ce3fff15996e.jpg" },
        }
    },
    {
        id: "papbar", name: "PAPUA BARAT",
        data: {
            attire: { name: "Pakaian Adat Ewer", img: "./assets/images/pakaianadatewer.png" },
            house: { name: "Rumah Kaki Seribu", img: "https://i.pinimg.com/736x/1c/02/6f/1c026ff989ac52f1c40ff489b5d6dab3.jpg" },
            weapon: { name: "Pisau belati", img: "./assets/images/Pisau Belati.png" },
            food: { name: "Ikan Bakar Manokwari", img: "https://i.pinimg.com/736x/52/a8/b8/52a8b8f201ebe5c697567691af754b61.jpg" },
        }
    },
    {
        id: "papsel", name: "PAPUA SELATAN",
        data: {
            attire: { name: "Pummi", img: "./assets/images/pummi.png" },
            house: { name: "Rumah Gotad", img: "https://i.pinimg.com/1200x/70/62/03/7062036ff17b25240eb6d9a695d1692a.jpg" },
            weapon: { name: "Pisuwe", img: "./assets/images/Pisuwe.png" },
            food: { name: "Bubur Sagu", img: "https://i.pinimg.com/1200x/1f/25/f0/1f25f0a18d7ecd9880fcf3c61016b030.jpg" },
        }
    },
    {
        id: "papteng", name: "PAPUA TENGAH",
        data: {
            attire: { name: "Holim", img: "./assets/images/holim.png" },
            house: { name: "Honai", img: "https://i.pinimg.com/1200x/54/67/90/546790639cb941e1f595d69c814aac0d.jpg" },
            weapon: { name: "Kapak Batu", img: "./assets/images/Kapak Batu.png" },
            food: { name: "Papeda", img: "https://i.pinimg.com/736x/81/95/1b/81951b078aebf849511393642d0e5c16.jpg" },
        }
    },
    {
        id: "pappeg", name: "PAPUA PEGUNUNGAN",
        data: {
            attire: { name: "Koteka", img: "./assets/images/koteka.png" },
            house: { name: "Honai", img: "https://i.pinimg.com/736x/f4/f0/b5/f4f0b548822b43fb20a076ad6a2d560b.jpg" },
            weapon: { name: "Tombak Papua", img: "./assets/images/Tombak Papua.png" },
            food: { name: "Papeda Ikan Kuah Kuning", img: "https://i.pinimg.com/1200x/d2/ca/e1/d2cae1236d9b8e684b4a7cf65f8be46f.jpg" },
        }
    },
    {
        id: "papbd", name: "PAPUA BARAT DAYA",
        data: {
            attire: { name: "Boe", img: "./assets/images/boe.png" },
            house: { name: "Rumah Kaki Seribu", img: "https://i.pinimg.com/1200x/66/f8/4b/66f84baadce3fc4bce11dfe984d871d0.jpg" },
            weapon: { name: "Busur Panah", img: "./assets/images/Busur Panah.png" },
            food: { name: "Sate Ulat Sagu", img: "https://i.pinimg.com/736x/d1/9c/f8/d19cf8c63b9db171135bc67ea26b5f3c.jpg" },
        }
    },
];

// Logic Halaman
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const currentProv = provinces.find(p => p.id === id);

const imgEl = document.getElementById('holo-img');
const nameEl = document.getElementById('prov-name');
const itemEl = document.getElementById('item-name');
const catEl = document.getElementById('cat-label');
const btns = document.querySelectorAll('.menu-btn');

// Load Awal
if (currentProv) {
    nameEl.innerText = currentProv.name;
    changeCategory('attire'); // Default
} else {
    nameEl.innerText = "DATA ERROR";
}

// Fungsi Ganti Kategori
// Fungsi Ganti Kategori dengan Logika Full vs Weapon
function changeCategory(cat) {
    if (!currentProv) return;

    // Animasi Fade Out
    imgEl.style.opacity = 0;

    setTimeout(() => {
        const item = currentProv.data[cat];

        // Ganti Data
        imgEl.src = item.img;
        itemEl.innerText = item.name;
        catEl.innerText = cat.toUpperCase();

        // --- LOGIKA GANTI TAMPILAN (PENTING) ---

        // 1. Reset class ke awal
        imgEl.className = 'main-img';

        // 2. Cek Kategori
        if (cat === 'weapon') {
            // Jika Senjata -> Pakai Mode Melayang
            imgEl.classList.add('mode-weapon');
        } else {
            // Jika Pakaian/Rumah/Makanan -> Pakai Mode Full
            imgEl.classList.add('mode-full');
        }
        // ---------------------------------------

        // Animasi Fade In
        imgEl.style.opacity = 1;
    }, 200);

    // Update Tombol Aktif
    btns.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`button[onclick="changeCategory('${cat}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}
// 3D Tilt Effect
const card = document.getElementById('card3d');
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
