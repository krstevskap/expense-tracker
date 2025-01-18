import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const TransactionsTable = ({ rows, columns }) => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });

  return (
    <Paper
      sx={{
        height: 520,
        width: "95%",
        backgroundColor: "#06072D",
      }}
    >
      <DataGrid
        GridLinesVisibility="None"
        rows={rows}
        columns={columns}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 8, 10]}
        checkboxSelection
        rowHeight={50}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#0a0c4b",
            color: "#D0D3DE",
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
          "& .MuiDataGrid-row": {
            backgroundColor: "#06072D",
          },
          "& .MuiCheckbox-root": {
            color: "#D0D3DE",
          },
          "& .MuiDataGrid-cell": {
            color: "#D0D3DE",
            borderTop: "1px solid #04051E",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "#D0D3DE",
          },
          "& .MuiDataGrid-menuIconButton": {
            color: "#D0D3DE",
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
          },
          "& .MuiDataGrid-panelFooter": {
            color: "#D0D3DE",
          },
          "& .MuiTablePagination-toolbar": {
            color: "#D0D3DE",
          },
          "& .MuiTablePagination-actions button": {
            color: "#D0D3DE",
          },
        }}
      />
    </Paper>
  );
};

export default TransactionsTable;
