import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import "./transactions.css";

const Transactions = () => {
  const { transactions } = useGetTransactions();
  const columns = [
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: false,
    },
    {
      field: "transactionAmount",
      headerName: "Amount",
      type: "number",
      flex: 1,
      editable: false,
    },
    {
      field: "transactionType",
      headerName: "Type",
      flex: 1,
      editable: false,
    },
    {
      field: "category",
      headerName: "Category",
      sortable: true,
      flex: 1,
      editable: false,
    },
  ];
  return (
    <div className="transactions-container">
      <h2 className="title">Recent Transactions</h2>
      <Box>
        <DataGrid
          rows={transactions}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4]}
          checkboxSelection={false}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Transactions;
