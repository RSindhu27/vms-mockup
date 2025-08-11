import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function EntityForm() {
  const [entityFormName, setEntityFormName] = useState("");
  const [entityFormLabelOne, setEntityFormLabelOne] = useState("");
  const [entityFormLabelTwo, setEntityFormLabelTwo] = useState("");
  const [entityFormDescription, setEntityFormDescription] = useState("");

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Selected Entity Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Name
          <Typography
            component="span"
            variant="body2"
            color="error.main"
            gutterBottom
          >
            *
          </Typography>
        </Typography>
        <TextField
          id="entity_form_name"
          placeholder="Enter Name"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          value={entityFormName}
          onChange={(event) => {
            setEntityFormName(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Label 01
          <Typography
            component="span"
            variant="body2"
            color="error.main"
            gutterBottom
          >
            *
          </Typography>
        </Typography>
        <TextField
          id="entity_form_label_1"
          placeholder="Enter Label"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          value={entityFormLabelOne}
          onChange={(event) => {
            setEntityFormLabelOne(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="body2" gutterBottom>
          Label 02
          <Typography
            component="span"
            variant="body2"
            color="error.main"
            gutterBottom
          >
            *
          </Typography>
        </Typography>
        <TextField
          id="entity_form_label_2"
          placeholder="Enter Label"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          value={entityFormLabelTwo}
          onChange={(event) => {
            setEntityFormLabelTwo(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="body2" gutterBottom>
          Description
          <Typography
            component="span"
            variant="body2"
            color="error.main"
            gutterBottom
          >
            *
          </Typography>
        </Typography>
        <TextField
          id="entity_description"
          color="secondary"
          value={entityFormDescription}
          fullWidth
          multiline
          rows={4}
          onChange={(event) => {
            setEntityFormDescription(event.target.value);
          }}
        />
      </Grid>
    </>
  );
}

export default EntityForm;
