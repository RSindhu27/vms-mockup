import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  MenuItem,
  TextField,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";
import AddPrivileges from "./AddPrivileges";
import EditAddedPrivileges from "./EditAddedPrivileges";

const organizationList = [
  {
    value: 1,
    label: "Organization 1",
  },
  {
    value: 2,
    label: "Organization 2",
  },
  {
    value: 3,
    label: "Organization 3",
  },
  {
    value: 4,
    label: "Organization 4",
  },
  {
    value: 5,
    label: "Organization 5",
  },
];

const businessUnitList = [
  {
    value: 1,
    label: "Business Unit 1",
  },
  {
    value: 2,
    label: "Business Unit 2",
  },
  {
    value: 3,
    label: "Business Unit 3",
  },
  {
    value: 4,
    label: "Business Unit 4",
  },
  {
    value: 5,
    label: "Business Unit 5",
  },
];

const departmentList = [
  {
    value: 1,
    label: "Department 1",
  },
  {
    value: 2,
    label: "Department 2",
  },
  {
    value: 3,
    label: "Department 3",
  },
  {
    value: 4,
    label: "Department 4",
  },
  {
    value: 5,
    label: "Department 5",
  },
];

const userTypeList = [
  {
    value: 1,
    label: "User Type 1",
  },
  {
    value: 2,
    label: "User Type 2",
  },
  {
    value: 3,
    label: "User Type 3",
  },
  {
    value: 4,
    label: "User Type 4",
  },
  {
    value: 5,
    label: "User Type 5",
  },
];

const authenticationTypeList = [
  {
    value: 1,
    label: "Authentication Type 1",
  },
  {
    value: 2,
    label: "Authentication Type 2",
  },
  {
    value: 3,
    label: "Authentication Type 3",
  },
  {
    value: 4,
    label: "Authentication Type 4",
  },
  {
    value: 5,
    label: "Authentication Type 5",
  },
];

function NewRole() {
  const [loginId, setLoginId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [domain, setDomain] = useState("");
  const [jobTitle, setJobTile] = useState("");
  const [organization, setOrganization] = useState(1);
  const [businessUnit, setBusinessUnit] = useState(1);
  const [department, setDepartment] = useState(1);
  const [userType, setUserType] = useState(1);
  const [authenticationType, setAuthenticationType] = useState(1);
  const [loginStatus, setLoginStatus] = useState("active");
  const [accountStatus, setAccountStatus] = useState("active");

  const handleLoginStatus = (value) => {
    if (value === "active") return "Active";
    else return "Inactive";
  };

  const handleAccountStatus = (value) => {
    if (value === "active") return "Active";
    else return "Inactive";
  };

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Login Id
            </Typography>
            <TextField
              id="user-login-id"
              placeholder="Enter Login ID"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={loginId}
              onChange={(event) => {
                setLoginId(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="user-name"
              placeholder="Enter Name"
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
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Email Address
            </Typography>
            <TextField
              id="user-email"
              placeholder="Enter Email Address"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Employee Number
            </Typography>
            <TextField
              id="user-employee-number"
              placeholder="Enter Employee Number"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={employeeNumber}
              onChange={(event) => {
                setEmployeeNumber(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Domain
            </Typography>
            <TextField
              id="user-domain"
              placeholder="Enter Domain"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={domain}
              onChange={(event) => {
                setDomain(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Job Title
            </Typography>
            <TextField
              id="user-job-title"
              placeholder="Enter Job Title"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={jobTitle}
              onChange={(event) => {
                setJobTile(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Organization
            </Typography>
            <TextField
              id="user-organization"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={organization}
              onChange={(event) => {
                setOrganization(event.target.value);
              }}
            >
              {organizationList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Business Unit
            </Typography>
            <TextField
              id="user-business-unit"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={businessUnit}
              onChange={(event) => {
                setBusinessUnit(event.target.value);
              }}
            >
              {businessUnitList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Department
            </Typography>
            <TextField
              id="user-department"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={department}
              onChange={(event) => {
                setDepartment(event.target.value);
              }}
            >
              {departmentList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              User Type
            </Typography>
            <TextField
              id="user-type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={userType}
              onChange={(event) => {
                setUserType(event.target.value);
              }}
            >
              {userTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body2" gutterBottom>
              Authentication Type
            </Typography>
            <TextField
              id="user-authentication-type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={authenticationType}
              onChange={(event) => {
                setAuthenticationType(event.target.value);
              }}
            >
              {authenticationTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body1" gutterBottom>
              Select Status: <b>{handleLoginStatus(loginStatus)}</b>
            </Typography>
            <ButtonGroup
              disableElevation
              variant="contained"
              color="secondary"
              size="small"
            >
              <Button
                sx={{
                  bgcolor:
                    loginStatus === "active" ? "secondary.main" : "grey.200",
                  color:
                    loginStatus === "active"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setLoginStatus("active")}
              >
                Enable
              </Button>
              <Button
                sx={{
                  bgcolor:
                    loginStatus === "inactive" ? "secondary.main" : "grey.200",
                  color:
                    loginStatus === "inactive"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setLoginStatus("inactive")}
              >
                Disable
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body1" gutterBottom>
              Account Status: <b>{handleAccountStatus(accountStatus)}</b>
            </Typography>
            <ButtonGroup
              disableElevation
              variant="contained"
              color="secondary"
              size="small"
            >
              <Button
                sx={{
                  bgcolor:
                    accountStatus === "active" ? "secondary.main" : "grey.200",
                  color:
                    accountStatus === "active"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setAccountStatus("active")}
              >
                Enable
              </Button>
              <Button
                sx={{
                  bgcolor:
                    accountStatus === "inactive"
                      ? "secondary.main"
                      : "grey.200",
                  color:
                    accountStatus === "inactive"
                      ? "secondary.contrastText"
                      : "text.secondary",
                  "&:hover": {
                    color: "secondary.contrastText",
                  },
                }}
                onClick={() => setAccountStatus("inactive")}
              >
                Disable
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AddPrivileges />
          </Grid>
          <Grid item>
            <EditAddedPrivileges />
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

export default NewRole;
