import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useGetTransactions = (limitResults = false) => {
  const [transactions, setTransactions] = useState([]);
  const [totalTransactionAmount, setTotalTransactionAmount] = useState({
    totalBalance: 0.0,
    income: 0.0,
    expense: 0.0,
  });

  const userInfo = JSON.parse(localStorage.getItem("auth"));

  const transactionsCollection = collection(
    db,
    "users",
    userInfo.userId,
    "transactions"
  );

  useEffect(() => {
    const getTransactions = async () => {
      try {
        let queryData;

        if (limitResults) {
          queryData = query(
            transactionsCollection,
            orderBy("timestamp", "desc"),
            limit(5)
          );
        } else {
          queryData = query(
            transactionsCollection,
            orderBy("timestamp", "desc")
          );
        }

        const unsubscribe = onSnapshot(queryData, (snapshot) => {
          let docs = [];
          let totalIncome = 0.0;
          let totalExpense = 0.0;

          snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;

            docs.push({ ...data, id });

            const amount = parseFloat(data.transactionAmount);

            if (data.transactionType === "income") {
              totalIncome += amount;
            } else if (data.transactionType === "expense") {
              totalExpense += amount;
            }
          });

          setTransactions(docs);

          let balance = parseFloat((totalIncome - totalExpense).toFixed(2));

          setTotalTransactionAmount({
            totalBalance: balance,
            income: totalIncome,
            expense: totalExpense,
          });
        });

        return () => unsubscribe();
      } catch (err) {
        console.error(err);
      }
    };

    getTransactions();
  }, [limitResults]);

  return { transactions, totalTransactionAmount };
};
