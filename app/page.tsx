"use client"; // This is required to use Next.js dynamic imports? I guess?

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";

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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then(setProducts)
  }, []);
  console.log(products);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title({ color: "blue" })}>NAMAZON</h1>
      <h1 className='italic text-base font-bold'>The next Generation of Online Shopping... <span className="font-extrabold text-lg italic">Reimagined.</span></h1>
      <div className="grid grid-flow-row grid-cols-3 grid-rows-3 text-center justify-center">
        {
          // loop through products
          products.map((product) => {
            return (
              <Card key={product.id} className="py-4 min-w-1/2 min-h-1/3 m-5">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    {product.category}
                  </p>
                  <h4 className="font-bold text-large">{product.title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible items-center justify-center py-2">
                  <Image
                    alt={product.title}
                    className="object-cover bg-gradient-to-r from-white-500 rounded-xl"
                    src={product.image}
                    width={270}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{product.rating.rate}/5.0</b>
                  <p className="text-default-500">${product.price} USD</p>
                </CardFooter>
              </Card>
            );
          })
        }
      </div>
    </section>
  );
}
