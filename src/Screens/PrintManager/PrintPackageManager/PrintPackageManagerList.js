import React, { useState, useEffect } from "react";
import { Table, TableDeleteRow } from "../../../Components/Table";
import { TabWrapper } from "../../../Components/Page";
import { Link } from "react-router-dom";
import {
  IconButton,
  Stack,
  Typography,
  Chip,
  Box,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableFilters from "../../../Containers/TableFilter/TableFilter";
import ExportDialog from "../ExportDialog/ExportDialog";
import Data from "./DataOne.json";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import CreateNewPackage from "./CreateNewPackage";
import PrintViewManager from "./PrintViewManager";
import PrintEditManager from "./PrintEditManager";

const PRIMARY_KEY_FIELD = "Product Code";

function PrintPackageManagerList() {
  const dataBase = Data.packages;
  const [tableData, setTableData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("Active");
  const [exportOpen, setExportOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [viewPackage, setViewPackage] = useState(null);
  const [editPackage, setEditPackage] = useState(null);

  const columns = [
    {
      field: "action",
      headerName: "",
      width: 140,
      renderCell: (params) => (
        <Stack direction="row">
          <IconButton
            size="small"
            color="info"
            onClick={() => params.row.onView(params.row)}
          >
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
        </Stack>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: "package_id",
      headerName: "Package ID",
      minWidth: 130,
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body2"
          sx={{ color: "info.main", cursor: "pointer" }}
          noWrap
          onClick={() => params.row.onView(params.row)}
        >
          <b>{params.row.package_id}</b>
        </Typography>
      ),
    },
    {
      field: "document_type",
      headerName: "Document Type",
      minWidth: 180,
      flex: 1,
    },
    {
      field: "system_data_fields",
      headerName: "System Data Fields",
      minWidth: 200,
      flex: 1,
      renderCell: (params) => (
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {params.row.system_data_fields.map((field, idx) => {
            const isPrimary = field === PRIMARY_KEY_FIELD;
            return (
              <Chip
                key={idx}
                label={field}
                size="small"
                variant={isPrimary ? "filled" : "outlined"}
                sx={{
                  borderRadius: "20px",
                  fontWeight: isPrimary ? 600 : 400,
                  backgroundColor: isPrimary ? "#64b5f6" : "transparent",
                  color: isPrimary ? "#fff" : "default",
                  borderColor: isPrimary
                    ? "transparent"
                    : "rgba(0, 0, 0, 0.12)",
                }}
              />
            );
          })}
        </Stack>
      ),
    },
    {
      field: "version",
      headerName: "Version",
      minWidth: 80,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "Active" ? "success" : "error"}
          size="small"
          variant="contained"
          sx={{ borderRadius: "12px", px: 1.5 }}
        />
      ),
    },
    {
      field: "created_by",
      headerName: "Created By",
      minWidth: 120,
      flex: 1,
    },
    {
      field: "created_on",
      headerName: "Created On",
      minWidth: 120,
      flex: 1,
    },
  ];

  useEffect(() => {
    const filteredData = dataBase
      .filter((item) => item.status === "Active")
      .map((item) => ({ ...item, onView: handleView }));
    setTableData(filteredData);
  }, [dataBase]);

  const handleStatusToggle = (e) => {
    const newStatus = e.target.checked ? "Inactive" : "Active";
    setStatusFilter(newStatus);
    const filteredData = dataBase
      .filter((item) => item.status === newStatus)
      .map((item) => ({ ...item, onView: handleView }));
    setTableData(filteredData);
  };

  const handleView = (pkg) => {
    setViewPackage(createPackageView(pkg));
  };

  const handleEdit = (pkg) => {
    setEditPackage(createPackageView(pkg));
  };

  const createPackageView = (pkg) => ({
    package_id: pkg.package_id,
    version: pkg.version,
    title: pkg.document_type,
    created_by: pkg.created_by,
    created_on: "22-Jan-2025",
    last_updated_by: "John Smith",
    last_updated_date: "19-Feb-2025",
    activation_by: pkg.created_by,
    activation_date: "22-Jan-2025",
    active: pkg.status === "Active",
    remarks: "Reviewed and validated.",
    documents: [
      {
        documentId: "DOC0009359",
        type: "SOP",
        title: "Quality Control Report",
        systemDataFields: ["Market", "Product Code", "Batch Number"],
        version: "1.0",
        status: "Active",
      },
      {
        documentId: "DOC0009359",
        type: "SOP",
        title: "Form Control Report",
        systemDataFields: ["Vendor Id", "Product Code", "Batch Number"],
        version: "1.0",
        status: "Active",
      },
      {
        documentId: "DOC0009359",
        type: "SOP",
        title: "New Document",
        systemDataFields: ["Market", "Product Code", "Test Id"],
        version: "1.0",
        status: "Active",
      },
    ],
  });

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
      doc.save("Package_List.pdf");
    } else if (type === "excel") {
      const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Packages");
      XLSX.writeFile(workbook, "Package_List.xlsx");
    }

    setExportOpen(false);
  };

  const searchItems = (array, criterion, value) => {
    if (criterion === "all") {
      return array.filter((item) =>
        Object.values(item).some((val) =>
          val.toString().toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      return array.filter((item) => {
        const lowerCaseCriterion = item[criterion]?.toString().toLowerCase();
        const lowerCaseValue = value.toLowerCase();
        return lowerCaseCriterion?.includes(lowerCaseValue);
      });
    }
  };

  const handleFilter = (column, search) => {
    const filtered = dataBase
      .filter((item) => item.status === statusFilter)
      .map((item) => ({ ...item, onView: handleView }));
    const searchResults = searchItems(filtered, column, search);
    setTableData(searchResults);
  };

  return (
    <TabWrapper>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <FormControlLabel
          control={
            <Switch
              checked={statusFilter === "Inactive"}
              onChange={handleStatusToggle}
              color="primary"
            />
          }
          label={`Showing: ${statusFilter}`}
          labelPlacement="start"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontWeight: 500,
              color: "text.secondary",
            },
          }}
        />
        <TableFilters
          dataBase={dataBase.filter((item) => item.status === statusFilter)}
          dataFilter={tableData}
          setData={handleFilter}
        />
      </Box>

      <Table data={tableData} columns={columns} />

      <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCreateOpen(true)}
        >
          Create New Package
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setExportOpen(true)}
        >
          Export to PDF/Excel
        </Button>
      </Box>

      <ExportDialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        onExport={handleExport}
      />

      <CreateNewPackage
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />

      {viewPackage && (
        <PrintViewManager
          open={Boolean(viewPackage)}
          onClose={() => setViewPackage(null)}
          packageData={viewPackage}
        />
      )}

      {editPackage && (
        <PrintEditManager
          open={Boolean(editPackage)}
          onClose={() => setEditPackage(null)}
          packageData={editPackage}
        />
      )}
    </TabWrapper>
  );
}

export default PrintPackageManagerList;
