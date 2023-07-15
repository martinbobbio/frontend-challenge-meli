export interface ResponseProductAuthor {
  firstname: string;
  lastname: string;
}

export interface ResponseProductPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ResponseProductListItem {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  place: string;
  price: ResponseProductPrice;
}

export interface ResponseProductDetailItem {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  price: ResponseProductPrice;
}

export interface ResponseProductList {
  author: ResponseProductAuthor;
  categories: string[];
  items: ResponseProductListItem[];
}

export interface ResponseProductDetail {
  author: ResponseProductAuthor;
  categories: string[];
  item: ResponseProductDetailItem;
}
