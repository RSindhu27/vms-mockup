import { useState } from "react";
import EntityFormDetails from "./Forms/EntityFormDetails";
import {
  Autocomplete,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Sections from "./Forms/Sections";
import BusinessRule from "./Forms/BusinessRule";

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

const groupList = [
  {
    name: "Group 1",
    value: 1,
  },
  {
    name: "Group 2",
    value: 2,
  },
  {
    name: "Group 3",
    value: 3,
  },
  {
    name: "Group 4",
    value: 4,
  },
  {
    name: "Group 5",
    value: 5,
  },
];

function AssessmentRequiredYes() {
  const [assessmentName, setAssessmentName] = useState("");
  const [assignAssessment, setAssignAssessment] = useState("user");
  const [userEmail, setUserEmail] = useState([]);
  const [groupName, setGroupName] = useState([]);

  const handleAssignAssessment = (event, newType) => {
    setAssignAssessment(newType);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EntityFormDetails />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="p">
            <b>Assessment Details:</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" gutterBottom>
            Assessment Name
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
            id="assessment_name"
            placeholder="Enter Assessment Name"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={assessmentName}
            onChange={(event) => {
              setAssessmentName(event.target.value);
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
        {/* Select User */}
        {assignAssessment === "user" && (
          <Grid item xs={12} sm={6} md={5}>
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
                <TextField {...params} placeholder="Select User" />
              )}
            />
          </Grid>
        )}
        {/* Select Group */}
        {assignAssessment === "group" && (
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="body2" gutterBottom>
              Select Group
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
              id="assessment_group"
              options={groupList}
              getOptionLabel={(option) => option.name}
              size="small"
              value={groupName}
              onChange={(event, newValue) => {
                setGroupName(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Group" />
              )}
            />
          </Grid>
        )}
        {/* Select Me */}
        {assignAssessment === "tome" && (
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="body2" gutterBottom>
              User
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
              id="assessment_me"
              value="mallikarju@arcolab.com"
              size="small"
              fullWidth
              placeholder="Favorites"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Sections />
        </Grid>
        <Grid item xs={12}>
          <BusinessRule />
        </Grid>
      </Grid>
    </>
  );
}

export default AssessmentRequiredYes;
