import React from "react";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transactions from "../../components/Transactions/Transactions";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";

const Dashboard = () => {
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
