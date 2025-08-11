import { Grid } from "@mui/material";
import DecisionUpdate from "./DecisionUpdate";

function DecisionDetails() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DecisionUpdate
            key="review"
            role="Review"
            sequence="Serial"
            order="01"
            status="Done"
          />
        </Grid>
        <Grid item xs={12}>
          <DecisionUpdate
            key="approver"
            role="Approver"
            sequence="Serial"
            order="02"
            status="Not Done"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default DecisionDetails;
