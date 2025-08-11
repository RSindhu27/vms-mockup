import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DecisionTreeDetails from "./DecisionTreeDetails";

const optionList = [
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
  {
    value: 3,
    label: "Option 3",
  },
  {
    value: 4,
    label: "Option 4",
  },
];

function SectionDetails() {
  const [decisionTree, setDecisionTree] = useState("Decision Tree");
  const [form, setForm] = useState("N/A");
  const [assessorsGroup, setAssessorsGroup] = useState([
    {
      value: 2,
      label: "Option 2",
    },
    {
      value: 3,
      label: "Option 3",
    },
  ]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Select Decision Tree
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
            id="section_details_decision_tree"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={decisionTree}
            onChange={(event) => {
              setDecisionTree(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Form
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
            id="section_details_form"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={form}
            onChange={(event) => {
              setForm(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="body2" gutterBottom>
            Select Assessors Group
            <Typography
              component="span"
              variant="body2"
              color="error.main"
              gutterBottom
            >
              *
            </Typography>
          </Typography>
          <Autocomplete
            multiple
            id="section_details_assessors_group"
            options={optionList}
            getOptionLabel={(option) => option.label}
            size="small"
            value={assessorsGroup}
            onChange={(event, newValue) => {
              setAssessorsGroup(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Favorites" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="h6">CSV Decision Tree Details:</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Type:{" "}
                <Typography component="span" color="info.main">
                  <b>Multiple Decision</b>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <DecisionTreeDetails title="Section 1" key="1" />
        </Grid>
        <Grid item xs={12}>
          <DecisionTreeDetails title="Section 2" key="2" />
        </Grid>
      </Grid>
    </>
  );
}

export default SectionDetails;
