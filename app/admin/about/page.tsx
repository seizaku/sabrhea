"use client";
import { MainContainer } from "@/components/main-container";
import AdminNavigationBar from "@/components/nav-admin";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getProfileInformation } from "@/app/data-access/about";
import { Button } from "@/components/ui/button";

import { uploadString } from "firebase/storage";
import { storage } from "@/db/firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import { updateItem } from "@/app/data-access/works";

export default function AdminAbout() {
  const [image, setImage] = useState<any>("");
  const [data, setData] = useState<any>();

  const setImageAsURI = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const dataURI = reader.result;
      setImage(dataURI);
    };

    reader.readAsDataURL(file);
  };

  const handleUpdate = async (formData: any) => {
    console.log(formData, storage);

    const storageRef = ref(
      storage,
      `profile/${
        formData.full_name
      }-${new Date().getDay()}-${new Date().getFullYear()}`
    );

    if (formData.profile_picture && image) {
      await uploadString(storageRef, image, "data_url", {
        contentType: "image/png",
      });

      const url = await getDownloadURL(storageRef).then((url) => {
        return url;
      });

      formData.profile_picture = url;
    }

    await updateItem(formData, "profile", "profile_document");

    location.reload();
  };

  const handleSubmit = async (event: any) => {
    const form = new FormData(event.currentTarget);
    event.preventDefault();
    const formData: any = {};
    form.forEach((value, key) => (formData[key] = value));

    if (!image) {
      delete formData.profile_picture;
    }

    console.log(formData);
    handleUpdate(formData);
  };

  useEffect(() => {
    const init = async () => {
      const data = await getProfileInformation();
      setData(data);
    };
    init();
  }, []);

  return (
    <MainContainer>
      <AdminNavigationBar />
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="h-fit pb-14 px-12 md:px-24 text-center space-y-4"
      >
        <img
          className="h-64 w-64 rounded-full bg-muted mx-auto my-4"
          src={
            !image
              ? data?.profile_picture
                ? data?.profile_picture
                : "/placeholder.svg"
              : data?.profile_picture
          }
          alt=""
        />
        <div className="flex flex-col items-start gap-2">
          <label className="font-bold">Profile Picture</label>
          <Input
            name="profile_picture"
            onChange={setImageAsURI}
            type="file"
            accept=".png,.jpg"
            className="max-w-96"
          ></Input>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="font-bold">Fullname</label>
          <Input
            defaultValue={data?.full_name}
            name="full_name"
            className="max-w-96"
          ></Input>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="font-bold">Description</label>
          <textarea
            defaultValue={data?.about_description}
            name="about_description"
            className="w-full h-96 p-4 rounded-xl border"
            placeholder="Write something about youself.."
          ></textarea>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="font-bold">Contact Information</label>
          <Input
            defaultValue={data?.email_address}
            name="email_address"
            className="max-w-96"
            placeholder="Email Address"
          ></Input>
          <Input
            defaultValue={data?.phone_number}
            name="phone_number"
            className="max-w-96"
            placeholder="Phone Number"
          ></Input>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="font-bold">Social Links</label>
          <Input
            defaultValue={data?.facebook_link}
            name="facebook_link"
            className="max-w-96"
            placeholder="Facebook Link"
          ></Input>
          <Input
            defaultValue={data?.instagram_link}
            name="instagram_link"
            className="max-w-96"
            placeholder="Instagram Link"
          ></Input>
          <Input
            defaultValue={data?.linkedin_link}
            name="linkedin_link"
            className="max-w-96"
            placeholder="LinkedIn Link"
          ></Input>
        </div>
        <Button className="bg-main hover:bg-main/90">Save Changes</Button>
      </form>
    </MainContainer>
  );
}
