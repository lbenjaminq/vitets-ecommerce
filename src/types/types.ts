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

export interface CartProduct {
  id:number;
  title:string;
  brand:string;
  thumbnail:string;
  price:number;
  stock:number;
  amount:number;
}
