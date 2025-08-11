import React from "react";
import { Chip, Grid, Typography } from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./DataFour.json";
import DeleteDeliverables from "./DeleteDeliverables";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "document_type",
    headerName: "Document Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "mandatory",
    headerName: "Mandatory",
    renderCell: (params) => (
      <>
        <Chip
          label={params.row.mandatory ? "Yes" : "No"}
          color={params.row.mandatory ? "success" : "error"}
        />
      </>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function AdditionalDeliverables() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <b>Additional Deliverables:</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Table
            data={Data.one}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="flex-end">
            <Grid item>
              <DeleteDeliverables />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AdditionalDeliverables;
