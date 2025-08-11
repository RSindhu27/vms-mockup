import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { PageButton, TabWrapper } from "../../../Components/Page";
import AddFieldType from "./AddFieldType";
import NumberingDragList from "./NumberingDragList";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditNumberingSystem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startingValue, setStartingValue] = useState("");
  const [maximumDigit, setMaximumDigit] = useState("");
  const [scope, setScope] = useState("local");
  const [displayLeadingZero, setDisplayLeadingZero] = useState(false);
  const navigate = useNavigate();

  const handleDisplayLeadingZero = (event) => {
    setDisplayLeadingZero(event.target.checked);
  };

  const handleScope = (event) => {
    setScope(event.target.value);
  };

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p">
              Edit Numbering System
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="num_sys_name"
              placeholder="Name"
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
              id="num_sys_description"
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom>
                  Starting Value
                </Typography>
                <TextField
                  id="num_sys_name"
                  placeholder="Starting Value"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  value={startingValue}
                  onChange={(event) => {
                    setStartingValue(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom>
                  Maximum Digit
                </Typography>
                <TextField
                  id="num_sys_maximum_digit"
                  placeholder="Maximum Digit"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  value={maximumDigit}
                  onChange={(event) => {
                    setMaximumDigit(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body1">
                <b>Scope:</b>
              </Typography>
              <FormControl>
                <RadioGroup row value={scope} onChange={handleScope}>
                  <FormControlLabel
                    value="local"
                    control={<Radio />}
                    label="Local"
                  />
                  <FormControlLabel
                    value="global"
                    control={<Radio />}
                    label="Global"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={displayLeadingZero}
                    onChange={handleDisplayLeadingZero}
                  />
                }
                label="Display Leading Zero"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <AddFieldType key="field-type" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <b>Selected Numbering System:</b>
            </Typography>
          </Grid>
          <NumberingDragList />
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
          <PageButton color="secondary">Generate</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditNumberingSystem;
