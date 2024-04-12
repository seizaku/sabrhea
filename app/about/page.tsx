import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import {
  MailIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
import { getProfileInformation } from "../data-access/about";
import Image from "next/image";

export default async function About() {
  const data: any = await getProfileInformation();
  return (
    <MainContainer>
      <NavigationBar />
      <section className="h-fit pb-14 md:px-24 text-center">
        <Image
          className="h-64 w-64 rounded-full bg-muted mx-auto my-4"
          src={data.profile_picture}
          alt="profile-picture"
        />
        <h1 className="text-2xl font-bold text-third">{data.full_name}</h1>
        <ul className="flex gap-2 mx-auto justify-center my-2">
          <li>
            <Link href={`${data.linkedin_link}`}>
              <LinkedinIcon className="text-muted-foreground h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href={`${data.instagram_link}`}>
              <InstagramIcon className="text-muted-foreground h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href={data.facebook_link}>
              <FacebookIcon className="text-muted-foreground h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href={`https://mail.google.com/mail/?view=cm&to=${data.email_address}`}
            >
              <MailIcon className="text-muted-foreground h-5 w-5" />
            </Link>
          </li>
        </ul>
        <p className="text-sm leading-6 text-muted-foreground/50 text-center p-4">
          {data.about_description}
        </p>
      </section>
    </MainContainer>
  );
}
