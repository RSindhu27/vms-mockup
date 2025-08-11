import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../Components/Page";
import { useState } from "react";
import DiscrepancyTables from "./DiscrepanyTables";
import DiscrepanyTemplate from "./DiscrepancyTemplate";
import DiscrepancyDeliverables from "./DiscrepancyDeliverables";

const discrepancyTablesList = [
  {
    value: 1,
    label: "Table 01",
  },
  {
    value: 2,
    label: "Table 02",
  },
];

function ViewDiscrepancyDetails() {
  const [discrepancyTables, setDiscrepanyTables] = useState(1);
  return (
    <>
      <TabWrapper>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" component="p">
              <b>Discrepancy Tables</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              Discrepancy Tables
            </Typography>
            <TextField
              id="discrepany_tables"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={discrepancyTables}
              onChange={(event) => {
                setDiscrepanyTables(event.target.value);
              }}
            >
              {discrepancyTablesList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <DiscrepancyTables />
        <DiscrepanyTemplate />
        <DiscrepancyDeliverables />
      </TabWrapper>
    </>
  );
}

export default ViewDiscrepancyDetails;
