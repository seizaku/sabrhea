import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export type ColumnsType = {
  id: string;
  skill_description: string;
  rating: number;
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
import { SkillForm } from "./skill-form";
import { deleteItem } from "@/app/data-access/works";
import { useState } from "react";

export const columns: ColumnDef<ColumnsType>[] = [
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
    cell: ({ row }) => {
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
            <SkillForm data={data}>
              <span className="text-sm py-2.5 w-full text-center cursor-pointer hover:bg-secondary">
                Update Item
              </span>
            </SkillForm>
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
                      await deleteItem("skills", data.id);
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
