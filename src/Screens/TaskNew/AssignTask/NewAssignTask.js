import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AuthoringDocument from "./Forms/AuthoringDocument";
import Execution from "./Forms/Execution";

const taskTypeList = [
  {
    value: 1,
    label: "Authoring Document",
  },
  {
    value: 2,
    label: "Execution",
  },
  {
    value: 3,
    label: "Task Type 3",
  },
  {
    value: 4,
    label: "Task Type 4",
  },
];

function NewAssignTask() {
  const [taskType, setTaskType] = useState(1);

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              Assign New Task - <b>TSK0001</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" textAlign="right">
              Exe No: <b>CL-BMS_EMS-001.01-E-01.01</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" gutterBottom>
              Select Task Type
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
              id="assign_task_type"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={taskType}
              onChange={(event) => {
                setTaskType(event.target.value);
              }}
            >
              {taskTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {taskType === 1 ? <AuthoringDocument /> : <Execution />}
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
          <PageButton color="info">Reset</PageButton>
        </Box>
        <Box>
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewAssignTask;
