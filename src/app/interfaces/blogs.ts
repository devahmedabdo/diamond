export type Blogs = {
  description: string;
  writer: string;
  date: string;
  title: string;
  img: string;
  id: any;
};
export type BlogsResponse = {
  blogs: Blogs[];
  // limit: number;
  // total: number;
};
