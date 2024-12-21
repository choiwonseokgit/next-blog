export interface PostMatter {
  title: string;
  date: string;
  desc: string;
  thumbnail: string;
}

export interface Post extends PostMatter {
  url: string;
  content: string;
}
