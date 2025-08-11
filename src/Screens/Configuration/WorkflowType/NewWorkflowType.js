import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";
import AddLifecycleState from "./AddLifecycleState";
import LifecycleStatesDragList from "./LifecycleStatesDragList";

const listManagerList = [
  {
    label: "List Manager 1",
    value: 1,
  },
  {
    label: "List Manager 2",
    value: 2,
  },
  {
    label: "List Manager 3",
    value: 3,
  },
  {
    label: "List Manager 4",
    value: 4,
  },
  {
    label: "List Manager 5",
    value: 5,
  },
];

function NewWorkflowType() {
  const [workflowType, setWorkflowType] = useState("");
  const [description, setDescription] = useState("");
  const [prefix, setPrefix] = useState("");
  const [snStart, setSNStart] = useState("");
  const [snLength, setSNLength] = useState("");
  const [releaseConditions, setReleaseConditions] = useState("");
  const [delayNum, setDelayNum] = useState("");
  const [wSequence, setWSequence] = useState("serial");
  const [wActivation, setWActivation] = useState("yes");

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="workflow_type_name"
              placeholder="Workflow Type Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={workflowType}
              onChange={(event) => {
                setWorkflowType(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="workflow_type_Description"
              placeholder="Enter Description"
              multiline
              fullWidth
              rows={4}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body2" gutterBottom>
              Prefix
            </Typography>
            <TextField
              id="workflow_type_prefix"
              placeholder="Enter Prefix"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={prefix}
              onChange={(event) => {
                setPrefix(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              WF-Serial Number Start Value
            </Typography>
            <TextField
              id="workflow_type_sn_start"
              placeholder="Enter Value"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={snStart}
              onChange={(event) => {
                setSNStart(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              WF-Serial Number length in digits
            </Typography>
            <TextField
              id="workflow_type_sn_length"
              placeholder="Enter Value"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={snLength}
              onChange={(event) => {
                setSNLength(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Associate Documents"
                color="secondary"
              />
              <FormControlLabel
                control={<Switch />}
                label="Delete Draft"
                color="secondary"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2" gutterBottom>
              Workflow Release Conditions
            </Typography>
            <TextField
              id="workflow_type_release_conditions"
              select
              fullWidth
              size="small"
              value={releaseConditions}
              onChange={(event) => {
                setReleaseConditions(event.target.value);
              }}
            >
              {listManagerList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2" gutterBottom>
              Delay Number of Days
            </Typography>
            <TextField
              id="workflow_type_delay_num"
              placeholder="Enter Days"
              color="secondary"
              variant="outlined"
              size="small"
              type="number"
              fullWidth
              value={delayNum}
              onChange={(event) => {
                setDelayNum(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1">Workflow Sequence</Typography>
            <FormControl>
              <RadioGroup
                row
                value={wSequence}
                onChange={(event) => {
                  setWSequence(event.target.value);
                }}
              >
                <FormControlLabel
                  value="serial"
                  control={<Radio />}
                  label="Serial"
                />
                <FormControlLabel
                  value="parallel"
                  control={<Radio />}
                  label="Parallel"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1">
              Workflow Activation Required?
            </Typography>
            <FormControl>
              <RadioGroup
                row
                value={wActivation}
                onChange={(event) => {
                  setWActivation(event.target.value);
                }}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              <b>Added Lifecycle States:</b>
            </Typography>
          </Grid>
          <LifecycleStatesDragList />
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AddLifecycleState key="dependent-on" />
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

export default NewWorkflowType;
