import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

function EntityFormDetails() {
  const [formField_1, setFormField_1] = useState("");
  const [formField_2, setFormField_2] = useState("");
  const [formField_3, setFormField_3] = useState("");
  const [formField_4, setFormField_4] = useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" component="p">
            <b>Entity Form Details:</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Form Filed 01
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
            id="entity_form_field_01"
            placeholder="Texts are added form creation can be edit here"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={formField_1}
            onChange={(event) => {
              setFormField_1(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Form Filed 02
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
            id="entity_form_field_02"
            placeholder="Enter Form Field"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={formField_2}
            onChange={(event) => {
              setFormField_2(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Form Filed 03
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
            id="entity_form_field_03"
            placeholder="Enter Form Field"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={formField_3}
            onChange={(event) => {
              setFormField_3(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Form Filed 04
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
            id="entity_form_field_04"
            placeholder="Enter Form Field"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={formField_4}
            onChange={(event) => {
              setFormField_4(event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default EntityFormDetails;
