import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  PageButton,
  PageCircleButton,
  TabWrapper,
} from "../../../Components/Page";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Table, TableDeleteRow } from "../../../Components/Table";
import Data from "./DataTwo.json";
import { Link, useNavigate } from "react-router-dom";
import AddDependency from "./AddDependency";
import ViewEditDependency from "./ViewEditDependency";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const handleColor = (e) => {
  if (e === "Active") return "#0DD08B";
  if (e === "Inactive") return "#FFA200";
  else return "black";
};

function NewPickList() {
  const [pickBusinessUnit, setPickBusinessUnit] = useState("");
  const [pickName, setPickName] = useState("");
  const [pickValue, setPickValue] = useState("");
  const navigate = useNavigate();

  const columns = [
    {
      field: "edit",
      headerName: "Action",
      minWidth: 160,
      renderCell: (params) => (
        <>
          <Stack direction="row">
            <IconButton size="small" color="primary" component={Link} to="#">
              <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
            </IconButton>
            <TableDeleteRow
              key={`${params.row.id}_Delete`}
              onDelete={() => {}}
            />
            <Button size="small" color="info">
              <u>Inactive</u>
            </Button>
          </Stack>
        </>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: "pickListName",
      headerName: "Pick List Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "valueShotString",
      headerName: "Value(Short String)",
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
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p">
              Edit Picklist
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Enter Pick List Category Name
            </Typography>
            <TextField
              id="picklist_business_unit"
              placeholder="Business Unit"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={pickBusinessUnit}
              onChange={(event) => {
                setPickBusinessUnit(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="end">
          <Grid item xs={12} sm>
            <Typography variant="body2" gutterBottom>
              Enter Picklist Name
            </Typography>
            <TextField
              id="picklist_name"
              placeholder="Enter Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={pickName}
              onChange={(event) => {
                setPickName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="body2" gutterBottom>
              Enter Picklist Value
            </Typography>
            <TextField
              id="picklist_value"
              placeholder="Enter Value"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={pickValue}
              onChange={(event) => {
                setPickValue(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm="auto">
            <PageCircleButton color="info" variant="contained" disableElevation>
              Apply
            </PageCircleButton>
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography>
              <strong>
                <u>Picklist Names</u>
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Table data={Data.picklist} columns={columns} />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <ViewEditDependency key="view-edit-dependency" />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography>
              <strong>Depended On:</strong>
            </Typography>
          </Grid>
          <Grid item>
            <AddDependency key="dependent-on" />
          </Grid>
        </Grid>
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewPickList;
