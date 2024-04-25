"use client";

import { getDocs, query, collection, where, orderBy } from "firebase/firestore";
import { db } from "@/db/firebase-config";
import { MainContainer } from "@/components/main-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonPrimary } from "@/components/button-primary";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
const bcrypt = require("bcryptjs");

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  async function handleSubmit() {
    const data = await getDocs(query(collection(db, "admin")));
    let account = data.docs.map((doc) => {
      return doc.data();
    })[0];
    if (username != account.username) {
      toast({
        title: "Invalid password!",
        description: new Date().toISOString().slice(0, 10),
        variant: "destructive",
      });
      return;
    }
    bcrypt.compare(
      password,
      account.password,
      function (err: any, result: any) {
        if (result) {
          // password is valid
          toast({
            title: "Authenticated!",
            description: new Date().toISOString().slice(0, 10),
          });
          sessionStorage.setItem("logged_in", "true");
          router.replace("./");
          return;
        }
        toast({
          title: "Invalid password!",
          description: new Date().toISOString().slice(0, 10),
          variant: "destructive",
        });
      }
    );
  }

  useEffect(() => {
    function getSalt() {
      bcrypt
        .hash("password", 2)
        .then((hash: any) => {
          console.log("Hash ", hash);
        })
        .catch((err: any) => console.error(err.message));
    }

    getSalt();
  }, []);

  return (
    <MainContainer className="max-w-sm mt-44">
      <section className="relative rounded-b-3xl bg-white drop-shadow-sm h-fit p-12 flex justify-between items-center">
        <div className="w-full mx-auto space-y-4">
          <div className="grid gap-1.5">
            <Label>Username</Label>
            <Input onKeyUp={(e) => setUsername(e.currentTarget.value)} />
          </div>
          <div className="grid gap-1.5">
            <Label>Password</Label>
            <Input
              type="password"
              onKeyUp={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <ButtonPrimary onClick={() => handleSubmit()} className="w-full">
            Login
          </ButtonPrimary>
        </div>
      </section>
    </MainContainer>
  );
}
