export interface CardProps {
  image: any;
  name: string;
  extraStyle?: any;
  scale: any;
  description: string;
}

export interface BookListArray {
  bookList: BookListType[];
}

export interface BookListType {
  id: number;
  name: string;
  description: string;
}
