import React from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import "./transactions.css";

const Transactions = () => {
  const { transactions } = useGetTransactions();
  return (
    <div className="transactions-container">
      <h2 className="title">Recent Transactions</h2>
      <div className="transactions-table">
        {transactions.map((t) => {
          return (
            <div className="transaction">
              <p>{t.description}</p>
              <p>{t.category}</p>
              <p
                style={{
                  color: t.transactionType === "income" ? "#62fe96" : "#d74848",
                }}
              >
                {t.transactionType === "income"
                  ? `+ $${t.transactionAmount}`
                  : `- $${t.transactionAmount}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
