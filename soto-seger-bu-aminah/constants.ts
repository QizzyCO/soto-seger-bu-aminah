import { MenuItem, Testimonial, RestaurantInfo } from './types.ts';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: 'Soto Seger Bu Aminah',
  rating: 4.8,
  reviewsCount: 425,
  priceRange: 'Rp 1.000 - Rp 14.000',
  address: 'Jl. Pakel Dsn. Pilang No.81, Jepanan, Baturan, Colomadu & Jl. Slamet Riyadi No.31, Kartasura',
  phone: '0812-2934-6662',
  whatsapp: '6281229346662',
  openingHours: 'Setiap Hari: 06.00 - 22.00',
  instagram: 'https://www.instagram.com/sotosegerbuaminah/',
  tiktok: 'https://www.tiktok.com/@sotosegerbuaminah',
};

export const WHATSAPP_RESERVATION_URL = 'https://api.whatsapp.com/send/?phone=6281229346662&text&type=phone_number&app_absent=0';
export const WHATSAPP_PARTNER_URL = 'https://api.whatsapp.com/send/?phone=6281229346662&text=Halo,%20saya%20tertarik%20untuk%20menjadi%20mitra%20Soto%20Seger%20Bu%20Aminah&type=phone_number&app_absent=0';
export const WHATSAPP_CATERING_URL = 'https://api.whatsapp.com/send/?phone=6281229346662&text=Halo%20Bu%20Aminah,%20saya%20ingin%20memesan%20katering%20Soto%20Seger%20untuk%20acara%20saya.%20Mohon%20info%20daftar%20menu%20dan%20harganya.%20Terima%20kasih.&type=phone_number&app_absent=0';
export const MENU_PDF_URL = 'https://drive.google.com/file/d/1xzwsEV0icIsBzBqV0jWfvORMBH1u0fz1/view?usp=drive_link';

const LIBRARY_BASE = 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/';

const encodeLib = (filename: string) => `${LIBRARY_BASE}${filename.replace(/ /g, '%20')}`;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'soto-daging',
    name: 'Soto Daging Sapi',
    description: 'Soto kuah bening segar dengan irisan daging sapi.',
    price: 'Rp 8.000',
    category: 'Makanan',
    image: `${LIBRARY_BASE}IMG_3429.jpeg`,
    popular: true
  },
  {
    id: 'soto-ayam',
    name: 'Soto Ayam Kampung',
    description: 'Soto gurih menggunakan ayam kampung asli.',
    price: 'Rp 8.000',
    category: 'Makanan',
    image: `${LIBRARY_BASE}IMG_3431.jpeg`,
    popular: true
  },
  {
    id: 'soto-pisah',
    name: 'Soto Pisah Sapi/Ayam',
    description: 'Pilihan soto sapi atau ayam dengan nasi dipisah.',
    price: 'Rp 10.000',
    category: 'Makanan',
    image: `${LIBRARY_BASE}IMG_3439.jpeg`
  },
  {
    id: 'nasi-pecel',
    name: 'Nasi Pecel',
    description: 'Nasi dengan sayur segar dan sambal kacang.',
    price: 'Rp 10.000',
    category: 'Makanan',
    image: encodeLib('WhatsApp Image 2026-02-13 at 19.19.12.jpeg')
  },
  { id: 'kerupuk-karak', name: 'Karak', description: 'Pelengkap renyah.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.46.00.jpeg') },
  { id: 'kerupuk-biasa', name: 'Kerupuk Biasa', description: 'Kerupuk kaleng renyah.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.46.00 (3).jpeg') },
  { id: 'mendoan', name: 'Mendoan', description: 'Gorengan khas hangat.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.18.38 (1).jpeg') },
  { id: 'tempe-garit', name: 'Tempe Garit', description: 'Tempe goreng gurih.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.18.38 (3).jpeg') },
  { id: 'tahu-goreng', name: 'Tahu Goreng', description: 'Tahu goreng lembut.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.49.jpeg') },
  { id: 'tahu-isi', name: 'Tahu Isi', description: 'Tahu goreng isi sayuran.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.18.38.jpeg') },
  { id: 'tahu-bacem', name: 'Tahu Bacem', description: 'Tahu bacem manis gurih.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.46.jpeg') },
  { id: 'pangsit', name: 'Pangsit', description: 'Pangsit goreng renyah.', price: 'Rp 2.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.46.00 (2).jpeg') },
  { id: 'tahu-bakso', name: 'Tahu Bakso', description: 'Tahu isi adonan bakso.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.18.39.jpeg') },
  { id: 'perkedel', name: 'Perkedel', description: 'Perkedel kentang lembut.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.18.38 (2).jpeg') },
  { id: 'martabak', name: 'Martabak', description: 'Martabak telur goreng.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.46.jpeg') },
  { id: 'bakso-sunduk', name: 'Bakso Sunduk', description: 'Bakso tusuk goreng.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.47 (1).jpeg') },
  { id: 'sosis', name: 'Sosis', description: 'Sosis goreng gurih.', price: 'Rp 3.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.48 (3).jpeg') },
  { id: 'sosis-basah', name: 'Sosis Basah', description: 'Sosis tradisional basah.', price: 'Rp 5.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.48 (1).jpeg') },
  { id: 'telur-ceplok', name: 'Telur Ceplok', description: 'Telur ayam goreng.', price: 'Rp 5.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 19.18.53.jpeg') },
  { id: 'telur-bacem', name: 'Telur Bacem', description: 'Telur bacem coklat manis.', price: 'Rp 5.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.47.jpeg') },
  { id: 'tempe-bacem', name: 'Tempe Bacem', description: 'Tempe bacem coklat manis.', price: 'Rp 5.000', category: 'Tambahan Lauk', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.48 (2).jpeg') },
  { id: 'sate-apus', name: 'Sate Apus', description: 'Sate kenyal khas tradisional.', price: 'Rp 3.000', category: 'Tambahan Sate', image: encodeLib('WhatsApp Image 2026-02-13 at 18.45.59.jpeg') },
  { id: 'sate-usus', name: 'Sate Usus', description: 'Sate usus ayam gurih.', price: 'Rp 5.000', category: 'Tambahan Sate', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.47 (2).jpeg') },
  { id: 'sate-ati', name: 'Sate Ati Ampela', description: 'Sate ati ampela ayam.', price: 'Rp 6.000', category: 'Tambahan Sate', image: encodeLib('WhatsApp Image 2026-02-13 at 18.35.48.jpeg') },
  { id: 'sate-kikil', name: 'Sate Kikil', description: 'Sate kikil sapi bacem.', price: 'Rp 7.000', category: 'Tambahan Sate', image: encodeLib('WhatsApp Image 2026-02-13 at 18.45.59 (1).jpeg') },
  { id: 'sate-babat', name: 'Sate Babat', description: 'Sate babat sapi bacem.', price: 'Rp 7.000', category: 'Tambahan Sate', image: encodeLib('WhatsApp Image 2026-02-13 at 18.45.59 (2).jpeg') },
  { id: 'sate-paru', name: 'Sate Paru', description: 'Sate paru sapi goreng.', price: 'Rp 7.000', category: 'Tambahan Sate', image: encodeLib('WhatsApp Image 2026-02-13 at 18.45.59 (3).jpeg') },
  { id: 'es-teh', name: 'Es Teh', description: 'Teh manis dingin menyegarkan khas Solo.', price: 'Rp 3.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.07.jpeg', popular: true },
  { id: 'es-batu', name: 'Es Batu', description: 'Tambahan es batu kristal.', price: 'Rp 1.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.07%20(1).jpeg' },
  { id: 'teh-anget', name: 'Teh Anget', description: 'Teh manis seduh hangat dengan aroma melati.', price: 'Rp 3.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.08.jpeg' },
  { id: 'es-jeruk', name: 'Es Jeruk', description: 'Perasan jeruk segar asli dengan es.', price: 'Rp 6.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.08%20(1).jpeg' },
  { id: 'kopi', name: 'Kopi', description: 'Kopi hitam mantap teman makan soto.', price: 'Rp 5.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.08%20(2).jpeg' },
  { id: 'es-teh-kampul', name: 'Es Teh Kampul', description: 'Khas Solo! Teh manis dingin with irisan jeruk segar.', price: 'Rp 5.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.09.jpeg', popular: true },
  { id: 'teh-hangat-kampul', name: 'Teh Hangat Kampul', description: 'Teh manis hangat with irisan jeruk segar yang harum.', price: 'Rp 5.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.09%20(1).jpeg' },
  { id: 'air-es', name: 'Air Es', description: 'Air mineral dingin yang menyegarkan.', price: 'Rp 2.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.09%20(2).jpeg' },
  { id: 'jeruk-anget', name: 'Jeruk Anget', description: 'Perasan jeruk segar disajikan hangat.', price: 'Rp 6.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.10.jpeg' },
  { id: 'sirup', name: 'Es Sirup', description: 'Sirup manis dingin yang menyegarkan.', price: 'Rp 4.000', category: 'Minuman', image: 'https://raw.githubusercontent.com/QizzyCO/soto-seger-bu-aminah/refs/heads/main/library/WhatsApp%20Image%202026-02-16%20at%2015.41.07%20(2).jpeg' },
];

const GALLERY_FILES = [
  'IMG_3304.jpeg', 'IMG_3305.jpeg', 'IMG_3306.jpeg', 'IMG_3423.jpeg',
  'IMG_3428.jpeg', 'IMG_3429.jpeg', 'IMG_3430.jpeg', 'IMG_3431.jpeg',
  'IMG_3432.jpeg', 'IMG_3433.jpeg', 'IMG_3434.jpeg', 'IMG_3435.jpeg',
  'IMG_3436.jpeg', 'IMG_3439.jpeg', 'IMG_3441.jpeg', 'IMG_3442.jpeg',
  'IMG_3443.jpeg', 'IMG_3444.jpeg', 'IMG_3445.jpeg', 'IMG_3446.jpeg'
];

export const GALLERY_IMAGES = GALLERY_FILES.map((file, idx) => ({
  url: `${LIBRARY_BASE}${file}`,
  caption: [
    'Sajian Soto Seger Daging Sapi',
    'Pilihan Lauk Pauk Tradisional',
    'Soto Ayam Kampung Spesial',
    'Suasana Hangat Bu Aminah',
    'Detail Bumbu Rempah Pilihan',
    'Kenikmatan Makan Siang',
    'Menu Favorit Keluarga',
    'Teh Kampul Segar',
    'Lauk Tempe & Tahu Gurih',
    'Sate Telur Puyuh & Usus',
    'Dapur Tradisional Kami',
    'Kualitas Bahan Premium',
    'Area Makan Nyaman',
    'Pelayanan Ramah & Cepat',
    'Porsi Puas Harga Pas',
    'Kesegaran di Setiap Suap',
    'Destinasi Kuliner Colomadu',
    'Warisan Rasa Sejak Dulu',
    'Pilihan Kerupuk Renyah',
    'Soto Seger Bu Aminah'
  ][idx] || 'Galeri Bu Aminah'
}));

export const PARTNER_LOGOS = [
  { name: 'GoFood', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Gofood_logo.svg' },
  { name: 'GrabFood', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Grab_logo.svg' },
  { name: 'ShopeeFood', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Shopee_Food_logo.svg' },
  { name: 'Halal Indonesia', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Halal_Indonesia.svg' },
];

export const PARTNERS = [
  {
    id: 1,
    title: 'Peluang Kemitraan',
    excerpt: 'Bergabunglah dengan kesuksesan Soto Seger Bu Aminah. Kami membuka kesempatan kemitraan franchise di seluruh Indonesia.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600',
    category: 'Franchise'
  },
  {
    id: 3,
    title: 'Layanan Katering',
    excerpt: 'Hadirkan kelezatan soto legendaris di acara spesial Anda. Melayani pernikahan, rapat kantor, and acara keluarga.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600',
    category: 'Layanan'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    comment: 'Sotonya benar-benar segar! Pas banget buat sarapan atau makan siang. Pelayanan cepat and tempatnya luas.',
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
    comment: 'Favorit mahasiswa. Parkir luas and suasananya nyaman buat kumpul bareng keluarga.',
    rating: 4,
    date: '3 hari lalu'
  }
];

export const LOGO_URL = 'https://ugc.production.linktr.ee/46b27a39-288b-458e-86a5-4522b04a2cb8_d3cfb2a9d18084a3bd48d5fcf6e5f7cf-tplv-tiktokx-cropcenter-1080-1080.jpeg?io=true&size=avatar-v3_0';
export const HERO_BG = `${LIBRARY_BASE}IMG_3423.jpeg`;