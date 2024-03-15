export type ColumnsType = {
  id: string;
  banner_url: string;
  system_title: string;
  system_description: string;
  link?: string;
};

import Image from "next/image";
import { SystemForm } from "./system-form";
import { MainDialog } from "@/components/main-dialog";

export const columns: any = [
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }: any) => <div className="capitalize"></div>,
  },
  {
    accessorKey: "banner_url",
    header: "Banner Image",
    cell: ({ row }: any) => (
      <Image
        src={row.getValue("banner_url")}
        height={320}
        width={320}
        quality={100}
        className="object-cover h-12 w-24 rounded-sm"
        alt="banner-image"
      />
    ),
  },
  {
    accessorKey: "system_title",
    header: "System Title",
    cell: ({ row }: any) => (
      <div className="capitalize text-start">
        {row.getValue("system_title")}
      </div>
    ),
  },
  {
    accessorKey: "system_description",
    header: "Description",
    cell: ({ row }: any) => (
      <div className="lowercase text-start">
        {row.getValue("system_description")}
      </div>
    ),
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }: any) => (
      <div className="lowercase text-start">{row.getValue("link")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }: any) => {
      const data = row.original;
      return (
        <MainDialog data={data} document="systems">
          <SystemForm data={data}>
            <span className="text-sm py-2.5 w-full text-center cursor-pointer hover:bg-secondary">
              Update Item
            </span>
          </SystemForm>
        </MainDialog>
      );
    },
  },
];
