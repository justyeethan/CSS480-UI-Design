"use client";

import { StarIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import {
  Card,
  Chip,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
	Pagination,
  TableRow,
  TableCell,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
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

export default function RecommendedPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("electronics");
  const [categories, setCategories] = useState<string[]>([]);
  const [priceSort, setPriceSort] = useState<string>("asc");
  const [starSort, setStarSort] = useState<string>("asc");
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const stars = [5, 4, 3, 2, 1];
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=6`)
      .then((res) => res.json())
      .then(setProducts)
      .then(() => setLoaded(true));
  }, [category]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);
  // Sorting
  useEffect(() => {
    if (priceSort === "asc") {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }
  }, [priceSort, products]);
  useEffect(() => {
    if (starSort === "asc") {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
    } else {
      products.sort((a, b) => a.rating.rate - b.rating.rate);
    }
  }, [starSort, products]);
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex">
        <h1 className={title()}>Recommended&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>For YOU&nbsp;</h1>
      </div>
      <div className="w-1/2">
        <Table className="w-auto" aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Category</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Rating</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">{category}</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    {categories.map((category) => {
                      return (
                        <DropdownItem onPress={() => {setCategory(category)}} key={category}>{category}</DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
              <TableCell>
                {priceSort === "asc" ? (
                  <Button
                    variant="bordered"
                    onClick={() => setPriceSort("desc")}
                  >
                    Price: Low to High
                  </Button>
                ) : (
                  <Button
                    variant="bordered"
                    onClick={() => setPriceSort("asc")}
                  >
                    Price: High to Low
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {starSort === "asc" ? (
                  <Button
                    variant="bordered"
                    onClick={() => setStarSort("desc")}
                  >
                    Rating: High to Low
                  </Button>
                ) : (
                  <Button variant="bordered" onClick={() => setStarSort("asc")}>
                    Rating: Low to High
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Products products={products} isLoaded={true} />
      <Pagination total={10} initialPage={1} />
    </div>
  );
}
