export type Blog = {
  description: string;
  writer: string;
  date: string;
  title: string;
  img?: string;
  id: any;
  content: BlogContent;
  tags: string[];
  comments: BlogComment[];
};
export type BlogContent = {
  qoute?: string;
  qouteDescription?: string;
  title2?: string;
  title2Description?: string;
  footer?: string;
  images: BlogContentImage[];
};
export type BlogContentImage = {
  img: string;
};
export type BlogComment = {
  comment: string;
  date: string;
  owner: string;
  img: string;
  id?: any;
  replies: BlogComment[];
};
export type BlogsResponse = {
  blogs: Blog[];
  // limit: number;
  // total: number;
};
