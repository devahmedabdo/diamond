// import { Product } from 'src/app/interfaces/product';
export type User = {
  firstName: string;
  lastName: string;
  // name: string;
  avatar: string;
  img: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  governate: string;
  city: string;
  street: string;
  rate: number;
  isAdmin: boolean;
  opinion: string;
  shopTime: number;
};
export type UsersResponse = {
  users: User[];
  news: any[];
  // limit: number;
  // total: number;
};
export type UserResponse = {
  profile: User;
  news: any[];
  // limit: number;
  // total: number;
};
