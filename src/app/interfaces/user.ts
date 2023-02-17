// import { Product } from 'src/app/interfaces/product';
export type User = {
  firstName: string;
  lastName: string;
  img: 'string';
  email: string;
  password: string;
  phone: string;
  country: string;
  governate: string;
  city: string;
  street: string;
  rate: number;
  opinion: string;
  shopTime: number;
};
export type UsersResponse = {
  users: User[];
  // limit: number;
  // total: number;
};
