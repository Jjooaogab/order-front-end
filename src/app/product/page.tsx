'use client'

// Components Imports
import { Product } from "@/schemas";
import { Input } from "@/components/ui/input";
// Other Imports
import { getProducts } from "@/services/getProducts";
import {  PenIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { useState, useEffect } from "react";
import { ModalCreate, ModalDelete, ModalEdit } from "./components";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const productSearched: Product[] = products.filter((i: Product) => {
    const nameLower = i.name.toLowerCase()
    return nameLower.includes(search.toLowerCase())
  })

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-zinc-900 overflow-hidden">
      <div className="flex w-screen justify-between items-center mt-2">
        <Input
          placeholder={"Search any product..."}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          className="w-48 sm:w-64 md:w-72 lg:w-96 h-10 border-none bg-zinc-800 focus:ring-0 mx-8"
        />
        <ModalCreate icon={PlusIcon} />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productSearched.map((i) => (
          <div key={i.id} className="bg-zinc-800 p2 flex flex-col justify-center items-center h-72 w-60 rounded-xl">
            <h1 className="font-semibold text-xl text-zinc-300">{i.name}</h1>
            <p className="font-medium text-lg text-green-400">R$ {Math.round(i.value)}</p>
            <div className="h-[150px] w-[150px] bg-zinc-200"></div>
            <div className="flex w-full justify-around mt-4 text-zinc-200">
              <ModalEdit icon={PenIcon} id={i.id} image={i.productImg} name={i.name} value={i.value} />
              <ModalDelete icon={TrashIcon} id={i.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

