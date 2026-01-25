
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Makanan' | 'Minuman' | 'Tambahan';
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface RestaurantInfo {
  name: string;
  rating: number;
  reviewsCount: number;
  priceRange: string;
  address: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  instagram: string;
  tiktok?: string;
}
