export type ColumnsType = {
  id: string;
  banner_url: string;
  design_title: string;
  design_description: string;
};

import { DesignForm } from "./design-form";
import Image from "next/image";
import { MainDialog } from "@/components/main-dialog";

export const columns: any = [
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }: any) => <div className="capitalize w-0"></div>,
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
    accessorKey: "design_title",
    header: "Design Title",
    cell: ({ row }: any) => (
      <div className="capitalize text-start">
        {row.getValue("design_title")}
      </div>
    ),
  },
  {
    accessorKey: "design_description",
    header: "Description",
    cell: ({ row }: any) => (
      <div className="lowercase text-start">
        {row.getValue("design_description")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }: any) => {
      const data = row.original;
      return (
        <MainDialog data={data} document="designs">
          <DesignForm data={data}>
            <span className="text-sm py-2.5 w-full text-center cursor-pointer hover:bg-secondary">
              Update Item
            </span>
          </DesignForm>
        </MainDialog>
      );
    },
  },
];
