import React, { useState } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import Data from "./DataTwo.json";
import SelectUser from "./SelectUser";

const accessLevelList = [
  {
    value: 1,
    label: "Access Level 1",
  },
  {
    value: 2,
    label: "Access Level 2",
  },
  {
    value: 3,
    label: "Access Level 3",
  },
  {
    value: 4,
    label: "Access Level 4",
  },
  {
    value: 5,
    label: "Access Level 5",
  },
];

const handleColor = (e) => {
  if (e === "active") return "#0DD08B";
  if (e === "inactive") return "#FFA200";
  else return "black";
};

function RoleDetails() {
  const [name, setName] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [description, setDescription] = useState("");

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 80,
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
      field: "username",
      headerName: "User Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "domain",
      headerName: "Domain",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "job_title",
      headerName: "Job Title",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "employee_no",
      headerName: "Employee No",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "department",
      headerName: "Department",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Typography variant="body2" color={handleColor(params.row.status)}>
          {params.row.status}
        </Typography>
      ),
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" gutterBottom>
            Name
          </Typography>
          <TextField
            id="role-name"
            placeholder="Enter Role Name"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body2" gutterBottom>
            Description
          </Typography>
          <TextField
            id="role-description"
            placeholder="Enter Description"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" gutterBottom>
            Access Level
          </Typography>
          <TextField
            id="role-access-level"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={accessLevel}
            onChange={(event) => {
              setAccessLevel(event.target.value);
            }}
          >
            {accessLevelList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Box p={1} />
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <SelectUser />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Selected Users</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Table data={Data.picklist} columns={columns} />
        </Grid>
      </Grid>
    </>
  );
}

export default RoleDetails;
