import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import { MailIcon, FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <MainContainer>
      <NavigationBar />
      <section className="h-fit pb-14 md:px-24 text-start">
        <div className="w-full h-full p-4 md:p-0 mb-8">
          {/* <h1 className="mb-4 text-2xl md:text-4xl text-main-gradient-t font-bold">
            ✮ ⋆ ˚｡𖦹 ⋆｡°✩
          </h1> */}
          <div className="h-full w-full rounded-xl">
            <div className="flex gap-12 justify-between my-4">
              <h1 className="text-xl font-bold text-main-gradient-t border-b">
                Office Suites
              </h1>
              <ul className="flex gap-4 justify-end">
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
              </ul>
            </div>
            <div className="flex gap-12 justify-between my-4">
              <h1 className="text-xl font-bold text-main-gradient-t border-b">
                Presentation Software
              </h1>
              <ul className="flex gap-4 justify-end">
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
              </ul>
            </div>
            <div className="flex gap-12 justify-between my-4">
              <h1 className="text-xl font-bold text-main-gradient-t border-b">
                System Startup
              </h1>
              <ul className="flex gap-4 justify-end">
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
              </ul>
            </div>
            <div className="flex gap-12 justify-between my-4">
              <h1 className="text-xl font-bold text-main-gradient-t border-b">
                Server-Client Networking
              </h1>
              <ul className="flex gap-4 justify-end">
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
              </ul>
            </div>
            <div className="flex gap-12 justify-between my-4">
              <h1 className="text-xl font-bold text-main-gradient-t border-b">
                System Unit Repair
              </h1>
              <ul className="flex gap-4 justify-end">
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
              </ul>
            </div>
            <div className="flex gap-12 justify-between my-4">
              <h1 className="text-xl font-bold text-main-gradient-t border-b">
                MAC Filtering
              </h1>
              <ul className="flex gap-4 justify-end">
                <li>
                  <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
