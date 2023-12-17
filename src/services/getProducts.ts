import { Product } from "@/schemas";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('http://localhost:8000/products')
  return res.json()
}