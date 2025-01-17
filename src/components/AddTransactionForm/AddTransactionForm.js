import React, { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import "./addTransactionForm.css";

const AddTransactionForm = ({ toggleModal }) => {
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
  const [transactionAmount, setTransactionAmount] = useState("");
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
    toggleModal();
  };

  return (
    <div className="add-transaction-form">
      <form onSubmit={onSubmit}>
        <h2 className="title">Add Transaction</h2>
        <div className="form-input">
          <label for="description">Description</label>
          <input
            type="text"
            required
            value={description}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label for="amount">Amount</label>
          <input
            type="number"
            required
            value={transactionAmount}
            min="0"
            id="amount"
            onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
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
          <label for="category">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            id="category"
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
