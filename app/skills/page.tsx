import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import { MailIcon, FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSkills } from "../data-access/skills";

export default async function Skills() {
  const skills = await getSkills();
  console.log(skills);
  return (
    <MainContainer>
      <NavigationBar />
      <section className="h-fit pb-14 md:px-24 text-start">
        <div className="w-full h-full p-4 md:p-0 mb-8">
          {/* <h1 className="mb-4 text-2xl md:text-4xl text-main-gradient-t font-bold">
            ✮ ⋆ ˚｡𖦹 ⋆｡°✩
          </h1> */}
          <div className="h-full w-full rounded-xl">
            {skills.map((skill: any, index) => (
              <div
                key={`skill-${index}`}
                className="flex gap-12 justify-between my-4"
              >
                <h1 className="text-xl font-bold text-main-gradient-t border-b">
                  {skill.skill_description}
                </h1>
                <ul className="flex gap-4 justify-end">
                  {Array.from({ length: skill.rating }).map((value, index) => (
                    <li key={index}>
                      <Image
                        alt="paw-icon"
                        height={24}
                        width={24}
                        src="/paw.png"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
