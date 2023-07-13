import { AppProps } from "next/app";
import { StarIcon } from "./icons";
import { title } from "@/components/primitives";
import { useKBar } from "kbar";
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
import { useRouter } from "next/navigation";

interface ProductsProps {
  products: Products[];
  isLoaded: boolean;
}

interface Products {
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

export default function Products({ products, isLoaded }: ProductsProps) {
  const router = useRouter();
  const kbar = useKBar();
  if (!isLoaded) {
    return (
      <div className="grid grid-flow-row lg:grid-cols-3 sm:grid-cols-1 text-center justify-center">
        <Card className="space-y-5 p-4 py-4 min-w-1/2 min-h-1/3 m-5">
          <div className="h-24 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </div>
        </Card>
        <Card
          className="w-[200px] space-y-5 p-4 py-4 min-w-1/2 min-h-1/3 m-5"
          radius="lg"
        >
          <div className="h-24 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </div>
        </Card>
        <Card className="w-[200px] space-y-5 p-4 py-4 min-w-1/2 min-h-1/3 m-5">
          <div className="h-24 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </div>
        </Card>
        <Card className="w-[200px] space-y-5 p-4 py-4 min-w-1/2 min-h-1/3 m-5">
          <div className="h-24 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </div>
        </Card>
        <Card className="w-[200px] space-y-5 p-4 py-4 min-w-1/2 min-h-1/3 m-5">
          <div className="h-24 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </div>
        </Card>
        <Card className="w-[200px] space-y-5 p-4 py-4 min-w-1/2 min-h-1/3 m-5">
          <div className="h-24 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center justify-center">
      {
        // loop through products
        products.map((product) => {
          return (
            <Card
              isPressable
              onPress={() => {
                router.push(`/product/${product.id}`);
              }}
              key={product.id}
              className="py-4 min-w-1/2 min-h-1/3 m-5"
            >
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
                  isZoomed
                  src={product.image}
                  width={270}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <Chip variant="faded" color="warning" size="md">
                  <div className="flex">
                    <b className="mr-1"> {product.rating.rate}/5.0</b>
                    <StarIcon size={20} />
                  </div>
                </Chip>
                <p className="text-default-500">${product.price} USD</p>
              </CardFooter>
            </Card>
          );
        })
      }
    </div>
  );
}
