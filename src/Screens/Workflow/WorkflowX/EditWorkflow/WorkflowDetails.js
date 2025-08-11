import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import StepperX from "./Stepper";
import { Link } from "react-router-dom";
import WorkflowDiagram from "./WorkflowDiagram";
import WorkflowHistory from "./WorkflowHistory";
import Checklist from "./Checklist";

function WorkflowDetails() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs>
          <Stack spacing={1} direction="row">
            <Typography variant="body1">Current Status:</Typography>
            <Typography sx={{ color: "error.main" }}>
              Approval Rejected
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={1} direction="row">
            <WorkflowHistory />
            <WorkflowDiagram />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <StepperX activeStep={2} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            <b>WORKFLOW DETAILS</b>
          </Typography>
          <Box sx={{ p: 2, borderRadius: 2, bgcolor: "primary.extraLight" }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body2">WORKFLOW NAME:</Typography>
                <Typography variant="body1">
                  <b>SOME WORKFLOW NAME</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  WORKFLOW NUMBER:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>564FSE5DS5V</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">ASSOCIATED DOCUMENT:</Typography>
                <Typography
                  variant="body1"
                  component={Link}
                  to="#"
                  sx={{ color: "info.main" }}
                >
                  <b>DOCUMENT 01</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  VERSION:
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="right"
                  sx={{ color: "info.main" }}
                >
                  <b>V3</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">WORKFLOW DESCRIPTION: </Typography>
                <Typography
                  variant="body1"
                  component={Link}
                  to="#"
                  sx={{ color: "info.main" }}
                >
                  <b>DESCRIPTION</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  RELEASE TYPE:{" "}
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>MANUAL</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Checklist:</Typography>
                <Checklist />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  WORKFLOW TYPE NAME:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>CSV WORKFLOW TYPE</b>
                </Typography>
              </Grid>
              {/* <Grid item xs={6}>
                <Typography variant="body2">WORKFLOW SEQUENCE:</Typography>
                <Typography variant="body1">
                  <b>PARALLEL</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  TARGET DATE:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>5/2/2024</b>
                </Typography>
              </Grid> */}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            <b>DOCUMENT DETAILS</b>
          </Typography>
          <Box sx={{ p: 2, borderRadius: 2, bgcolor: "info.extraLight" }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body2">DOCUMENT NAME: </Typography>
                <Typography variant="body1">
                  <b>CSV Doc</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  DOCUMENT NO:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>CSVDOC89388</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">DOCUMENT VERSION :</Typography>
                <Typography variant="body1" sx={{ color: "info.main" }}>
                  <b>V3</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  PURPOSE/CHANGE:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>FOR APPROVAL</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">DOCUMENT STATUS:</Typography>
                <Typography variant="body1">
                  <b>SOME STATUS</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  ASSOCIATE WORKFLOW NUMBER:
                </Typography>
                <Typography variant="body1" textAlign="right">
                  <b>5DSVD5V65S1</b>
                </Typography>{" "}
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">VIEW DOCUMENT LINK :</Typography>
                <Typography
                  variant="body1"
                  component={Link}
                  to="#"
                  sx={{ color: "info.main" }}
                >
                  <b>DOCUMENT LINK</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" textAlign="right">
                  DOCUMENT LOCATION PATH:
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="right"
                  component={Link}
                  to="#"
                  sx={{ color: "info.main", display: "block" }}
                >
                  <b>CLICK HERE</b>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default WorkflowDetails;
