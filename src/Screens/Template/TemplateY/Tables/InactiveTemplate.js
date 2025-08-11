import React, { useState } from "react";
import Data from "./DataOne.json";
import { Link } from "react-router-dom";
import {
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import TableFilters from "../../../../Containers/TableFilter";

function ActiveInactive({ option }) {
  const [value, setValue] = useState(option);

  const handleValue = (event, newType) => {
    setValue(newType);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={handleValue}
      size="small"
      disabled={option === "n/a"}
    >
      <ToggleButton
        color="secondary"
        value="active"
        sx={{ width: 70, height: 30, lineHeight: 0.75 }}
      >
        Active
      </ToggleButton>
      <ToggleButton
        color="error"
        value="inactive"
        sx={{ width: 90, height: 30, lineHeight: 0.75 }}
      >
        Inactive
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function StatusColor(value) {
  switch (value) {
    case "Assigned":
      return "warning.main";
    case "Approved":
      return "success.main";
    case "Draft":
      return "info.main";
    case "Suspended":
      return "textSecondary.main";
    case "Terminated":
      return "error.main";
    case "Reviewed":
      return "warning.main";
    default:
      return "textPrimary.main";
  }
}

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "edit",
    headerName: "",
    width: 80,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/template/template-two/edit-template"
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
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <>
        <ActiveInactive option={params.row.active} />
      </>
    ),
    width: 200,
  },
  {
    field: "name",
    headerName: "Name/ID",
    renderCell: (params) => (
      <>
        <Typography
          key={params.row.id}
          variant="body2"
          component={Link}
          to="#"
          color="info.main"
          noWrap
        >
          {params.row.name}
        </Typography>
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "template_name",
    headerName: "Template Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "template_type",
    headerName: "Template Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <>
        <Typography
          key={params.row.id}
          variant="body2"
          color={() => StatusColor(params.row.status)}
          noWrap
        >
          {params.row.status}
        </Typography>
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function InactiveTemplate() {
  const dataBase = Data.activities.filter((e) => e.active === "inactive");
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
      <TableFilters
        dataBase={dataBase}
        dataFilter={tableData}
        setData={handleFilter}
      />
      <Table data={tableData} columns={columns} />
    </>
  );
}

export default InactiveTemplate;
