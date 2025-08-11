import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { TabWrapper } from "../../../Components/Page";

function Directory() {
  const navigate = useNavigate();
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p">
              Directory
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>Edit Document Type</TabWrapper>
    </>
  );
}

export default Directory;
