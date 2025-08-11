import {
  Autocomplete,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DecisionTreeDetails from "./DecisionTreeDetails";

const userList = [
  {
    label: "msangster0@dropbox.com",
    name: "Mace Sangster",
    value: 1,
  },
  {
    label: "sdenys1@yelp.com",
    name: "Sharla Denys",
    value: 2,
  },
  {
    label: "abashford2@cloudflare.com",
    name: "Archaimbaud Bashford",
    value: 3,
  },
  {
    label: "rexroll3@springer.com",
    name: "Ricky Exroll",
    value: 4,
  },
  {
    label: "lbarg4@networksolutions.com",
    name: "Lionel Barg",
    value: 5,
  },
];

function CSVDSectionDetails() {
  const [decisionTree, setDecisionTree] = useState("Decision Tree 1");
  const [form, setForm] = useState("Form 1");
  const [assignAssessment, setAssignAssessment] = useState("user");
  const [userEmail, setUserEmail] = useState([]);

  const handleAssignAssessment = (event, newType) => {
    setAssignAssessment(newType);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Decision Tree
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
        <Grid item xs={12} sm={6} md={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <b>
                  Assign Assessment To
                  <Typography
                    component="span"
                    variant="body2"
                    color="error.main"
                    gutterBottom
                  >
                    *
                  </Typography>
                </b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                exclusive
                value={assignAssessment}
                onChange={handleAssignAssessment}
                size="small"
                color="secondary"
              >
                <ToggleButton
                  value="user"
                  sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                >
                  User
                </ToggleButton>
                <ToggleButton
                  value="group"
                  sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                >
                  Group
                </ToggleButton>
                <ToggleButton
                  value="tome"
                  sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                >
                  To Me
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <Typography variant="body2" gutterBottom>
            Select Users
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
            id="assessment_user"
            options={userList}
            getOptionLabel={(option) => option.label}
            size="small"
            value={userEmail}
            onChange={(event, newValue) => {
              setUserEmail(newValue);
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

export default CSVDSectionDetails;
