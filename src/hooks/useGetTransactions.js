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
  const [totalTransactionAmount, setTotalTransactionAmount] = useState({
    totalBalance: 0.0,
    income: 0.0,
    expense: 0.0,
  });

  const transactionsCollection = collection(db, "transactions");
  const userInfo = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const queryData = query(
          transactionsCollection,
          where("userID", "==", userInfo.userId),
          orderBy("timestamp", "desc")
        );

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

            console.log(
              `Type: ${data.transactionType}, Amount: ${data.transactionAmount}`
            );
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
  }, []);

  return { transactions, totalTransactionAmount };
};
