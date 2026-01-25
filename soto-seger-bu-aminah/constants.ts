
import { MenuItem, Testimonial, RestaurantInfo } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Soto Seger Bu Aminah",
  rating: 4.8,
  reviewsCount: 425,
  priceRange: "Rp 1.000 – Rp 25.000 per orang",
  address: "Jl. Pakel Dsn. Pilang No.81, RT.02/RW.06, Jepanan, Baturan, Kec. Colomadu, Kabupaten Karanganyar, Tengah 57171",
  phone: "0812-2934-6662",
  whatsapp: "6281229346662",
  openingHours: "Setiap Hari: 06.00 – 22.00",
  instagram: "https://www.instagram.com/sotosegerbuaminah/",
  tiktok: "https://www.tiktok.com/@sotosegerbuaminah",
};

export const WHATSAPP_RESERVATION_URL = "https://api.whatsapp.com/send/?phone=6281229346662&text&type=phone_number&app_absent=0";
export const MENU_PDF_URL = "https://drive.google.com/file/d/1xzwsEV0icIsBzBqV0jWfvORMBH1u0fz1/view?usp=drive_link";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'soto-daging',
    name: 'Soto Daging Sapi Seger',
    description: 'Kuah bening segar dengan irisan daging sapi empuk dan nasi hangat.',
    price: 'Rp 15.000',
    category: 'Makanan',
    image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'soto-ayam',
    name: 'Soto Ayam Kampung',
    description: 'Kelezatan soto ayam dengan suwiran ayam kampung dan kuah bumbu rempah rahasia.',
    price: 'Rp 12.000',
    category: 'Makanan',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: 'sate-puyuh',
    name: 'Sate Telur Puyuh',
    description: 'Telur puyuh pilihan yang dimasak bacem kecap gurih.',
    price: 'Rp 4.000',
    category: 'Tambahan',
    image: 'https://i.pinimg.com/736x/2f/50/99/2f5099cb00d98bc438d9fcb1350f33f1.jpg'
  },
  {
    id: 'sate-paru',
    name: 'Sate Paru Goreng',
    description: 'Paru sapi goreng garing dan manis sebagai pelengkap soto.',
    price: 'Rp 5.000',
    category: 'Tambahan',
    image: 'https://i.pinimg.com/736x/32/2c/37/322c373611b5552e2ab88337ba373cbe.jpg'
  },
  {
    id: 'tempe-mendoan',
    name: 'Tempe Mendoan',
    description: 'Tempe goreng tepung setengah matang yang disajikan hangat.',
    price: 'Rp 2.000',
    category: 'Tambahan',
    image: 'https://i.pinimg.com/736x/1e/a5/ab/1ea5ab64cf79b56fa3671b28ca8bf954.jpg'
  },
  {
    id: 'teh-kampul',
    name: 'Teh Kampul Special',
    description: 'Teh manis hangat dengan perasan jeruk nipis asli yang menyegarkan.',
    price: 'Rp 5.000',
    category: 'Minuman',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42VCH_u4nywZo-4XJv2nuGtcvuhdKqsBK4w&s',
    popular: true
  },
  {
    id: 'es-jeruk',
    name: 'Es Jeruk Seger',
    description: 'Jeruk peras murni disajikan dengan es batu kristal.',
    price: 'Rp 6.000',
    category: 'Minuman',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400'
  }
];

export const GALLERY_IMAGES = [
  { url: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/23f62312738135ab286e78812093c46b/Derivates/2e373c2ef0bf36c9e8475cbf93347db5a3496309.jpg", caption: "Signature Soto Daging" },
  { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", caption: "Suasana Restoran" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", caption: "Berbagai Lauk Pauk" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800", caption: "Interior Cozy" },
  { url: "https://img.yfisher.com/m34575/1749089604f7k/jpg70-t3-scale100.webp", caption: "Dapur Tradisional" },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", caption: "Keluarga Berbahagia" }
];

export const ARTICLES = [
  {
    id: 1,
    title: "Rahasia Kesegaran Kuah Soto Bu Aminah",
    excerpt: "Mengintip proses pemilihan bumbu rempah asli Nusantara yang membuat kuah kami tetap jernih namun kaya rasa.",
    date: "12 Mei 2024",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600",
    category: "Kuliner"
  },
  {
    id: 2,
    title: "Mengapa Teh Kampul Solo Begitu Ikonik?",
    excerpt: "Perpaduan unik antara teh pekat dengan irisan jeruk nipis asli yang menjadi pendamping wajib saat menyantap soto.",
    date: "05 Mei 2024",
    image: "https://img.okezone.com/content/2018/01/19/298/1847531/cara-tepat-menyeduh-teh-yang-nikmat-enNC85bU2S.jpg",
    category: "Minuman"
  },
  {
    id: 3,
    title: "Tips Sarapan Sehat ala Warga Colomadu",
    excerpt: "Soto seger menjadi pilihan utama warga sekitar untuk memulai hari dengan energi maksimal dan rasa yang ringan di perut.",
    date: "28 April 2024",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    category: "Gaya Hidup"
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
export const HERO_BG = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920";
