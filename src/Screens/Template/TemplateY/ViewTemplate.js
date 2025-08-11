import React from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import { Box, Grid, Stack, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ViewTemplate() {
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
              TEMP / Template 01
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Box sx={{ width: 100 + "%", height: 600, bgcolor: "grey.200" }}></Box>
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default ViewTemplate;
