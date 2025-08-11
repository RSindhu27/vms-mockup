import {
  Autocomplete,
  Box,
  Button,
  Collapse,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { PageIconPrimaryButton } from "../../../../Components/Page";
import { Table, TableDeleteRow, ViewMore } from "../../../../Components/Table";
import Data1 from "./DataThree.json";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const userList = [
  { label: "User 1", value: 1 },
  { label: "User 2", value: 2 },
  { label: "User 3", value: 3 },
  { label: "User 4", value: 4 },
  { label: "User 5", value: 5 },
  { label: "User 6", value: 6 },
  { label: "User 7", value: 7 },
  { label: "User 8", value: 8 },
  { label: "User 9", value: 9 },
];

const groupList = [
  { label: "Group 1", value: 1 },
  { label: "Group 2", value: 2 },
  { label: "Group 3", value: 3 },
  { label: "Group 4", value: 4 },
  { label: "Group 5", value: 5 },
  { label: "Group 6", value: 6 },
  { label: "Group 7", value: 7 },
  { label: "Group 8", value: 8 },
  { label: "Group 9", value: 9 },
];

const columns = [
  {
    field: "action",
    headerName: "",
    renderCell: (params) => <TableDeleteRow />,
    minWidth: 50,
    flex: 1,
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    renderCell: (params) => (
      <Typography variant="body2" color="info.main">
        {params.row.decision}
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "sequence",
    headerName: "Sequence",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.sequence.replace(/\s/g, "")}
          color="secondary"
          select
          defaultValue={1}
          size="small"
          fullWidth
        >
          <MenuItem key={1} value={1}>
            Parallel
          </MenuItem>
          <MenuItem key={2} value={2}>
            Concurrent
          </MenuItem>
          <MenuItem key={3} value={3}>
            Simultaneous
          </MenuItem>
        </TextField>
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "period_in_days",
    headerName: "Period In Days",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.id}
          color="secondary"
          defaultValue={params.row.period_in_days}
          size="small"
          type="number"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "alert_in_days",
    headerName: "Alert In Days",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.id}
          color="secondary"
          defaultValue={params.row.alert_in_days}
          size="small"
          type="number"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "order",
    headerName: "Order",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    renderCell: (params) => (
      <>
        {typeof params.row.email === "string" ? (
          <Typography variant="body2" noWrap>
            {params.row.email}
          </Typography>
        ) : (
          <ViewMore primaryText="View All" dataList={params.row.email} />
        )}
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function SelectUser({ role, order }) {
  const [checked, setChecked] = useState(false);

  const handleExpand = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item>
              <Typography variant="body1">
                Role: <b>{role}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Order:{" "}
                <Typography component="span" color="info.main">
                  {order}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <PageIconPrimaryButton size="small" onClick={handleExpand}>
                {checked ? <RemoveIcon /> : <AddIcon />}
              </PageIconPrimaryButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={checked}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box sx={{ p: 1 }} />
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item xs>
                    <Autocomplete
                      multiple
                      id="user_search"
                      fullWidth
                      size="small"
                      limitTags={3}
                      disableClearable
                      options={userList}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select User" />
                      )}
                    />
                  </Grid>
                  <Grid item xs>
                    <Autocomplete
                      multiple
                      id="group_search"
                      fullWidth
                      size="small"
                      limitTags={3}
                      disableClearable
                      options={groupList}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Select Group" />
                      )}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      color="secondary"
                      variant="contained"
                      disableElevation
                    >
                      Add User
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      color="secondary"
                      variant="contained"
                      disableElevation
                    >
                      Add Group
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ p: 1 }} />
                <Table
                  data={Data1.picklist}
                  columns={columns}
                  getRowHeight={() => "auto"}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
}

export default SelectUser;
