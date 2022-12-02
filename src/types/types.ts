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
  productsClean: Product[];
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
  cellphone: string;
}

export interface UserActive {
  uid: string;
  email: string;
  password: string;
}

export interface UserLocalStorage {
  uid: string;
  email: string;
}