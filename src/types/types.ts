export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductState {
  products: Product[];
  productDetail: Product | null;
}

export interface CartProduct {
  id: number;
  title: string;
  brand: string;
  thumbnail: string;
  price: number;
  stock: number;
  amount: number;
}

export interface UserAccount {
  email: string;
  password: string;
  address: string;
  cellphone: number;
}

export interface UserActive {
  email: string;
  password: string;
}
