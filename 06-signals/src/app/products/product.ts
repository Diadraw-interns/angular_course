export interface Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  quantityInStock?: number;
  tag: string;
}
