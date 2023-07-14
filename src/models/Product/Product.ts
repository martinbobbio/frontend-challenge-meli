export interface ResponseProductsAuthor {
  firstname: string;
  lastname: string;
}

export interface ResponseProductsItem {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
}

export interface ResponseProducts {
  author: ResponseProductsAuthor;
  categories: string[];
  items: ResponseProductsItem[];
}
