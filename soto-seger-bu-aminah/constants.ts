
import type { MenuItem, Testimonial, RestaurantInfo } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Soto Seger Bu Aminah",
  rating: 4.8,
  reviewsCount: 425,
  priceRange: "Rp 1.000 – Rp 14.000",
  address: "Jl. Pakel Dsn. Pilang No.81, Jepanan, Baturan, Colomadu & Jl. Slamet Riyadi No.31, Kartasura",
  phone: "0812-2934-6662",
  whatsapp: "6281229346662",
  openingHours: "Setiap Hari: 06.00 – 22.00",
  instagram: "https://www.instagram.com/sotosegerbuaminah/",
  tiktok: "https://www.tiktok.com/@sotosegerbuaminah",
};

export const WHATSAPP_RESERVATION_URL = "https://api.whatsapp.com/send/?phone=6281229346662&text&type=phone_number&app_absent=0";
export const WHATSAPP_PARTNER_URL = "https://api.whatsapp.com/send/?phone=6281229346662&text=Halo,%20saya%20tertarik%20untuk%20menjadi%20mitra%20Soto%20Seger%20Bu%20Aminah&type=phone_number&app_absent=0";
export const MENU_PDF_URL = "https://drive.google.com/file/d/1xzwsEV0icIsBzBqV0jWfvORMBH1u0fz1/view?usp=drive_link";

export const MENU_ITEMS: MenuItem[] = [
  // MENU MAKANAN
  {
    id: 'nasi-putih',
    name: 'Nasi Putih',
    description: 'Nasi putih pulen hangat.',
    price: 'Rp 3.000',
    category: 'Makanan',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'soto-daging',
    name: 'Soto Daging Sapi',
    description: 'Soto kuah bening segar dengan irisan daging sapi.',
    price: 'Rp 8.000',
    category: 'Makanan',
    image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'soto-ayam',
    name: 'Soto Ayam Kampung',
    description: 'Soto gurih menggunakan ayam kampung asli.',
    price: 'Rp 8.000',
    category: 'Makanan',
    image: 'https://i.pinimg.com/736x/a2/bf/81/a2bf81f0cb652e45cb28225c1c75bb79.jpg',
    popular: true
  },
  {
    id: 'soto-pisah',
    name: 'Soto Pisah Sapi/Ayam',
    description: 'Pilihan soto sapi atau ayam dengan nasi dipisah.',
    price: 'Rp 10.000',
    category: 'Makanan',
    image: 'https://i.pinimg.com/736x/ca/16/63/ca1663603d9068c55f8ca55ce2fa32cf.jpg'
  },
  {
    id: 'nasi-pecel',
    name: 'Nasi Pecel',
    description: 'Nasi dengan sayur segar dan sambal kacang.',
    price: 'Rp 10.000',
    category: 'Makanan',
    image: 'https://i.pinimg.com/736x/5a/22/88/5a2288ad53b44a8c7ad71d2e4534b837.jpg'
  },
  {
    id: 'soto-bungkus',
    name: 'Soto Bungkus Sapi/Ayam',
    description: 'Porsi praktis soto sapi atau ayam untuk dibawa.',
    price: 'Rp 12.000',
    category: 'Makanan',
    image: 'https://i.pinimg.com/736x/90/18/6f/90186f82115487131f0b85a866345dc9.jpg'
  },

  // TAMBAHAN LAUK
  { id: 'kerupuk-karak', name: 'Kerupuk / Karak', description: 'Pelengkap renyah.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/1200x/4c/0d/73/4c0d73fe1f82f11a7e713f84a2bdfe30.jpg' },
  { id: 'mendoan-gembus', name: 'Mendoan / Gembus', description: 'Gorengan khas hangat.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/1200x/4d/7e/eb/4d7eeb039315788a30e95fba4e3302f4.jpg' },
  { id: 'tempe-garit', name: 'Tempe Garit / Kering', description: 'Tempe goreng gurih.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/736x/8d/03/97/8d03972761165585ed9df83d6cdc957f.jpg' },
  { id: 'tahu-goreng', name: 'Tahu Goreng', description: 'Tahu goreng lembut.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/1200x/7c/c9/86/7cc986dc3b1b8597a8b6380ae3a0a7d3.jpg' },
  { id: 'bakwan', name: 'Bakwan', description: 'Bakwan sayur goreng.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/736x/35/50/23/3550237dc9215939473f105a2f44c2b8.jpg' },
  { id: 'tahu-bakso', name: 'Tahu Bakso', description: 'Tahu isi adonan bakso.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/1200x/b2/6e/b5/b26eb5b28c9c0998c5ee7f38a6e81141.jpg' },
  { id: 'perkedel', name: 'Perkedel', description: 'Perkedel kentang lembut.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/736x/f2/9e/1d/f29e1d7b49add2b213047875db26d21b.jpg' },
  { id: 'sosis-goreng', name: 'Sosis Goreng', description: 'Sosis sapi/ayam goreng.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/1200x/48/12/a2/4812a2116fe356d79883b6ff656a3d0e.jpg' },
  { id: 'sosis-basah', name: 'Sosis Basah', description: 'Sosis tradisional basah.', price: 'Rp 5.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/736x/41/e4/dc/41e4dcddd5c457f6a154408dc93fa030.jpg' },
  { id: 'telur-ceplok', name: 'Telur Ceplok / Dadar', description: 'Telur ayam goreng.', price: 'Rp 5.000', category: 'Tambahan Lauk', image: 'https://i.pinimg.com/1200x/9e/fa/31/9efa31236ad974f5bfac36f91f78a47b.jpg' },

  // TAMBAHAN SATE
  { id: 'sate-ayam', name: 'Sate Ayam', description: 'Sate daging ayam pilihan.', price: 'Rp 3.000', category: 'Tambahan Sate', image: 'https://i.pinimg.com/1200x/69/63/4f/69634f232b300bb47e15381e6639a0e1.jpg' },
  { id: 'sate-puyuh', name: 'Sate Telur Puyuh', description: 'Sate telur puyuh bacem.', price: 'Rp 5.000', category: 'Tambahan Sate', image: 'https://i.pinimg.com/1200x/75/4e/43/754e4324b738166842f90343b02c03a4.jpg' },
  { id: 'sate-usus', name: 'Sate Usus', description: 'Sate usus ayam gurih.', price: 'Rp 5.000', category: 'Tambahan Sate', image: 'https://i.pinimg.com/736x/b5/ab/a3/b5aba36fb6693f4753b58237e4dd3ce3.jpg' },
  { id: 'sate-uritan', name: 'Sate Uritan', description: 'Sate telur muda ayam.', price: 'Rp 6.000', category: 'Tambahan Sate', image: 'https://i.pinimg.com/1200x/e1/d9/27/e1d927bb4dfed8a32d2c3b85560af9a5.jpg' },
  { id: 'sate-ati', name: 'Sate Ati Ampela', description: 'Sate ati ampela ayam.', price: 'Rp 6.000', category: 'Tambahan Sate', image: 'https://i.pinimg.com/736x/b7/76/be/b776be320feb3c848a5e14aa0c68661b.jpg' },
  { id: 'sate-jeroan-sapi', name: 'Sate Paru / Babat / Kikil', description: 'Aneka sate jeroan sapi.', price: 'Rp 7.000', category: 'Tambahan Sate', image: 'https://i.pinimg.com/736x/bc/f2/60/bcf2601ea56463c9993334ec611eaac7.jpg' },

  // MENU MINUMAN
  { id: 'es-batu', name: 'Es Batu', description: 'Es kristal.', price: 'Rp 1.000', category: 'Minuman', image: 'https://i.pinimg.com/1200x/7f/fe/60/7ffe60114586bb6f2dfbf37c0b8921a6.jpg' },
  { id: 'air-es', name: 'Air Es', description: 'Air putih dingin.', price: 'Rp 2.000', category: 'Minuman', image: 'https://i.pinimg.com/1200x/61/a5/d5/61a5d501fccb2d41d798706b2ef6e9ee.jpg' },
  { id: 'teh-tawar', name: 'Teh Tawar / Es Teh Tawar', description: 'Teh seduh murni.', price: 'Rp 3.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/91/1f/22/911f22752088c421c5d35c60bd60896c.jpg' },
  { id: 'sirup', name: 'Sirup', description: 'Sirup manis dingin.', price: 'Rp 5.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/3e/9e/44/3e9e449a7c700f52708c7ee7b544dbef.jpg' },
  { id: 'teh-hangat', name: 'Teh Hangat / Es Teh', description: 'Teh manis seduh.', price: 'Rp 5.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/4e/4b/f0/4e4bf0fe6f9beb3fb2555d8cf905150e.jpg' },
  { id: 'teh-kampul', name: 'Teh Kampul / Es Teh Kampul', description: 'Teh dengan irisan jeruk.', price: 'Rp 5.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/e9/02/19/e9021918fe4a4aa1b51dc4be7181c462.jpg', popular: true },
  { id: 'kopi', name: 'Kopi', description: 'Kopi hitam mantap.', price: 'Rp 5.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/1c/ca/d6/1ccad666ff44f12e8c89b099385e8274.jpg' },
  { id: 'air-mineral', name: 'Air Mineral', description: 'Air mineral botol.', price: 'Rp 5.000', category: 'Minuman', image: 'https://i.pinimg.com/1200x/e7/50/72/e75072d0c94fa1ea7572846049dc9a80.jpg' },
  { id: 'jeruk', name: 'Jeruk Hangat / Es Jeruk', description: 'Perasan jeruk segar.', price: 'Rp 6.000', category: 'Minuman', image: 'https://i.pinimg.com/1200x/59/bb/fd/59bbfd2e5107ecc820fc0a8f39e1620f.jpg' },
  { id: 'lemon-tea', name: 'Lemon Tea Hangat / Es', description: 'Teh lemon segar.', price: 'Rp 6.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/0e/92/f4/0e92f43c3f4cae83e8e5a07817407665.jpg' },
  { id: 'susu', name: 'Susu', description: 'Susu putih/coklat.', price: 'Rp 6.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/de/a4/80/dea4806a592aa1162d77926c01ad3b3c.jpg' },
  { id: 'soda-gembira', name: 'Soda Gembira', description: 'Soda, susu, and sirup.', price: 'Rp 14.000', category: 'Minuman', image: 'https://i.pinimg.com/736x/fd/e1/6f/fde16f156aaac0db132ebbfa749928a2.jpg' },
];

const GALLERY_BASE_URL = "https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/";
const GALLERY_FILES = [
  "IMG_3304.JPEG", "IMG_3305.JPEG", "IMG_3306.JPEG", "IMG_3423.JPEG",
  "IMG_3428.JPEG", "IMG_3429.JPEG", "IMG_3430.JPEG", "IMG_3431.JPEG",
  "IMG_3432.JPEG", "IMG_3433.JPEG", "IMG_3434.JPEG", "IMG_3435.JPEG",
  "IMG_3436.JPEG", "IMG_3439.JPEG", "IMG_3441.JPEG", "IMG_3442.JPEG",
  "IMG_3443.JPEG", "IMG_3444.JPEG", "IMG_3445.JPEG", "IMG_3446.JPEG"
];

export const GALLERY_IMAGES = GALLERY_FILES.map((file, idx) => ({
  url: `${GALLERY_BASE_URL}${file}`,
  caption: [
    "Sajian Soto Seger Daging Sapi",
    "Pilihan Lauk Pauk Tradisional",
    "Soto Ayam Kampung Spesial",
    "Suasana Hangat Bu Aminah",
    "Detail Bumbu Rempah Pilihan",
    "Kenikmatan Makan Siang",
    "Menu Favorit Keluarga",
    "Teh Kampul Segar",
    "Lauk Tempe & Tahu Gurih",
    "Sate Telur Puyuh & Usus",
    "Dapur Tradisional Kami",
    "Kualitas Bahan Premium",
    "Area Makan Nyaman",
    "Pelayanan Ramah & Cepat",
    "Porsi Puas Harga Pas",
    "Kesegaran di Setiap Suap",
    "Destinasi Kuliner Colomadu",
    "Warisan Rasa Sejak Dulu",
    "Pilihan Kerupuk Renyah",
    "Soto Seger Bu Aminah"
  ][idx] || "Galeri Bu Aminah"
}));

export const PARTNER_LOGOS = [
  { name: "GoFood", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Gofood_logo.svg" },
  { name: "GrabFood", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Grab_logo.svg" },
  { name: "ShopeeFood", image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Shopee_Food_logo.svg" },
  { name: "Halal Indonesia", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Halal_Indonesia.svg" },
];

export const PARTNERS = [
  {
    id: 1,
    title: "Peluang Kemitraan",
    excerpt: "Bergabunglah dengan kesuksesan Soto Seger Bu Aminah. Kami membuka kesempatan kemitraan franchise di seluruh Indonesia.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    category: "Franchise"
  },
  {
    id: 2,
    title: "Supplier & Petani Lokal",
    excerpt: "Kami bekerjasama langsung dengan petani dan peternak lokal untuk menjamin kualitas bahan baku terbaik.",
    image: "https://images.unsplash.com/photo-1595855709920-4e2517720584?auto=format&fit=crop&q=80&w=600",
    category: "Supplier"
  },
  {
    id: 3,
    title: "Layanan Katering",
    excerpt: "Hadirkan kelezatan soto legendaris di acara spesial Anda. Melayani pernikahan, rapat kantor, dan acara keluarga.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600",
    category: "Layanan"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    comment: 'Sotonya benar-benar segar! Pas banget buat sarapan atau makan siang. Pelayanan cepat dan tempatnya luas.',
    rating: 5,
    date: '2 minggu lalu'
  },
  {
    id: '2',
    name: 'Siti Aminah',
    comment: 'Harga terjangkau tapi rasa bintang lima. Teh kampulnya juara, wajib coba kalau ke sini.',
    rating: 5,
    date: '1 bulan lalu'
  },
  {
    id: '3',
    name: 'Kevin Wijaya',
    comment: 'Favorit mahasiswa. Parkir luas dan suasananya nyaman buat kumpul bareng keluarga.',
    rating: 4,
    date: '3 hari lalu'
  }
];

export const LOGO_URL = "https://ugc.production.linktr.ee/46b27a39-288b-458e-86a5-4522b04a2cb8_d3cfb2a9d18084a3bd48d5fcf6e5f7cf-tplv-tiktokx-cropcenter-1080-1080.jpeg?io=true&size=avatar-v3_0";
export const HERO_BG = "https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/IMG_3423.JPEG";
