import React, { useState } from "react";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { useAddTransaction } from "../../hooks/useAddTransaction";

const Dashboard = () => {
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
    console.log(userInfo.userId);
    addTransaction({
      userID: userInfo.userId,
      description,
      transactionAmount,
      transactionType,
      category,
    });
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="cards">
        <Card title="Total balance" amount="$0.00" />
        <Card title="Income" amount="$0.00" />
        <Card title="Expense" amount="$0.00" />
      </div>
      <div className="transactions">
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <h2 className="title">Add Transaction</h2>
            <input
              type="text"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
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
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <div className="recent-transactions">
          <h2 className="title">Recent Transactions</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
