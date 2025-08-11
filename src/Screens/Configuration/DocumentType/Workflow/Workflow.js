import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import WorkflowDragList from "./WorkflowDragList";

const workflowTypesList = [
  {
    label: "Workflow Types 1",
    value: 1,
  },
  {
    label: "Workflow Types 2",
    value: 2,
  },
  {
    label: "Workflow Types 3",
    value: 3,
  },
  {
    label: "Workflow Types 4",
    value: 4,
  },
  {
    label: "Workflow Types 5",
    value: 5,
  },
];

function SystemDataField() {
  const [workflowTypes, setWorkflowTypes] = useState(1);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Select Workflow Types
          </Typography>
          <TextField
            id="doc-type-system-data-field"
            select
            fullWidth
            size="small"
            value={workflowTypes}
            onChange={(event) => {
              setWorkflowTypes(event.target.value);
            }}
          >
            {workflowTypesList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <b>Selected Workflow Types</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WorkflowDragList />
        </Grid>
      </Grid>
    </>
  );
}

export default SystemDataField;
