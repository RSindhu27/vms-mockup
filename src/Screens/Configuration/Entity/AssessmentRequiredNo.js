import { Grid } from "@mui/material";
import EntityFormDetails from "./Forms/EntityFormDetails";
import AssociatedFrameworks from "./Forms/AssociatedFrameworks";
import EntityValidationStatus from "./Forms/EntityValidationStatus";
import AddWorkflow from "./Forms/AddWorkflow";
import AddAdditionalDeliverables from "./Forms/AddAdditionalDeliverables";
import AdditionalDeliverables from "./Forms/AdditionalDeliverables";

function AssessmentRequiredNo() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EntityFormDetails />
        </Grid>
        <Grid item xs={12}>
          <AssociatedFrameworks />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item>
              <AddWorkflow />
            </Grid>
            <Grid item>
              <AddAdditionalDeliverables />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AdditionalDeliverables />
        </Grid>
        <Grid item xs={12}>
          <EntityValidationStatus />
        </Grid>
      </Grid>
    </>
  );
}

export default AssessmentRequiredNo;
