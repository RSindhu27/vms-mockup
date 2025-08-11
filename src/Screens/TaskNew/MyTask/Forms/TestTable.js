import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../../../Components/Page";
import ExecutionDocumentView from "./ExecutionDocumentView";
import { useState } from "react";
import AttachImages from "../Popup/AttachImages";
import AttachDocument from "../Popup/AttachDocument";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import AddExecutionDependency from "../Popup/AddExecutionDependency";
import SendReviewApprove from "../Popup/SendReviewApprove";
import Reject from "../Popup/Reject";
import Approve from "../Popup/Approve";

const splitList = [
  {
    value: 1,
    label: "Yes",
  },
  {
    value: 2,
    label: "No",
  },
  {
    value: 3,
    label: "Transfer Task",
  },
];

const tableList = [
  { label: "Table 1", value: 1 },
  { label: "Table 2", value: 2 },
  { label: "Table 3", value: 3 },
  { label: "Table 4", value: 4 },
  { label: "Table 5", value: 5 },
  { label: "Table 6", value: 6 },
  { label: "Table 7", value: 7 },
  { label: "Table 8", value: 8 },
  { label: "Table 9", value: 9 },
];

const optionList = [
  {
    value: 1,
    label: "bhugonnet0@skyrock.com",
  },
  {
    value: 2,
    label: "bkeywood1@bigcartel.com",
  },
  {
    value: 3,
    label: "hboller2@bloomberg.com",
  },
  {
    value: 4,
    label: "fsailes3@mashable.com",
  },
  {
    value: 5,
    label: "mivanin4@nbcnews.com",
  },
];

function TestTable() {
  const [splitExecution, setSplitExecution] = useState(1);
  const [assignTo, setAssignTo] = useState("user");
  const [user, setUser] = useState([]);
  const [expected, setExpected] = useState(dayjs("2022-04-17"));
  const [selectTable, setSelectTable] = useState([
    {
      value: 3,
      label: "Table 3",
    },
    {
      value: 5,
      label: "Table 5",
    },
  ]);

  const handleAssignTo = (event, newType) => {
    setAssignTo(newType);
  };

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="body2" gutterBottom>
              Select Table
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
              id="test_table"
              fullWidth
              size="small"
              limitTags={3}
              disableClearable
              value={selectTable}
              onChange={(event, newValue) => {
                setSelectTable(newValue);
              }}
              options={tableList}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Table" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Stack
              spacing={0.5}
              direction="column"
              alignItems="left"
              sx={{ mb: 1.3 }}
            >
              <Typography variant="body2">Assign To</Typography>
              <ToggleButtonGroup
                exclusive
                value={assignTo}
                onChange={handleAssignTo}
                size="small"
              >
                <ToggleButton
                  color="secondary"
                  value="user"
                  sx={{ width: 60, height: 30, lineHeight: 0.75 }}
                >
                  User
                </ToggleButton>
                <ToggleButton
                  color="error"
                  value="group"
                  sx={{ width: 80, height: 30, lineHeight: 0.75 }}
                >
                  Group
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="body2" gutterBottom>
              Select User
            </Typography>
            <Autocomplete
              id="recipients-user-group"
              size="small"
              value={user}
              onChange={(event, newValue) => {
                setUser(newValue);
              }}
              getOptionLabel={(option) => option.label}
              fullWidth
              multiple
              options={optionList}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="body2" gutterBottom>
              Target Date
              <Typography
                component="span"
                variant="body2"
                color="error.main"
                gutterBottom
              >
                *
              </Typography>
            </Typography>
            <DatePicker
              value={expected}
              onChange={(newValue) => setExpected(newValue)}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="body2" gutterBottom>
              Split Execution
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
              id="test_table_split_execution"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={splitExecution}
              onChange={(event) => {
                setSplitExecution(event.target.value);
              }}
            >
              {splitList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AddExecutionDependency />
          </Grid>
          <Grid item xs={12}>
            <ExecutionDocumentView />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <AttachImages />
              </Grid>
              <Grid item>
                <AttachDocument />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="error" disableElevation>
                  Fail
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" disableElevation>
                  Pass
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="inherit" disableElevation>
                  N/A
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="info" disableElevation>
                  Record
                </Button>
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
          <PageButton color="secondary">Reset</PageButton>
        </Box>
        <Box>
          <Approve />
        </Box>
        <Box>
          <Reject />
        </Box>
        <Box>
          <PageButton color="info">Save</PageButton>
        </Box>
        <Box>
          <SendReviewApprove />
        </Box>
      </Stack>
    </>
  );
}

export default TestTable;
