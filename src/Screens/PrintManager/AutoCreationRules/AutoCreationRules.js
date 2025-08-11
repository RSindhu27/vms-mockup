import React, { useState, useEffect } from "react";
import {
  IconButton,
  Stack,
  Typography,
  Chip,
  Switch,
  Button,
  Box,
  Grid,
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
import CreateAutoCreationRules from "./CreateAutoCreationRules";

const PRIMARY_KEY_FIELD = "Product Code";

function AutoCreationRules() {
  const dataBase = Data.rules;
  const [tableData, setTableData] = useState([]);
  const [exportOpen, setExportOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const columns = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
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
      field: "id",
      headerName: "Rule ID",
      width: 100,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{
            color: "info.main",
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      width: 220,
    },
    {
      field: "document_type",
      headerName: "Document Type",
      width: 200,
    },
    {
      field: "system_data_fields",
      headerName: "System Data Fields",
      width: 300,
      renderCell: (params) => (
        <Grid container spacing={0.5}>
          {params.value.map((field, idx) => (
            <Grid item key={idx}>
              <Chip
                label={field}
                size="small"
                variant={field === PRIMARY_KEY_FIELD ? "filled" : "outlined"}
                sx={{
                  borderRadius: "20px",
                  backgroundColor:
                    field === PRIMARY_KEY_FIELD ? "#64b5f6" : undefined,
                  color: field === PRIMARY_KEY_FIELD ? "#fff" : undefined,
                }}
              />
            </Grid>
          ))}
        </Grid>
      ),
    },
    {
      field: "trigger",
      headerName: "Trigger",
      width: 120,
    },
    {
      field: "state",
      headerName: "State",
      width: 120,
    },
    {
      field: "auto_create",
      headerName: "Auto Create",
      width: 120,
      renderCell: (params) => <Switch checked={params.value} color="success" />,
    },
    {
      field: "active",
      headerName: "Active",
      width: 100,
      renderCell: (params) => <Switch checked={params.value} color="success" />,
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
            val.toString().toLowerCase().includes(search.toLowerCase())
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
          if (col.field === "system_data_fields") {
            return row[col.field].join(", ");
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
      doc.save("AutoCreationRules.pdf");
    } else if (type === "excel") {
      const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Rules");
      XLSX.writeFile(workbook, "AutoCreationRules.xlsx");
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
          variant="contained"
          color="info"
          onClick={() => setExportOpen(true)}
        >
          Export PDF/Excel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setCreateOpen(true)}
        >
          + Create New Rule
        </Button>
      </Box>

      <ExportDialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        onExport={handleExport}
      />

      {createOpen && (
        <CreateAutoCreationRules
          open={createOpen}
          onClose={() => setCreateOpen(false)}
        />
      )}
    </TabWrapper>
  );
}

export default AutoCreationRules;
