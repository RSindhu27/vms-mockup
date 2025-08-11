import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DataFieldDragList from "./DataFieldDragList";

const numberingSystemList = [
  {
    label: "System Data Field 1",
    value: 1,
  },
  {
    label: "System Data Field 2",
    value: 2,
  },
  {
    label: "System Data Field 3",
    value: 3,
  },
  {
    label: "System Data Field 4",
    value: 4,
  },
  {
    label: "System Data Field 5",
    value: 5,
  },
];

function SystemDataField() {
  const [systemDataFiled, setSystemDataFiled] = useState(1);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Select System Data Field
          </Typography>
          <TextField
            id="doc-type-system-data-field"
            select
            fullWidth
            size="small"
            value={systemDataFiled}
            onChange={(event) => {
              setSystemDataFiled(event.target.value);
            }}
          >
            {numberingSystemList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <b>Selected Data Field</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DataFieldDragList />
        </Grid>
      </Grid>
    </>
  );
}

export default SystemDataField;
