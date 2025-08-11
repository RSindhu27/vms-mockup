import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import AddedDeliverables from "./AddedDeliverables";
import AddWorkflow from "../TaskNew/AssignTask/Popup/AddWorkflow";
import ReExecuteDiscrepancy from "./ReExecuteDiscrepancy";
import { PageButton } from "../../Components/Page";

const documentTypeList = [
  {
    value: 1,
    label: "Select",
  },
  {
    value: 2,
    label: "CSV Doc",
  },
];
const actionList = [
  {
    value: 1,
    label: "Select",
  },
  {
    value: 2,
    label: "Revision",
  },
  {
    value: 3,
    label: "New Authoring",
  },
];
const documentList = [
  {
    value: 1,
    label: "Select",
  },
  {
    value: 2,
    label: "DOC-0001",
  },
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

const groupList = [
  { value: 1, label: "User Group 1" },
  { value: 2, label: "User Group 2" },
  { value: 3, label: "User Group 3" },
];

const decisionList = [
  {
    value: 1,
    label: "Re-Execute",
  },
  {
    value: 2,
    label: "No Impact Approval",
  },
  {
    value: 3,
    label: "Suspend Execution",
  },
  {
    value: 4,
    label: "More Information Required",
  },
];

function DiscrepancyDeliverables() {
  const [handleDeliverable, setHandleDeliverable] = useState("Yes");
  const [documentType, setDocumentType] = useState(2);
  const [document, setDocument] = useState(2);
  const [action, setAction] = useState(2);
  const [assignTo, setAssignTo] = useState("user");
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);
  const [expected, setExpected] = useState(dayjs("2022-04-17"));
  const [documentTitle, setDocumentTitle] = useState("");
  const [comments, setComments] = useState("");
  const [decision, setDecision] = useState(1);

  const handleDeliverables = (event, newType) => {
    setHandleDeliverable(newType);
  };

  const handleAssignTo = (event, newType) => {
    setAssignTo(newType);
  };

  const handleClose = () => {};

  const handleReset = () => {};

  const handleUpdate = () => {};

  return (
    <>
      <Grid container spacing={3} alignItems="center" mt={3}>
        <Grid item>
          <Typography variant="h6" component="p">
            <b>Deliverables Required: </b>
          </Typography>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            exclusive
            value={handleDeliverable}
            onChange={handleDeliverables}
            size="small"
          >
            <ToggleButton
              color="secondary"
              value="Yes"
              sx={{ width: 60, height: 30, lineHeight: 0.75 }}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              color="error"
              value="No"
              sx={{ width: 60, height: 30, lineHeight: 0.75 }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>

      <Grid container mt={2} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" gutterBottom>
            Select Document Type
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
            id="documentType"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={documentType}
            onChange={(event) => {
              setDocumentType(event.target.value);
            }}
          >
            {documentTypeList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" gutterBottom>
            Select Action
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
            id="action"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={action}
            onChange={(event) => {
              setAction(event.target.value);
            }}
          >
            {actionList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {/* Conditionally render Enter Document Title when action is New Authoring */}
        {action === 3 && (
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              Enter Document Title
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
              id="document_title"
              placeholder="Enter"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={documentTitle}
              onChange={(event) => {
                setDocumentTitle(event.target.value);
              }}
            />
          </Grid>
        )}
        {/* Conditionally render Select Document when action is Revision */}
        {action === 2 && (
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              Select Document
            </Typography>
            <TextField
              id="document"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={document}
              onChange={(event) => {
                setDocument(event.target.value);
              }}
            >
              {documentList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        )}
        {documentType !== 1 && action !== 1 && (
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              Assign to
              <Typography
                component="span"
                variant="body2"
                color="error.main"
                gutterBottom
              >
                *
              </Typography>
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={assignTo}
              onChange={handleAssignTo}
            >
              <ToggleButton
                color="secondary"
                value="user"
                sx={{ width: 90, height: 40, lineHeight: 0.75 }}
              >
                User
              </ToggleButton>
              <ToggleButton
                color="secondary"
                value="group"
                sx={{ width: 90, height: 40, lineHeight: 0.75 }}
              >
                Group
              </ToggleButton>
              <ToggleButton
                color="secondary"
                value="to_me"
                sx={{ width: 90, height: 40, lineHeight: 0.75 }}
              >
                Self
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2} mt={3} alignItems="flex-end">
        {assignTo === "user" && (
          <Grid item xs={12} sm={6} md={6} lg={6}>
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
        )}
        {assignTo === "group" && (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="body2" gutterBottom>
              Select Group
            </Typography>
            <Autocomplete
              id="recipients-group"
              size="small"
              value={group}
              onChange={(event, newValue) => setGroup(newValue)}
              getOptionLabel={(option) => option.label}
              fullWidth
              multiple
              options={groupList}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        )}
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
        <Grid item>
          <Button variant="contained" color="secondary" disableElevation>
            Add
          </Button>
        </Grid>
      </Grid>
      <AddedDeliverables />
      {documentType === 1 && action === 1 && (
        <>
          <Grid container mt={3} spacing={2} mb={5} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" gutterBottom>
                Select Decision
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
                id="documentType"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                select
                value={decision}
                onChange={(event) => {
                  setDecision(event.target.value);
                }}
              >
                {decisionList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={1} width="66%">
              <Typography variant="body2" gutterBottom>
                Comments
              </Typography>
              <TextField
                id="comments"
                placeholder="Enter Comments"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={comments}
                onChange={(event) => {
                  setComments(event.target.value);
                }}
              />
            </Grid>
            <Grid item>{decision !== 4 && <AddWorkflow />}</Grid>
          </Grid>
          {decision === 1 && <ReExecuteDiscrepancy />}
        </>
      )}
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        p={2}
        spacing={2}
      >
        <PageButton onClick={handleClose} color="error">
          Cancel
        </PageButton>

        <PageButton onClick={handleReset} color="inherit">
          Reset
        </PageButton>
        <PageButton onClick={handleUpdate} color="info">
          Save
        </PageButton>
        {decision === 4 ? (
          <PageButton variant="contained" color="secondary" disableElevation>
            Return to Initiator
          </PageButton>
        ) : (
          <PageButton onClick={handleUpdate} color="success">
            Submit
          </PageButton>
        )}
      </Stack>
    </>
  );
}

export default DiscrepancyDeliverables;
