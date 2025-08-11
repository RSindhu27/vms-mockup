import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Data from "./DataTwo.json";
import AddSubCategory from "./AddSubCategory";
import { Table, TableDeleteRow } from "../../../Components/Table";
import EditSubcategory from "./EditSubcategory";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditCategory() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [prefix, setPrefix] = useState("");
  const [description, setDescription] = useState("");
  const [numberingSystem, setNumberingSystem] = useState(1);

  const optionsList = [
    {
      value: 1,
      label: "Option 1",
    },
    {
      value: 2,
      label: "Option 2",
    },
    {
      value: 3,
      label: "Option 3",
    },
    {
      value: 4,
      label: "Option 4",
    },
    {
      value: 5,
      label: "Option 5",
    },
  ];

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 120,
      renderCell: (params) => (
        <Stack direction="row">
          <EditSubcategory key={`${params.row.id}_Edit`} />
          <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
        </Stack>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Subcategory",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "prefix",
      headerName: "Prefix",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
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
              Edit Category
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" gutterBottom>
              Category Name
            </Typography>
            <TextField
              id="category_name"
              placeholder="Category Name"
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
          <Grid item xs={6}>
            <Typography variant="body2" gutterBottom>
              Enter Prefix
            </Typography>
            <TextField
              id="category_prefix"
              placeholder="Prefix"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={prefix}
              onChange={(event) => {
                setPrefix(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="category_description"
              color="secondary"
              value={description}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" gutterBottom>
              Select Numbering System
            </Typography>
            <TextField
              id="category_numbering_system"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={numberingSystem}
              onChange={(event) => {
                setNumberingSystem(event.target.value);
              }}
            >
              {optionsList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography>
              <strong>Add Subcategory:</strong>
            </Typography>
          </Grid>
          <Grid item>
            <AddSubCategory key="edit-subcategory" />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h5">Subcategory</Typography>
          </Grid>
          <Grid item xs={12}>
            <Table data={Data.picklist} columns={columns} />
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
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditCategory;
