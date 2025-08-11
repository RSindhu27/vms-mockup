import React, { useState } from "react";
import Data from "./DataOne.json";
import { Link } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TabWrapper } from "../../../../Components/Page";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import TableFilters from "../../../../Containers/TableFilter";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 140,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/assessment-template/view-assessment-template"
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="info"
          component={Link}
          to="/app/configuration/assessment-template/view-assessment-template"
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/configuration/assessment-template/edit-assessment-template"
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
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "template_id",
    headerName: "Assessment Template Id",
    renderCell: (params) => (
      <Typography variant="body2" component={Link} to="#">
        {params.row.template_name}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "template_name",
    headerName: "Assessment Template Name",
    minWidth: 150,
    flex: 1,
  },
];

function TerminatedList() {
  const dataBase = Data.activities;
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
          rowHeight={60}
          columnVisibilityModel={{
            id: false,
          }}
        />
      </TabWrapper>
    </>
  );
}

export default TerminatedList;
