"use client"; // This is required to use Next.js dynamic imports? I guess?

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  Card,
  CardHeader,
  Pagination,
  CardBody,
  CardFooter,
  Spacer,
  Image,
  Chip,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import Products from "@/components/products";

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
  const [isLoaded, setLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then(setProducts)
      .then(() => setLoaded(true));
  }, []);
  console.log(products);
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title({ size: "lg", color: "blue" })}>NAMAZON</h1>
      <h1 className="italic text-base font-bold">
        The next Generation of Online Shopping...{" "}
        <span className="font-extrabold text-lg italic">Reimagined.</span>
      </h1>
      <Products products={products} isLoaded={isLoaded} />
      <Pagination total={10} initialPage={1} />
    </div>
  );
}
