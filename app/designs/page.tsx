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
  const designs = await getDesigns();
  return (
    <MainContainer>
      <NavigationBar />
      <section className="min-h-fit pb-24 md:px-24">
        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-4">
          {designs.map((data: any, index) => (
            <div
              key={index}
              className="relative p-1 h-full overflow-hidden flex items-center justify-between rounded-lg"
            >
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={data?.banner_url}
                  alt="Design Image"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="opacity-0 hover:opacity-100 ease-in-out transition-all duration-500 absolute top-0 left-0 h-full w-full bg-black/40 flex flex-col items-center justify-center text-white cursor-pointer">
                <h1 className="text-xl my-2 font-bold">{data.design_title}</h1>
                <p className="w-1/2 text-xs">{data.design_description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainContainer>
  );
}
