"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addItem, updateItem } from "@/app/data-access/works";
import { useToast } from "@/components/ui/use-toast";

export const SkillForm = ({ data, children }: any) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<any>();
  const { toast } = useToast();

  const handleInsert = async (formData: any) => {
    let data = {
      skill_description: formData.skill_description,
      rating: formData.rating,
    };
    console.log(data);

    await addItem(JSON.stringify(data), "skills");
    toast({
      title: "Item created successfully!",
      description: new Date().toISOString().slice(0, 10),
    });
    setOpen(false);
  };

  const handleUpdate = async (formData: any) => {
    await updateItem(formData, "skills", data.id);
    toast({
      title: "Item updated successfully!",
      description: new Date().toISOString().slice(0, 10),
    });
    setOpen(false);
  };

  const handleSubmit = async (event: any) => {
    const form = new FormData(event.currentTarget);
    event.preventDefault();
    const formData: any = {};
    form.forEach((value, key) => (formData[key] = value));
    if (data) {
      handleUpdate(formData);
    } else {
      handleInsert(formData);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Skill Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-1.5 mt-4">
            <Label htmlFor="">Skill Description</Label>
            <Input
              name="skill_description"
              defaultValue={data?.skill_description}
            />
          </div>
          <div className="grid gap-1.5 mt-4">
            <Label htmlFor="">Rating {rating}</Label>
            <Input
              name="rating"
              type="range"
              min={1}
              max={5}
              defaultValue={data?.rating}
              onChange={(e) => setRating(e.currentTarget.value)}
            />
          </div>
          <DialogFooter className="my-4">
            <Button className="bg-main hover:bg-main/90">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
