import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from "@/data/products";

export function ProductCarousel() {
    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            className="py-4 mb-3"
        >
            <h2 className="text-balance text-2xl font-semibold lg:text-3xl mb-4">
                Related Products
            </h2>
            <CarouselContent>
                {products.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Link
                                key={product.id}
                                href={product.url}
                                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg transition-all h-full flex flex-col" // Added h-full and flex classes
                                aria-label={`View ${product.name} product details`}
                            >
                                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-sm group-hover:shadow-md flex flex-col"> {/* Added flex flex-col */}
                                    <CardContent className="p-0 flex-1">
                                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                                priority={false}
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-4 bg-white dark:bg-gray-900 rounded-b-lg flex flex-col items-center text-center">
                                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm mt-2 text-muted-foreground transition-colors group-hover:text-black dark:group-hover:text-white">
                                            {product.description}
                                        </p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}