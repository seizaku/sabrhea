import { MainContainer } from "@/components/main-container";
import NavigationBar from "@/components/nav";
import Image from "next/image";
import { getSkills } from "../data-access/skills";
import { useEffect, useState } from "react";

export default async function Skills() {
  const [skills, setSkills] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      let data = await getSkills();
      setSkills(data);
    }
    fetchData();
  }, []);
  console.log(skills);
  return (
    <MainContainer>
      <NavigationBar />
      <section className="h-fit pb-14 md:px-24 text-start">
        <div className="w-full h-full p-4 md:p-0 mb-8">
          <div className="h-full w-full rounded-xl">
            {skills.map((skill: any, index: number) => (
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
