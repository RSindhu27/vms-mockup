import React, { useState, useEffect } from "react";
import { IconButton, Stack, Typography, Chip, Box, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Table } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import TableFilters from "../../../Containers/TableFilter/TableFilter";
import Data from "./PrintLogsData.json";

function ViewPrintLogs() {
  const dataBase = Data.logs;
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      field: "id",
      headerName: "Document ID",
      width: 140,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", fontWeight: 600 }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "type",
      headerName: "Print Type",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "Print" ? "success" : "info"}
          size="small"
          sx={{ fontWeight: 600 }}
        />
      ),
    },
    { field: "printedBy", headerName: "Printed By", width: 160 },
    { field: "printedTo", headerName: "Printed Issued To", width: 180 },
    { field: "timestamp", headerName: "Timestamp", width: 200 },
    { field: "details", headerName: "Details", flex: 1 },
  ];

  useEffect(() => {
    setTableData(dataBase);
  }, [dataBase]);

  const handleFilter = (column, search) => {
    if (column === "all") {
      setTableData(
        dataBase.filter((row) =>
          Object.values(row).some((val) =>
            val?.toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    } else {
      setTableData(
        dataBase.filter((row) =>
          row[column]?.toString().toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  return (
    <TabWrapper>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          p: 2,
        }}
      >
        <TableFilters
          dataBase={dataBase}
          dataFilter={tableData}
          setData={handleFilter}
        />

        <Table data={tableData} columns={columns} />
      </Box>
    </TabWrapper>
  );
}

export default ViewPrintLogs;
