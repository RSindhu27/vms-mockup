import React, { useState } from "react";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { Table } from "../../../Components/Table";
import Data from "./DataOne.json";
import PhysicalCopyDestroy from "./PhysicalCopyDestroy";
import PhysicalCopyArchive from "./PhysicalCopyArchive";
import { TabWrapper } from "../../../Components/Page";
import DocInfo from "./DocInfo";
import TableFilters from "../../../Containers/TableFilter/TableFilter";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 140,
    renderCell: (params) => (
      <Stack direction="row">
        <PhysicalCopyDestroy fileName={params.row.name} />
        <PhysicalCopyArchive fileName={params.row.name} />
        <Tooltip title="Print Document">
          <IconButton size="small" color="primary">
            <LocalPrintshopOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <DocInfo fileName={params.row.name} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Name/Number",
    renderCell: (params) => (
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}
        >
          <InsertDriveFileIcon
            fontSize="small"
            color={
              params.row.doc_type && params.row.doc_type === "pdf"
                ? "error"
                : "info"
            }
          />
          <Typography
            variant="body2"
            component={Link}
            to="/app/document/document/document-view"
            sx={{ color: "text.primary" }}
          >
            <b>{params.row.name}</b>
          </Typography>
        </Stack>
      </Box>
    ),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "version",
    headerName: "Version",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color:
            params.row.status === "in_progress" ? "info.main" : "success.main",
        }}
        noWrap
      >
        <b>
          {params.row.status === "in_progress" ? "In Progress" : "Print Ready"}
        </b>
      </Typography>
    ),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "print_template",
    headerName: "Print Template",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "print_for",
    headerName: "Print For",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "print_reason",
    headerName: "Print Reason",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "print_mode",
    headerName: "Print Mode",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "print_by",
    headerName: "Print By",
    minWidth: 120,
    flex: 1,
  },
  {
    field: "print_on",
    headerName: "Print On",
    minWidth: 120,
    flex: 1,
  },
];

function HardcopyLanding() {
  const dataBase = Data.picklist;

  const [tableData, setTableData] = useState(dataBase);

  const searchItems = (array, criterion, value) => {
    if (criterion === "all") {
      return array.filter((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const lowerCaseValue = item[key].toString().toLowerCase();
            if (lowerCaseValue.includes(value.toLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });
    } else
      return array.filter((item) => {
        const lowerCaseCriterion = item[criterion].toString().toLowerCase();
        const lowerCaseValue = value.toLowerCase();

        return lowerCaseCriterion.includes(lowerCaseValue);
      });
  };

  const handleFilter = (column, search) => {
    const searchResults = searchItems(dataBase, column, search);
    setTableData(searchResults);
  };

  return (
    <>
      <TabWrapper>
        <TableFilters
          dataBase={dataBase}
          dataFilter={tableData}
          setData={handleFilter}
        />
        <Table
          data={tableData}
          columns={columns}
          columnVisibilityModel={{
            id: false,
          }}
        />
      </TabWrapper>
    </>
  );
}

export default HardcopyLanding;
