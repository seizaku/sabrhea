import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import { getSystems } from "../data-access/works";
import { getDesigns } from "../data-access/works";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function Works() {
  const systems = await getSystems();
  const designs = await getDesigns();

  return (
    <MainContainer>
      <NavigationBar />
      <section className="min-h-fit p-4 md:px-24">
        {systems && (
          <h1 className="text-third text-2xl font-bold mb-4">My Systems</h1>
        )}
        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-4">
          {systems.map((data: any, index) => (
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
              <Link
                href={data?.link}
                className="opacity-0 hover:opacity-100 ease-in-out transition-all duration-500 absolute top-0 left-0 h-full w-full bg-black/40 flex flex-col items-center justify-center text-white cursor-pointer"
              >
                <h1 className="text-xl my-2 font-bold">{data.system_title}</h1>
                <p className="w-1/2 text-xs text-center">
                  {data.system_description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-fit pb-24 p-4 md:px-24">
        {designs && (
          <h1 className="text-third text-2xl font-bold mb-4">My Designs</h1>
        )}
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
                <p className="w-1/2 text-xs text-center">
                  {data.design_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainContainer>
  );
}
