import React from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import "./recentTransactions.css";

const Transactions = () => {
  const { transactions } = useGetTransactions(true);

  return (
    <div className="recent-transactions-container">
      <h2 className="recent-transactions-title">Recent Transactions</h2>
      <div className="recent-transactions-table">
        {transactions.map((t) => {
          return (
            <div className="recent-transaction" key={t.id}>
              <p>{t.description}</p>
              <p>{t.category}</p>
              <p
                style={{
                  color: t.transactionType === "income" ? "#62fe96" : "#d74848",
                }}
              >
                {t.transactionType === "income"
                  ? `+ ${t.transactionAmount} $`
                  : `- ${t.transactionAmount} $`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
