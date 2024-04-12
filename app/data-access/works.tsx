"use server";
import {
  getDocs,
  query,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/db/firebase-config";

export const getSystems = async () => {
  const data = await getDocs(query(collection(db, "systems")));
  return data.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
    };
  });
};

export const getDesigns = async () => {
  const data = await getDocs(query(collection(db, "designs")));
  return data.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
    };
  });
};

export const addItem = async (data: string, document: string) => {
  const res = await addDoc(
    collection(db, document.toString()),
    JSON.parse(data)
  );
  console.log(res);
};

export const updateItem = async (
  data: any,
  document: string,
  document_id: string
) => {
  const target = doc(db, document.toString(), document_id);
  await updateDoc(target, data);
};

export const deleteItem = async (document: string, document_id: string) => {
  await deleteDoc(doc(db, document.toString(), document_id));
};
