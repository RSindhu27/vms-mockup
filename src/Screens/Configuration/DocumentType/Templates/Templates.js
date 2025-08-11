import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import TemplateList from "./TemplateList";
import { Link } from "react-router-dom";

function Templates() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <Typography variant="body1" gutterBottom>
            Select Templates
          </Typography>
          <Button
            component={Link}
            to={"/app/configuration/document-type/select-template"}
            variant="contained"
            color="primary"
            disableElevation
          >
            Select
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <b>Selected Templates</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TemplateList />
        </Grid>
      </Grid>
    </>
  );
}

export default Templates;
