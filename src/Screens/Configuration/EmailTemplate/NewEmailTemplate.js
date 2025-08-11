import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  Divider,
  MenuItem,
  Alert,
  Button,
  Chip,
} from "@mui/material";
import RichTextEditor from "./RichTextEditor/RichTextEditor";
import AddRecipients from "./AddRecipients";
import { Logo_Arcolab } from "../../../Components/Images";

const optionList = [
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
  {
    value: 3,
    label: "Option 3",
  },
  {
    value: 4,
    label: "Option 4",
  },
  {
    value: 5,
    label: "Option 5",
  },
];

const notificationTypeList = [
  {
    value: 1,
    label: "System Default",
  },
  {
    value: 2,
    label: "Document Activity Based",
  },
  {
    value: 3,
    label: "Workflow Activity Based",
  },
  {
    value: 4,
    label: "User Activity Based",
  },
];

function NewEmailTemplate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [activityType, setActivityType] = useState("");
  const [warningType, setWarningType] = useState("");
  const [notificationInDays, setNotificationInDays] = useState("");
  const [notificationDays, setNotificationDays] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ border: 1, borderColor: "grey.400", borderRadius: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Box sx={{ py: 1, px: 2 }}>
                    <Typography variant="h6" component="p">
                      Email/Notification Configuration
                    </Typography>
                  </Box>
                  <Divider sx={{ m: 0, p: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ py: 1, px: 2 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Notification Title
                        </Typography>
                        <TextField
                          id="notification_tile"
                          placeholder="Notification Title"
                          color="secondary"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={title}
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Notification Description
                        </Typography>
                        <TextField
                          id="notification_description"
                          color="secondary"
                          fullWidth
                          multiline
                          rows={4}
                          value={description}
                          onChange={(event) => {
                            setDescription(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="body2" gutterBottom>
                          Notification Type
                        </Typography>
                        <TextField
                          id="notification_type"
                          fullWidth
                          select
                          multiline
                          size="small"
                          value={notificationType}
                          onChange={(event) => {
                            setNotificationType(event.target.value);
                          }}
                        >
                          {notificationTypeList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="body2" gutterBottom>
                          Activity Type
                        </Typography>
                        <TextField
                          id="notification_activity_type"
                          fullWidth
                          select
                          multiline
                          size="small"
                          value={activityType}
                          onChange={(event) => {
                            setActivityType(event.target.value);
                          }}
                        >
                          {optionList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Warning Type
                        </Typography>
                        <TextField
                          id="notification_warning_type"
                          fullWidth
                          select
                          multiline
                          size="small"
                          value={warningType}
                          onChange={(event) => {
                            setWarningType(event.target.value);
                          }}
                        >
                          {optionList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="body2" gutterBottom>
                          Number of Notification In Days
                        </Typography>
                        <TextField
                          id="notification_in_days"
                          fullWidth
                          select
                          multiline
                          size="small"
                          value={notificationInDays}
                          onChange={(event) => {
                            setNotificationInDays(event.target.value);
                          }}
                        >
                          {optionList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="body2" gutterBottom>
                          Number of Notification Days
                        </Typography>
                        <TextField
                          id="notification_days"
                          fullWidth
                          select
                          multiline
                          size="small"
                          value={notificationDays}
                          onChange={(event) => {
                            setNotificationDays(event.target.value);
                          }}
                        >
                          {optionList.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Notification Subject
                        </Typography>
                        <TextField
                          id="notification_subject"
                          placeholder="Notification Subject"
                          color="secondary"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={subject}
                          onChange={(event) => {
                            setSubject(event.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Rule
                        </Typography>
                        <Alert severity="info">
                          This message will be triggered whenever the system
                          will be down/maintenance
                        </Alert>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>
                          Notification Body
                        </Typography>
                        <RichTextEditor />
                      </Grid>
                      <Grid item xs={12}>
                        <Stack
                          spacing={1}
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <AddRecipients />
                          <Button
                            variant="outlined"
                            color="secondary"
                            disableElevation
                          >
                            Load Signature
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ border: 1, borderColor: "grey.400", borderRadius: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Box sx={{ py: 1, px: 2 }}>
                    <Typography variant="h6" component="p">
                      Notification Preview
                    </Typography>
                  </Box>
                  <Divider sx={{ m: 0, p: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    direction="row"
                    sx={{ py: 1, px: 2 }}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      component="img"
                      src={Logo_Arcolab}
                      alt="logo"
                      sx={{ width: 160 }}
                    />
                    <Box>
                      <Typography>
                        <b>ARCD001</b>
                      </Typography>
                    </Box>
                  </Stack>
                  <Divider sx={{ m: 0, p: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ py: 1, px: 2 }}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Typography variant="body2">
                          <b>Recipients:</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Chip size="small" label="somename@xyz.com" />
                          </Grid>
                          <Grid item>
                            <Chip size="small" label="QA Department" />
                          </Grid>
                          <Grid item>
                            <Chip size="small" label="Admin" />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          <b>Subject</b>: Doc Title/Number Draft:
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      mb: 2,
                      mx: 2,
                      p: 1,
                      bgcolor: "grey.200",
                      borderRadius: 2,
                    }}
                  >
                    {/* Html Preview Section */}
                    <p>Dear User,</p>
                    <p>
                      Capturing the texts which you entered...
                      <br />
                      ----------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ------------------------------------
                      <br />
                      ----------------------------
                      <br />
                    </p>
                    <p>
                      Regards,
                      <br /> QA Team
                    </p>
                    <p>
                      "Arcolab PVT Ltd", 19/2, Sarakki Village,
                      <br />
                      15th Cross Rd, Dollars Layout, 4th Phase,
                      <br />
                      J.P. Nagar, Bengaluru, Karnataka 560078
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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

export default NewEmailTemplate;
