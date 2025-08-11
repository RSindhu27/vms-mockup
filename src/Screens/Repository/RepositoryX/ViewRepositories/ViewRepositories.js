import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { TabWrapper } from "../../../../Components/Page";
import CreatedRepositories from "./CreatedRepositories";

function ViewRepositories() {
  const [repositoryName, setRepositoryName] = useState("");
  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h5" component="p">
              Repository Creation
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2} direction="row" alignItems="end">
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              Repository Name
            </Typography>
            <TextField
              id="repository-name"
              placeholder="Enter Repository Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={repositoryName}
              onChange={(event) => {
                setRepositoryName(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button color="primary" variant="outlined" disableElevation>
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" disableElevation>
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabWrapper>
      <Box mb={2} />
      <CreatedRepositories />
    </>
  );
}

export default ViewRepositories;
