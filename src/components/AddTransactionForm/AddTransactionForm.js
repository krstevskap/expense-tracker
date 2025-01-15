import React, { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import "./addTransactionForm.css";

const AddTransactionForm = () => {
  let categories = [
    "Food & Groceries",
    "Rent",
    "Bills",
    "Transportation",
    "Healthcare",
    "Shopping",
    "Travel",
    "Savings",
    "Investments",
    "Emergency Fund",
    "Education",
    "Pets",
    "Other",
  ];

  const userInfo = JSON.parse(localStorage.getItem("auth"));
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const { addTransaction } = useAddTransaction();

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      userID: userInfo.userId,
      description,
      transactionAmount: parseFloat(transactionAmount),
      transactionType,
      category,
    });

    setCategory("");
    setDescription("");
    setTransactionAmount("");
    setTransactionType("expense");
  };
  return (
    <div className="add-transaction-form">
      <form onSubmit={onSubmit}>
        <h2 className="title">Add Transaction</h2>
        <div className="form-input">
          <input
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            required
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
          <div className="radio-button-container">
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="add-button">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
