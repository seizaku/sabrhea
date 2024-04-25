"use client";
import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import { getSystems } from "../data-access/works";
import { getDesigns } from "../data-access/works";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Works() {
  const [systems, setSystems] = useState<any>();
  const [designs, setDesigns] = useState<any>();
  const [selectedImg, setSelectedImg] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [isLandscape, setOrientation] = useState(false);

  async function getWorks() {
    const fetch_systems = await getSystems();
    const fetch_designs = await getDesigns();
    setSystems(fetch_systems);
    setDesigns(fetch_designs);
  }

  function selectImage(img: any) {
    setSelectedImg(img);
    setSelected(true);
  }

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <>
      {isSelected && (
        <div
          onClick={() => setSelected(false)}
          className="z-50 fixed h-screen w-full flex items-center bg-black/70"
        >
          <div className="m-auto flex items-center max-w-5xl max-h-[80%] object-cover p-4">
            <Image
              className="max-w-full"
              src={selectedImg}
              height={1080}
              width={720}
              alt="Image"
            />
          </div>
        </div>
      )}
      <MainContainer>
        <NavigationBar />
        <section className="min-h-fit p-4 md:px-24">
          {systems && (
            <h1 className="text-third text-2xl font-bold mb-4">My Systems</h1>
          )}
          {!systems && (
            <div>
              <Skeleton className="h-12 w-48 my-2" />
              <div className="grid gap-2 grid-cols-4 mb-8">
                <Skeleton className="h-48 w-76" />
                <Skeleton className="h-48 w-76" />
                <Skeleton className="h-48 w-76" />
                <Skeleton className="h-48 w-76" />
              </div>
              <Skeleton className="h-12 w-48 my-2" />
              <div className="grid gap-2 grid-cols-4">
                <Skeleton className="h-48 w-76" />
                <Skeleton className="h-48 w-76" />
                <Skeleton className="h-48 w-76" />
                <Skeleton className="h-48 w-76" />
              </div>
            </div>
          )}
          <div className="w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-4">
            {systems &&
              systems.map((data: any, index: any) => (
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
                    target="_blank"
                    href={data?.link}
                    className="opacity-0 hover:opacity-100 ease-in-out transition-all duration-500 absolute top-0 left-0 h-full w-full bg-black/40 flex flex-col items-center justify-center text-white cursor-pointer"
                  >
                    <h1 className="text-xl my-2 font-bold">
                      {data.system_title}
                    </h1>
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
            {designs &&
              designs.map((data: any, index: any) => (
                <div
                  onClick={() => selectImage(data.banner_url)}
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
                    <h1 className="text-xl my-2 font-bold">
                      {data.design_title}
                    </h1>
                    <p className="w-1/2 text-xs text-center">
                      {data.design_description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </MainContainer>
    </>
  );
}
