import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  Radio,
  Stack,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function NewActivities() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [meaning, setMeaning] = useState("");
  const [esignature, setESignature] = useState("yes");
  const [comments, setComments] = useState("yes");

  const handleSignature = (event) => {
    setESignature(event.target.value);
  };

  const handleComments = (event) => {
    setComments(event.target.value);
  };

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="activity_name"
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
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="activity_description"
              color="secondary"
              value={description}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Meaning of Signature
            </Typography>
            <TextField
              id="activity_description"
              color="secondary"
              value={meaning}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setMeaning(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box>
                    <Typography variant="body1">
                      <b>Electronic Signature:</b>
                    </Typography>
                  </Box>
                  <Box>
                    <RadioGroup
                      row
                      name="activity_e_signature"
                      value={esignature}
                      onChange={handleSignature}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box>
                    <Typography variant="body1">
                      <b>Comments:</b>
                    </Typography>
                  </Box>
                  <Box>
                    <RadioGroup
                      row
                      name="activity_comments"
                      value={comments}
                      onChange={handleComments}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
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

export default NewActivities;
