import React, { useState } from "react";
import { Box, Button, Collapse, Grid, Stack, Typography } from "@mui/material";
import Data from "./DataTwo.json";
import { Table } from "../../../Components/Table";
import { CompoWrapper, PageIconPrimaryButton } from "../../../Components/Page";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditField from "./CreateForm/EditField";
import EditAdditionalForm from "./CreateForm/AdditionalForm/EditAdditionalForm";

const handleColor = (e) => {
  if (e === "Mandatory") return "#4ED192";
  else return "#D9CE2C";
};

function FormDetails() {
  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 50,
      renderCell: (params) => (
        <Stack direction="row">
          <EditField />
        </Stack>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    { field: "order", headerName: "Order", width: 90 },
    {
      field: "name",
      headerName: "Label",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "field_type",
      headerName: "Field Type",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "condition",
      headerName: "Condition",
      renderCell: (params) => (
        <Typography variant="body2" color={handleColor(params.row.condition)}>
          {params.row.condition}
        </Typography>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "default_val",
      headerName: "Default Value",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "help_text",
      headerName: "Help Text",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "length",
      headerName: "Length",
      width: 90,
    },
    {
      field: "sub_form",
      headerName: "Sub Form",
      renderCell: (params) => (
        <>
          {params.row.sub_form === "Yes" ? (
            <EditAdditionalForm />
          ) : (
            <Typography variant="body2" color="error.main">
              N/A
            </Typography>
          )}
        </>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "row",
      headerName: "Row",
      width: 90,
    },
    {
      field: "column",
      headerName: "Column",
      width: 90,
    },
  ];

  const [checked, setChecked] = useState(false);

  const handleExpand = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <CompoWrapper>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="body1">
                  <b>Form Details</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <b>Row:</b>
                  <Typography component="span" color="info.main">
                    <b>01</b>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <b>Column:</b>
                  <Typography component="span" color="info.main">
                    <b>02</b>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">
                    <b>Action:</b>
                  </Typography>
                  <Button color="info" size="small">
                    Edit
                  </Button>
                  <Typography variant="body2">/</Typography>
                  <Button color="error" size="small">
                    Delete
                  </Button>
                </Stack>
              </Grid>
              <Grid item>
                <PageIconPrimaryButton color="primary" onClick={handleExpand}>
                  {checked ? <RemoveIcon /> : <AddIcon />}
                </PageIconPrimaryButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={checked}>
              <Box p={1} />
              <Table
                data={Data.picklist}
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
              />
              <Box p={1} />
              <Grid container spacing={1} justifyContent="end">
                <Grid item>
                  <Button color="error" variant="contained" disableElevation>
                    Delete Field
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="error" variant="outlined" disableElevation>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="info" variant="outlined" disableElevation>
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="secondary" variant="outlined" disableElevation>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default FormDetails;
