import React from "react";
import Header from "../../components/Header/Header";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import TransactionsTable from "./TransactionsTable";
import "./transactions.css";

const Transactions = () => {
  const columns = [
    {
      field: "description",
      headerName: "Description",
      resizable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      resizable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "transactionType",
      headerName: "Type",
      resizable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "transactionAmount",
      headerName: "Amount",
      type: "number",
      resizable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        const value = params;
        return value !== undefined && !isNaN(value)
          ? `$ ${value.toFixed(2)}`
          : "-";
      },
    },
  ];

  const { transactions } = useGetTransactions();

  return (
    <div className="all-transactions-container">
      <Header />
      <div className="transactions-container">
        <h2 className="transactions-title">Transactions</h2>
        <div className="transactions-table">
          <TransactionsTable rows={transactions} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
