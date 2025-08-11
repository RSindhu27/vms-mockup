import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import StepperX from "./Stepper";

function TemplateDetails({ onClose }) {
  return (
    <>
      {/* header */}
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" color="secondary">
            Template Details
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="large" color="error" onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      {/* Body */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            <b>Location:</b> Document/Arcolab/Information Technology/SOP/
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item>
              <Typography variant="body1">
                <b>General Details</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <b>
                  Version:{" "}
                  <Typography color="secondary" component="span">
                    V03
                  </Typography>
                </b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{ p: 1, borderRadius: 2, bgcolor: "primary.extraLight" }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Typography variant="caption">DOCUMENT TITLE:</Typography>
                    <Typography variant="body2">
                      <b>CSV DOCUMENT</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      DOCUMENT TYPE:
                    </Typography>
                    <Typography variant="body2" textAlign="right">
                      <b>CSV Document Type</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">CREATE DATE:</Typography>
                    <Typography variant="body2">
                      <b>20-FEB-2024-13:45</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      LAST CONTENT UPDATE:
                    </Typography>
                    <Typography variant="body2" textAlign="right" color="error">
                      <b>NO</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">EFFECTIVE DATE:</Typography>
                    <Typography variant="body2">
                      <b>21-FEB-2024-09:10</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      LAST MODIFIED:
                    </Typography>
                    <Typography variant="body2" textAlign="right">
                      <b>24-FEB-2024-23:45</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">NEXT REVIEW DATE:</Typography>
                    <Typography variant="body2">
                      <b>26-FEB-2024</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      IN WORKFLOW:
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      color="success"
                    >
                      <b>YES</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">RETENTION PERIOD:</Typography>
                    <Typography variant="body2">
                      <b>26-FEB-2024</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      LIST OF MEMBER:
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      component={Link}
                      to="#"
                      sx={{
                        color: "info.main",
                        display: "block",
                      }}
                    >
                      <b>View All</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">CONTROL TYPE:</Typography>
                    <Typography variant="body2">
                      <b>------------</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      LIFECYCLE STATE:
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      color="info.main"
                    >
                      <b>EFFECTIVE</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item>
              <Typography variant="body1">
                <b>Workflow Details</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component={Link}
                to="#"
                sx={{ color: "info.main" }}
              >
                <b>MORE</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 1, borderRadius: 2, bgcolor: "info.extraLight" }}>
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Typography variant="caption">WORKFLOW NAME:</Typography>
                    <Typography variant="body2">
                      <b>CSV WORKFLOW</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      ASSOCIATE DOCUMENT:
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      color="success.main"
                    >
                      <b>YES</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">WORKFLOW NO:</Typography>
                    <Typography variant="body2">
                      <b>WF38565</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      VERSION:
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      color="info.main"
                    >
                      <b>V3</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">RELEASE TYPE:</Typography>
                    <Typography variant="body2">
                      <b>MANUAL</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      WORKFLOW SEQUENCE:
                    </Typography>
                    <Typography variant="body2" textAlign="right">
                      <b>PARALLEL</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">CHECKLIST :</Typography>
                    <Typography
                      variant="body2"
                      component={Link}
                      to="#"
                      color="info.main"
                    >
                      <b>CHECKLIST 01</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      textAlign="right"
                      component="p"
                    >
                      WORKFLOW TYPE NAME:
                    </Typography>
                    <Typography variant="body2" textAlign="right">
                      <b>CSV WORKFLOW TYPE</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1} direction="row">
            <Typography variant="body1">Current Status:</Typography>
            <Typography sx={{ color: "error.main" }}>
              Approval Rejected
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <StepperX activeStep={1} />
        </Grid>
      </Grid>
    </>
  );
}

export default TemplateDetails;
