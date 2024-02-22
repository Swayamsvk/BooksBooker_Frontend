export interface DashboardProps {
  navigation: any;
}

export interface CardProps {
  image: any;
  name: string;
  extraStyle?: any;
  scale: any;
  description: string;
  onPress: () => void;
}

export interface BookListArray {
  bookList: BookListType[];
}

export interface BookListType {
  id: number;
  name: string;
  description: string;
}
