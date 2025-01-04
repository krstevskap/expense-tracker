import React from "react";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transactions from "../../components/Transactions/Transactions";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth"));
  return (
    <div className="dashboard-container">
      <Header />

      <div className="top-container">
        <div className="user-card">
          <h1>Welcome back,</h1>
          <h1>{userInfo.name}!</h1>
        </div>
        <div className="cards">
          <div>
            <Card title="Current balance" amount="$0.00" />
          </div>
          <div>
            <Card title="Income" amount="$0.00" />
          </div>
          <div>
            <Card title="Expense" amount="$0.00" />
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
  );
};

export default Dashboard;
