"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Divider, Image } from "@nextui-org/react";
import { title } from "@/components/primitives";

interface ProductParams {
  params: { id: string }; // params contains the product `id`.
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductPage({ params }: ProductParams) {
  console.log(params);
  const product_id = params.id;
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "Loading...",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product_id}`)
      .then((res) => res.json())
      .then(setProduct)
      .then(console.log);
  }, [product_id]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex justify-between items-center">
        <Image
          width={300}
          height={100}
          src={product.image}
          className="fixed start-0 ml-20"
          alt={product.title}
        />
        <Divider orientation="vertical" className="m-10" />
        <h1 className="fixed text-3xl lg:text-4xl mr-20 font-bold">{product.title}</h1>
      </div>
    </div>
  );
}
