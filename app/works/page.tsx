import { MainContainer } from "@/components/main-container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NavigationBar from "@/components/nav";
import { getSystems } from "../data-access/works";
import Link from "next/link";

export default async function Works() {
  const systems = await getSystems();
  console.log(systems);
  return (
    <MainContainer>
      <NavigationBar />
      <section className="min-h-fit pb-24 md:px-24">
        <div className="w-full h-full p-4 md:p-0 mb-8">
          <h1 className="mb-2 text-2xl md:text-2xl text-main-gradient-t font-bold">
            ⋆ ✩ Graphic Designs ✮ ⋆
          </h1>
          <div className="h-full w-full rounded-xl">
            <Carousel className="w-full mx-auto h-[540px]">
              <CarouselContent className="h-[540px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem className="h-[540px]" key={index}>
                    <div className="p-1 h-[540px]">
                      <Card className="h-full border-none">
                        <CardContent className="flex rounded-xl h-full items-center bg-muted justify-center p-6"></CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full h-full p-4 md:p-0">
          <h1 className="mb-2 text-2xl md:text-2xl text-main-gradient-t font-bold">
            ⋆ ✩ Systems ✮ ⋆
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 h-full w-full rounded-xl">
            {systems.map((data: any, index) => (
              <Link key={`system-${index}`} href={data?.link}>
                <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  <CardHeader className="relative p-0">
                    <img
                      src={data.banner_url}
                      alt="Product Image"
                      className="w-full h-60 bg-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                      {data.system_title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground/50 mb-4">
                      {data.system_description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
