import React from "react";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transactions from "../../components/Transactions/Transactions";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";
import { useGetTransactions } from "../../hooks/useGetTransactions";

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth"));
  const { totalTransactionAmount } = useGetTransactions();
  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-container">
        <div className="top-container">
          <div className="user-card">
            <h1>Welcome back,</h1>
            <h1>{userInfo.name}!</h1>
          </div>
          <div className="cards">
            <div>
              <Card
                title="Total balance"
                amount={totalTransactionAmount.totalBalance}
              />
            </div>
            <div>
              <Card title="Income" amount={totalTransactionAmount.income} />
            </div>
            <div>
              <Card title="Expense" amount={totalTransactionAmount.expense} />
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="form-container">
            <AddTransactionForm />
          </div>
          <div className="recent-transactions">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
