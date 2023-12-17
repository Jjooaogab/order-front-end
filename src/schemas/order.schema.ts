import { OrderProduct } from ".";

export interface Order {
  id: string;
  number: number;
  status: string;
  product: OrderProduct[]
}