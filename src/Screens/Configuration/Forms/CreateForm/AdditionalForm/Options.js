import { Box, Collapse, Divider, Grid, Switch } from "@mui/material";
import React, { useState } from "react";
import FormGridField from "../FormGridField";

function Options({ order, name }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box sx={{ bgcolor: "grey.200", p: 1, borderRadius: 1 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          Option {order}: <b>{name}</b>
        </Grid>
        <Grid item>Display Additional Field if Option Selected?</Grid>
        <Grid item>
          <Switch checked={showForm} onChange={() => setShowForm(!showForm)} />
        </Grid>
      </Grid>
      <Collapse in={showForm}>
        <Box sx={{ height: 16 }}></Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FormGridField />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
}

export default Options;
