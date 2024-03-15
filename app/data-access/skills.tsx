"use server";
import {
  getDocs,
  query,
  collection,
  addDoc,
  getDoc,
  where,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/db/firebase-config";

export const getSkills = async () => {
  const data = await getDocs(query(collection(db, "skills")));
  return data.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
    };
  });
};
