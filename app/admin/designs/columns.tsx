import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export type ColumnsType = {
  id: string;
  banner_url: string;
  design_title: string;
  design_description: string;
};

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DesignForm } from "./design-form";
import { deleteItem } from "@/app/data-access/works";
import { useState } from "react";
import Image from "next/image";

export const columns: ColumnDef<ColumnsType>[] = [
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
    cell: ({ row }) => (
      <div className="lowercase text-start">
        {row.getValue("design_description")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [open, setOpen] = useState(false);
      const data = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DesignForm data={data}>
              <span className="text-sm py-2.5 w-full text-center cursor-pointer hover:bg-secondary">
                Update Item
              </span>
            </DesignForm>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <span className="text-sm py-2.5 w-full text-center cursor-pointer hover:bg-secondary">
                  Delete Item
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    onClick={async () => {
                      await deleteItem("designs", data.id);
                    }}
                    className="bg-main hover:bg-main/90"
                  >
                    Confirm Deletion
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
