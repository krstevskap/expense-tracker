import { db } from "../../config/firebase-config";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";

export const initializeCollections = async (userId) => {
  const userRef = doc(db, "users", userId);

  try {
    const userDocRef = doc(db, "users", userId);

    const snapshot = await getDoc(userDocRef);

    if (!snapshot.exists()) {
      await setDoc(userDocRef, {
        userID: userId,
      });

      const categoriesCollection = collection(userRef, "categories");
      await setDoc(doc(categoriesCollection, "Food"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Rent"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Bills"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Entertainment"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Healthcare"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Shopping"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Travel"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Savings"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Investments"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Emergency Fund"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Education"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Pets"), { expense: 0 });
      await setDoc(doc(categoriesCollection, "Other"), { expense: 0 });

      const transactionsCollection = collection(userRef, "transactions");
    }
  } catch (error) {
    console.error(error);
  }
};
