import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";

function NewTemplateGroup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Template Group Name
            </Typography>
            <TextField
              id="template_group_name"
              placeholder="Enter Template Group Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="body2" gutterBottom>
              Template Group Description
            </Typography>
            <TextField
              id="template_group_description"
              placeholder="Enter Template Group Description"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
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
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewTemplateGroup;
