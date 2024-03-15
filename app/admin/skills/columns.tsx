import Image from "next/image";
import { MainDialog } from "@/components/main-dialog";
export type ColumnsType = {
  id: string;
  skill_description: string;
  rating: number;
};

import { SkillForm } from "./skill-form";

export const columns: any = [
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }: any) => <div className="capitalize w-0"></div>,
  },
  {
    accessorKey: "skill_description",
    header: "Skill",
    cell: ({ row }: any) => (
      <div className="capitalize text-start">
        {row.getValue("skill_description")}
      </div>
    ),
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }: any) => {
      const data = row.original;
      return (
        <>
          <ul className="flex gap-4 justify-start">
            {Array.from({ length: data.rating }).map((value, index) => (
              <li key={index}>
                <Image alt="paw-icon" height={24} width={24} src="/paw.png" />
              </li>
            ))}
          </ul>
        </>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }: any) => {
      const data = row.original;
      return (
        <MainDialog data={data} document="skills">
          <SkillForm data={data}>
            <span className="text-sm py-2.5 w-full text-center cursor-pointer hover:bg-secondary">
              Update Item
            </span>
          </SkillForm>
        </MainDialog>
      );
    },
  },
];
