import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useAddTransaction = () => {
  const addTransaction = async ({
    userID,
    description,
    transactionAmount,
    transactionType,
    category,
  }) => {
    try {
      const transactionsCollection = collection(
        db,
        "users",
        userID,
        "transactions"
      );

      const transactionRef = await addDoc(transactionsCollection, {
        userID,
        description,
        category,
        transactionAmount: parseFloat(transactionAmount),
        transactionType,
        timestamp: serverTimestamp(),
      });

      const categoryDocRef = doc(db, "users", userID, "categories", category); // Category is a document inside 'categories' collection

      const categoryDoc = await getDoc(categoryDocRef);

      if (categoryDoc.exists()) {
        const categoryData = categoryDoc.data();
        let updatedExpense = categoryData.expense || 0;

        if (transactionType === "expense") {
          updatedExpense += parseFloat(transactionAmount);
        }

        await updateDoc(categoryDocRef, {
          expense: updatedExpense,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { addTransaction };
};
