export interface PostMatter {
  title: string;
  date: Date;
  desc: string;
  thumbnail: string;
}

export interface Post extends PostMatter {
  url: string;
  dateStr: string;
  content: string;
  category: string;
  categoryName: string;
  slug: string;
}
