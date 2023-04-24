export interface IProducts {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  company: ICompany[];
  color: IColors[];
  featured: boolean;
  freeShipping: boolean;
  inventory: number;
  averageRating: number;
  user: string;
}

export interface IColors {
  colors: string;
}

export interface ICompany {
  company: string;
}

export interface IListener {
  listener: string;
}
