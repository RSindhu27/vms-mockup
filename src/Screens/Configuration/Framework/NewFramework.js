import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Data from "./DataTwo.json";
import { Table } from "../../../Components/Table";

const formList = [
  {
    value: 1,
    label: "Form 1",
  },
  {
    value: 2,
    label: "Form 2",
  },
  {
    value: 3,
    label: "Form 3",
  },
  {
    value: 4,
    label: "Form 4",
  },
  {
    value: 5,
    label: "Form 5",
  },
];

const frameworkList = [
  {
    value: 1,
    label: "Framework 1",
  },
  {
    value: 2,
    label: "Framework 2",
  },
  {
    value: 3,
    label: "Framework 3",
  },
];

const frameWorkTypeList = [
  {
    value: 1,
    label: "New",
  },
  {
    value: 2,
    label: "Revision",
  },
];

const columns = [
  /*   {
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
  }, */
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "document_type",
    headerName: "Document Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "function_type",
    headerName: "Function Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "mandatory",
    headerName: "Mandatory",
    renderCell: (params) => (
      <FormControlLabel
        control={<Switch checked={params.row.mandatory} />}
        label={params.row.mandatory ? "Yes" : "No"}
      />
    ),
    minWidth: 150,
    flex: 1,
  },
];

function NewFramework() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [framework, setFramework] = useState(1);
  const [frameworkForm, setFrameworkForm] = useState(1);
  const [frameworkType, setFrameworkType] = useState(1);

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Framework Name
            </Typography>
            <TextField
              id="framework_name"
              placeholder="Framework Name"
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
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Select Framework Type
            </Typography>
            <TextField
              id="framework_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={frameworkType}
              onChange={(event) => {
                setFrameworkType(event.target.value);
              }}
            >
              {frameWorkTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Select Framework
            </Typography>
            <TextField
              id="framework_select"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={framework}
              onChange={(event) => {
                setFramework(event.target.value);
              }}
            >
              {frameworkList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Select Framework Form
            </Typography>
            <TextField
              id="framework_form"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={frameworkForm}
              onChange={(event) => {
                setFrameworkForm(event.target.value);
              }}
            >
              {formList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Form Fields:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Additional Comments
            </Typography>
            <TextField
              id="framework_additional_comment"
              placeholder="Enter Additional Details"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h5">Select Deliverables</Typography>
          </Grid>
          <Grid item xs={12}>
            <Table
              data={Data.picklist}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
            />
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
          <PageButton color="inherit">Reset</PageButton>
        </Box>
        <Box>
          <PageButton color="info">Save</PageButton>
        </Box>
        <Box>
          <PageButton color="secondary">Submit</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewFramework;
