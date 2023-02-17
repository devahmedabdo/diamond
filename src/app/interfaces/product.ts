// import { Product } from 'src/app/interfaces/product';
export type Product = {
  cart: boolean;
  id: any;
  compare: boolean;
  disscount: number;
  favourite: boolean;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  name: string;
  price: number;
  review: number;
  seller: string;
  sellerCount: number;
  stock: number;
  description: string;
  tags: string[];
};
export type ProductResponse = {
  products: Product[];
  // limit: number;
  // total: number;
};
