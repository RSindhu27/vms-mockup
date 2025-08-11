import {
  Button,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
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

const rows = [
  {
    id: "001",
    legacyNumber: "51SV561V56DS165",
    addedOn: "02/20/2024 13:42 PM",
    addedBy: "Peter Parker",
  },
  {
    id: "002",
    legacyNumber: "S56DF1C561CD15S",
    addedOn: "02/29/2024 09:02 AM",
    addedBy: "Peter Parker",
  },
];

function SystemDataField() {
  const [organization, setOrganization] = useState("");
  const [businessUnit, setBusinessUnit] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");
  const [legacyNumber, setLegacyNumber] = useState("");

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body2" gutterBottom>
            Legacy Number
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs>
              <TextField
                id="doc_gen_legacy_number"
                placeholder="Enter Legacy Number"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={legacyNumber}
                onChange={(event) => {
                  setLegacyNumber(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Button>Add Legacy Number</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TableContainer
            sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Legacy Number</TableCell>
                  <TableCell>Date Added</TableCell>
                  <TableCell>Added By</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.legacyNumber}
                    </TableCell>
                    <TableCell>{row.addedOn}</TableCell>
                    <TableCell>{row.addedBy}</TableCell>
                    <TableCell align="right">
                      <Button size="small" color="error">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
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
