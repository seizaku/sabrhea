"use client";
import { MainContainer } from "@/components/main-container";
import AdminNavigationBar from "@/components/nav-admin";
import { SystemDataTable } from "./systems-datatable";
import { Button } from "@/components/ui/button";
import { getSystems } from "@/app/data-access/works";
import { useEffect, useState } from "react";

export default function AdminWorks() {
  const [systems, setSystemList] = useState<any>();
  const getWorks = async () => {
    const systems = await getSystems();
    setSystemList(systems);
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <MainContainer>
      <AdminNavigationBar />
      <section className="h-fit pb-14 px-12 md:px-24 text-center space-y-4">
        {systems ? <SystemDataTable data={systems} /> : <h1>Loading...</h1>}
      </section>
    </MainContainer>
  );
}
