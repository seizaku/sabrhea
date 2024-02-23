import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import { MailIcon, FacebookIcon } from "lucide-react";
import Link from "next/link";
export default function About() {
  return (
    <MainContainer>
      <NavigationBar />
      <section className="h-fit pb-14 md:px-24 text-center">
        <div className="h-64 w-64 rounded-full bg-muted mx-auto my-4"></div>
        <h1 className="text-2xl font-bold text-main-gradient-t">
          ⋆ ✮ Lorem Ipsum ✮ ⋆
        </h1>
        <ul className="flex gap-2 mx-auto justify-center mb-2">
          <li>
            <Link href="https://www.facebook.com/">
              <FacebookIcon className="text-third h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/">
              <MailIcon className="text-third h-5 w-5" />
            </Link>
          </li>
        </ul>
        <p className="text-sm leading-6 text-muted-foreground/50 text-start p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero
          laborum commodi ipsam id qui asperiores odit beatae quaerat, inventore
          esse cupiditate nulla iste a, neque autem nihil corporis ad?
        </p>
      </section>
    </MainContainer>
  );
}
