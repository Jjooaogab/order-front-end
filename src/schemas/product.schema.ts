import { OrderProduct } from ".";

export interface Product {
  id: string;
  name: string;
  value: number;
  productImg: string;
  orderProductId?: String;
  orderProduct?: OrderProduct;
}