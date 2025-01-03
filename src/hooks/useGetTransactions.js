import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (!userInfo) return;

    const transactionsCollection = collection(db, "transactions");
    const queryData = query(
      transactionsCollection,
      where("userID", "==", userInfo.userId)
    );

    const unsubscribe = onSnapshot(queryData, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(docs);
    });

    return () => unsubscribe();
  }, [userInfo]);

  return { transactions };
};
