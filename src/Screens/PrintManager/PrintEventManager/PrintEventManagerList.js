import React, { useState, useEffect } from "react";
import {
  IconButton,
  Stack,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Table } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import TableFilters from "../../../Containers/TableFilter/TableFilter";
import ExportDialog from "../ExportDialog/ExportDialog";
import Data from "./DataOne.json";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

const PRIMARY_KEY_FIELD = "Product Code";

function PrintEventManagerList() {
  const dataBase = Data.events;
  const [tableData, setTableData] = useState([]);
  const [exportOpen, setExportOpen] = useState(false);

  const columns = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: () => (
        <Stack direction="row" spacing={1}>
          <IconButton color="info" size="small">
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton color="success" size="small">
            <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton color="error" size="small">
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </Stack>
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "event_id",
      headerName: "Event ID",
      width: 120,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            color: "info.main",
            textDecoration: "underline",
            fontWeight: 600,
          }}
          component={Link}
          to={`/app/print-manager/view-event/`}
        >
          {params.value}
        </Typography>
      ),
    },
    { field: "document_type", headerName: "Document Type", width: 220 },
    {
      field: "package_id",
      headerName: "Package ID",
      width: 150,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", fontWeight: 500, cursor: "pointer" }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "primary_data_fields",
      headerName: "Primary Data Fields",
      width: 300,
      renderCell: (params) => (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {(params.value || []).map((field, idx) => (
            <Chip
              key={idx}
              label={field}
              size="small"
              variant="outlined"
              sx={{ borderRadius: "20px" }}
            />
          ))}
        </Stack>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => {
        const statusColor =
          {
            Completed: "success",
            Pending: "warning",
            Closed: "default",
            Archived: "info",
          }[params.value] || "default";

        return (
          <Chip
            label={params.value}
            color={statusColor}
            size="small"
            variant="contained"
            sx={{ borderRadius: "12px" }}
          />
        );
      },
    },
    {
      field: "created_on",
      headerName: "Created On",
      width: 140,
    },
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

  const handleExport = (type) => {
    const headers = columns
      .filter((col) => col.field !== "action")
      .map((col) => col.headerName);

    const data = tableData.map((row) =>
      columns
        .filter((col) => col.field !== "action")
        .map((col) => {
          if (col.field === "primary_data_fields") {
            return (row[col.field] || []).join(", ");
          }
          return row[col.field];
        })
    );

    if (type === "pdf") {
      const doc = new jsPDF();
      autoTable(doc, {
        head: [headers],
        body: data,
        styles: { fontSize: 9 },
      });
      doc.save("PrintEvents.pdf");
    } else if (type === "excel") {
      const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Print Events");
      XLSX.writeFile(workbook, "PrintEvents.xlsx");
    }

    setExportOpen(false);
  };

  return (
    <TabWrapper>
      <TableFilters
        dataBase={dataBase}
        dataFilter={tableData}
        setData={handleFilter}
      />

      <Table data={tableData} columns={columns} />

      <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="outlined"
          color="info"
          onClick={() => setExportOpen(true)}
        >
          Export PDF/Excel
        </Button>
      </Box>

      <ExportDialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        onExport={handleExport}
      />
    </TabWrapper>
  );
}

export default PrintEventManagerList;
