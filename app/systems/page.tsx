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
import { getSystems, getDesigns } from "../data-access/works";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function Works() {
  const systems = await getSystems();
  return (
    <MainContainer>
      <NavigationBar />
      <section className="min-h-fit pb-24 md:px-24">
        <div className="w-full h-full p-4 md:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 h-full w-full rounded-xl">
            {systems.map((data: any, index) => (
              <Link key={`system-${index}`} className="w-80" href={data?.link}>
                <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  <CardHeader className="relative p-0">
                    <Image
                      src={data.banner_url}
                      alt="Product Image"
                      className="w-full h-64 bg-cover"
                      width={320}
                      height={240}
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
