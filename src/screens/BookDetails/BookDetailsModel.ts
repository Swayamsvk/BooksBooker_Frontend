export interface BookListArray {
  reviews: BookDetailsType[];
}

export interface BookDetailsType {
  id: number;
  name: string;
  description: string;
}
