import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const transactionsCollection = collection(db, "transactions");
  const userInfo = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const queryData = query(
          transactionsCollection,
          where("userID", "==", userInfo.userId),
          orderBy("timestamp", "desc"),
          limit(3)
        );

        const unsubscribe = onSnapshot(queryData, (snapshot) => {
          let docs = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;

            docs.push({ ...data, id });
          });

          setTransactions(docs);
        });

        return () => unsubscribe();
      } catch (err) {
        console.error(err);
      }
    };

    getTransactions();
  }, []);

  return { transactions };
};
