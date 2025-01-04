import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useAddTransaction = () => {
  const transactionsCollection = collection(db, "transactions");

  const addTransaction = async ({
    userID,
    description,
    transactionAmount,
    transactionType,
    category,
  }) => {
    await addDoc(transactionsCollection, {
      userID,
      description,
      category,
      transactionAmount,
      transactionType,
      timestamp: serverTimestamp(),
    });
  };
  return { addTransaction };
};
