export interface Review {
  id: number;
  productId: number;
  userName: string;
  title: string;
  text: string;
}

export interface Product {
  id: number;
  productName: string;
  productCode: string;
  description: string;
  price: number;
  quantityInStock?: number;
  hasReviews?: boolean;
  reviews?: Review[];
}
