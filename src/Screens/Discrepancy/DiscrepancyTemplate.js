import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

const formFieldOneList = [
  {
    value: 1,
    label: "Select",
  },
  {
    value: 2,
    label: "Initiated Discrepancy",
  },
];
const formFieldTwoList = [
  {
    value: 1,
    label: "Select",
  },
  {
    value: 2,
    label: "Form Field 02",
  },
];
function DiscrepanyTemplate() {
  const [formFieldOne, setFormFieldOne] = useState(2);
  const [formFieldTwo, setFormFieldTwo] = useState(1);
  const [formFieldThree, setFormFieldThree] = useState("");
  return (
    <>
      <Typography variant="h6" component="p" mt={2}>
        <b>Discrepancy Initiator Assessment</b>
      </Typography>

      <Grid item xs={12} sm={6} md={4} mt={2}>
        <Typography variant="body2" gutterBottom>
          Initiation
        </Typography>
        <TextField
          id="formFieldOne"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          select
          value={formFieldOne}
          disabled
          onChange={(event) => {
            setFormFieldOne(event.target.value);
          }}
        >
          {formFieldOneList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Typography variant="h6" component="p" mt={3}>
        <b>Discrepancy Assessor Assessment</b>
      </Typography>

      <Grid container mt={1} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Assessment
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
            id="formFieldOne"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={formFieldTwo}
            onChange={(event) => {
              setFormFieldTwo(event.target.value);
            }}
          >
            {formFieldTwoList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} mt={3} width="66%">
        <Typography variant="body2" gutterBottom>
          Form Field 03
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
          id="formFieldThree"
          placeholder="Enter"
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          value={formFieldThree}
          onChange={(event) => {
            setFormFieldThree(event.target.value);
          }}
        />
      </Grid>
    </>
  );
}

export default DiscrepanyTemplate;
