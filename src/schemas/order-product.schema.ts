import { Order, Product } from ".";

export interface OrderProduct {
  id: string;
  qntd: number;
  orderId?: string;
  order: Order;
  product: Product[]
}