import React from "react";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Transactions from "../../components/Transactions/RecentTransactions";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetCategories } from "../../hooks/useGetCategories";

const Dashboard = () => {
  const { totalTransactionAmount } = useGetTransactions();
  const { categories } = useGetCategories();

  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-container">
        <div className="left-dashboard-container">
          <div className="cards">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(183, 157, 254) 0%, rgb(117, 110, 254) 100%)",
              }}
            >
              <Card
                title="Total balance"
                amount={totalTransactionAmount.totalBalance}
              />
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(250, 205, 175) 0%, rgb(254, 129, 122) 100%)",
              }}
            >
              <Card title="Income" amount={totalTransactionAmount.income} />
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(252, 180, 222) 0%, rgb(254, 104, 186) 100%)",
              }}
            >
              <Card title="Expense" amount={totalTransactionAmount.expense} />
            </div>
          </div>

          <div className="recent-transactions">
            <Transactions />
          </div>
        </div>

        <div className="right-dashboard-container">
          <h2>Categories</h2>
          <div className="categories">
            {console.log(categories)}
            {categories.map((category) => (
              <div key={category.id} className="category">
                <p>{category.id}</p>
                <p>{category.expense} $</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
