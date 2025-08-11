import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import AddUsers from "./AddUsers";
import AddUsersGroup from "./AddUsersGroup";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { PageCircleButton } from "../../../../Components/Page";

function UserGroupDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" gutterBottom>
            Name
          </Typography>
          <TextField
            id="role-name"
            placeholder="Enter Group Name"
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
        <Grid item xs={12} sm={8}>
          <Typography variant="body2" gutterBottom>
            Description
          </Typography>
          <TextField
            id="role-description"
            placeholder="Enter Description"
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
      <Box p={1} />
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <AddUsers />
        </Grid>
        <Grid item>
          <AddUsersGroup />
        </Grid>
        <Grid item>
          <PageCircleButton
            color="secondary"
            variant="contained"
            disableElevation
            startIcon={<AddCircleOutlinedIcon />}
          >
            Add Privileges
          </PageCircleButton>
        </Grid>
      </Grid>
    </>
  );
}

export default UserGroupDetails;
