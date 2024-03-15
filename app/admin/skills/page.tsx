"use client";
import { MainContainer } from "@/components/main-container";
import AdminNavigationBar from "@/components/nav-admin";
import { SkillsDataTable } from "./skills-datatable";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getSkills } from "@/app/data-access/skills";

export default function AdminWorks() {
  const [skills, setSkillList] = useState<any>();
  const getWorks = async () => {
    const skills = await getSkills();
    setSkillList(skills);
  };

  useEffect(() => {
    getWorks();
  }, [getWorks]);

  return (
    <MainContainer>
      <AdminNavigationBar />
      <section className="h-fit pb-14 px-12 md:px-24 text-center space-y-4">
        {skills ? <SkillsDataTable data={skills} /> : <h1>Loading...</h1>}
      </section>
    </MainContainer>
  );
}
