import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    const categoriesCollection = collection(
      db,
      "users",
      userInfo.userId,
      "categories"
    );

    const unsubscribe = onSnapshot(
      categoriesCollection,
      (snapshot) => {
        const newCategories = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        if (JSON.stringify(newCategories) !== JSON.stringify(categories)) {
          setCategories(newCategories);
        }
      },
      (error) => {
        console.error(error);
      }
    );

    return () => unsubscribe();
  }, [userInfo]);

  return { categories };
};
