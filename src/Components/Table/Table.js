import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

function Table({ data, columns, height, ...props }) {
  const [pageSize, setPageSize] = useState(10);

  return (
    <Box sx={{ height: height ? height : 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 30]}
        pagination
        disableSelectionOnClick
        rowHeight={40}
        columnHeaderHeight={40}
        {...props}
        sx={{
          bgcolor: "background.paper",
          "& .MuiDataGrid-virtualScroller": {
            "&::-webkit-scrollbar": {
              height: 10,
              width: 10,
            },
            "&::-webkit-scrollbar-track": {
              background: "rgb(151 167 195 / 30%)",
              mb: 3,
              mt: 3,
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "primary.main",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              bgcolor: "primary.dark",
            },
          },
        }}
      />
    </Box>
  );
}

export default Table;
