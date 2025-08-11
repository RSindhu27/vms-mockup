import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Table, TableDeleteRow } from "../../Components/Table";
import Data from "./DataThree.json";
import { Link } from "react-router-dom";

const optionList = [
  {
    value: 1,
    label: "bhugonnet0@skyrock.com",
  },
  {
    value: 2,
    label: "bkeywood1@bigcartel.com",
  },
  {
    value: 3,
    label: "hboller2@bloomberg.com",
  },
  {
    value: 4,
    label: "fsailes3@mashable.com",
  },
  {
    value: 5,
    label: "mivanin4@nbcnews.com",
  },
];

const tableList = [
  {
    value: 1,
    label: "Table 01",
  },
  {
    value: 2,
    label: "Table 02",
  },
  {
    value: 3,
    label: "Table 03",
  },
];

const columns = [
  {
    field: "",
    headerName: "",
    minWidth: 100,
    renderCell: (params) => (
      <Stack direction="row">
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: "table_no",
    headerName: "TABLE(S)",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "table_caption",
    headerName: "TABLE CAPTION",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Box>
        <Typography
          variant="body2"
          sx={{ color: "info.main" }}
          noWrap
          component={Link}
          to="#"
        >
          <b>{params.row.table_caption}</b>
        </Typography>
      </Box>
    ),
  },
  {
    field: "rows",
    headerName: "Row(s)",
    minWidth: 100,
    flex: 1,
    renderCell: () => <TextField size="small" variant="outlined" value="" />,
  },
];

function ReExecuteDiscrepancy() {
  const [handleDeliverable, setHandleDeliverable] = useState("Yes");
  const [user, setUser] = useState([]);
  const [tables, setTables] = useState([]);
  const dataBase = Data.picklist;

  const [tableData, setTableData] = useState(dataBase);

  const handleDeliverables = (event, newType) => {
    setHandleDeliverable(newType);
  };

  return (
    <>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item>
          <Typography variant="body1" component="p">
            <b>Assign to Different Executor? </b>
          </Typography>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            exclusive
            value={handleDeliverable}
            onChange={handleDeliverables}
          >
            <ToggleButton
              color="secondary"
              value="Yes"
              sx={{ width: 60, height: 40, lineHeight: 0.75 }}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              color="error"
              value="No"
              sx={{ width: 60, height: 40, lineHeight: 0.75 }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography variant="body2" gutterBottom>
            Select User
          </Typography>
          <Autocomplete
            id="recipients-user-group"
            size="small"
            value={user}
            onChange={(event, newValue) => {
              setUser(newValue);
            }}
            getOptionLabel={(option) => option.label}
            fullWidth
            multiple
            options={optionList}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2} alignItems="center">
        <Grid item>
          <Typography variant="body1" component="p">
            <b>Additional Re-Execution Table(s)</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id="documentType"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={tables}
            onChange={(event) => {
              setTables(event.target.value);
            }}
          >
            {tableList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={2} sm={1} md={1}>
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            startIcon={<AddCircleOutlinedIcon />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid item mt={3}>
        <Table
          data={tableData}
          columns={columns}
          getRowHeight={() => 60}
          height={400}
          checkboxSelection
        />
      </Grid>
    </>
  );
}

export default ReExecuteDiscrepancy;
