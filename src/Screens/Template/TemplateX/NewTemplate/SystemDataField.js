import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const organizationList = [
  {
    label: "Organization 1",
    value: 1,
  },
  {
    label: "Organization 2",
    value: 2,
  },
  {
    label: "Organization 3",
    value: 3,
  },
  {
    label: "Organization 4",
    value: 4,
  },
  {
    label: "Organization 5",
    value: 5,
  },
];

const businessUnitList = [
  {
    label: "Business Unit 1",
    value: 1,
  },
  {
    label: "Business Unit 2",
    value: 2,
  },
  {
    label: "Business Unit 3",
    value: 3,
  },
  {
    label: "Business Unit 4",
    value: 4,
  },
  {
    label: "Business Unit 5",
    value: 5,
  },
];

const divisionList = [
  {
    label: "Division 1",
    value: 1,
  },
  {
    label: "Division 2",
    value: 2,
  },
  {
    label: "Division 3",
    value: 3,
  },
  {
    label: "Division 4",
    value: 4,
  },
  {
    label: "Division 5",
    value: 5,
  },
];

const departmentList = [
  {
    label: "Department 1",
    value: 1,
  },
  {
    label: "Department 2",
    value: 2,
  },
  {
    label: "Department 3",
    value: 3,
  },
  {
    label: "Department 4",
    value: 4,
  },
  {
    label: "Department 5",
    value: 5,
  },
];

function SystemDataField() {
  const [organization, setOrganization] = useState("");
  const [businessUnit, setBusinessUnit] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Organization
          </Typography>
          <TextField
            id="doc_sys_org"
            select
            fullWidth
            size="small"
            value={organization}
            onChange={(event) => {
              setOrganization(event.target.value);
            }}
          >
            {organizationList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Business Unit
          </Typography>
          <TextField
            id="doc_sys_org"
            select
            fullWidth
            size="small"
            value={businessUnit}
            onChange={(event) => {
              setBusinessUnit(event.target.value);
            }}
          >
            {businessUnitList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Division
          </Typography>
          <TextField
            id="doc_sys_division"
            select
            fullWidth
            size="small"
            value={division}
            onChange={(event) => {
              setDivision(event.target.value);
            }}
          >
            {divisionList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" gutterBottom>
            Select Department
          </Typography>
          <TextField
            id="doc_sys_department"
            select
            fullWidth
            size="small"
            value={department}
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          >
            {departmentList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  );
}

export default SystemDataField;
