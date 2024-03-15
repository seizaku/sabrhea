"use server";
import { getDocs, query, collection, where, orderBy } from "firebase/firestore";
import { db } from "@/db/firebase-config";

export const getProfileInformation = async () => {
  const data = await getDocs(query(collection(db, "profile")));
  return data.docs.map((doc) => {
    return doc.data();
  })[0];
};
