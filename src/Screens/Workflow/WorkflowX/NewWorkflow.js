import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";

function NewWorkflow() {
  return (
    <>
      <TabWrapper>
        <Grid container>
          <Grid xs={12}>
            <Typography variant="body1" gutterBottom>
              New Workflow
            </Typography>
          </Grid>
        </Grid>
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
          <PageButton color="primary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewWorkflow;
