"use client";
import { MainContainer } from "@/components/main-container";
import AdminNavigationBar from "@/components/nav-admin";
import { SystemDataTable } from "./systems-datatable";
import { Button } from "@/components/ui/button";
import { getDesigns } from "@/app/data-access/works";
import { useEffect, useState } from "react";

export default function AdminWorks() {
  const [designs, setSystemList] = useState<any>();
  const getWorks = async () => {
    const designs = await getDesigns();
    setSystemList(designs);
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <MainContainer>
      <AdminNavigationBar />
      <section className="h-fit pb-14 px-12 md:px-24 text-center space-y-4">
        {designs ? <SystemDataTable data={designs} /> : <h1>Loading...</h1>}
      </section>
    </MainContainer>
  );
}
