import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Stack,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PageButton, TabWrapper } from "../../../Components/Page";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";

const emailList = [
  { value: "user60@example.com", label: "user60@example.com" },
];

function EditDataRoom() {
  const [status, setStatus] = useState(true);
  const [expiryDate, setExpiryDate] = useState(dayjs("2025-03-23"));
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("");
  const [users, setUsers] = useState([
    "user60@example.com",
    "user61@example.com",
  ]);
  const [documents, setDocuments] = useState([
    "DOC0009359",
    "DOC0009360",
    "DOC0009361",
  ]);
  const [documentList, setDocumentList] = useState([]);
  const [statusConfirmDialogOpen, setStatusConfirmDialogOpen] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(status);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [infoHistoryDialogOpen, setInfoHistoryDialogOpen] = useState(false);
  const [infoHistory, setInfoHistory] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              { value: "DOC0009359", label: "Quality Control Report" },
              { value: "DOC0009360", label: "Safety Manual" },
              { value: "DOC0009361", label: "Inspection Checklist" },
            ]),
          500
        )
      );
      setDocumentList(data);
    };

    fetchDocuments();
  }, []);

  const handleAddUser = () => {
    if (selectedEmail && !users.includes(selectedEmail)) {
      setUsers((prev) => [...prev, selectedEmail]);
      setSelectedEmail("");
    }
  };

  const handleAddDocument = () => {
    if (selectedDoc && !documents.includes(selectedDoc)) {
      setDocuments((prev) => [...prev, selectedDoc]);
      setSelectedDoc("");
    }
  };

  const handleDeleteClick = (item, type) => {
    setItemToDelete(item);
    setDeleteType(type);
    setConfirmDialogOpen(true);
  };

  const confirmDeletion = () => {
    if (deleteType === "user") {
      setUsers((prev) => prev.filter((u) => u !== itemToDelete));
      setSnackbarMsg(`User "${itemToDelete}" removed`);
    } else if (deleteType === "doc") {
      setDocuments((prev) => prev.filter((d) => d !== itemToDelete));
      setSnackbarMsg(`Document "${itemToDelete}" removed`);
    }
    setConfirmDialogOpen(false);
    setItemToDelete(null);
    setDeleteType("");
    setSnackbarOpen(true);
  };

  const cancelDeletion = () => {
    setConfirmDialogOpen(false);
    setItemToDelete(null);
    setDeleteType("");
  };

  const handleSubmitInfoRequest = () => {
    if (infoMessage.trim()) {
      setInfoHistory((prev) => [
        ...prev,
        { message: infoMessage, time: new Date().toLocaleString() },
      ]);
    }
    setInfoDialogOpen(false);
    setSnackbarMsg("Your request has been submitted");
    setSnackbarOpen(true);
    setInfoMessage("");
  };

  return (
    <TabWrapper>
      <Box
        sx={{
          mb: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>Need Help?</Typography>
        <Typography
          variant="body2"
          sx={{ flex: 1, ml: 2, color: "text.secondary" }}
        >
          If you need more information or have questions, you can send a request
          directly to the data room owner.
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="View Info Request History">
            <IconButton onClick={() => setInfoHistoryDialogOpen(true)}>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Button variant="contained" onClick={() => setInfoDialogOpen(true)}>
            Request More Info
          </Button>
        </Stack>
      </Box>

      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>Room Number</Typography>
            <TextField
              fullWidth
              value="VDR093473"
              size="small"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>Owner</Typography>
            <TextField fullWidth size="small" defaultValue="Alex John" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>Status</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={status}
                  onChange={() => {
                    if (status) {
                      setStatusConfirmDialogOpen(true);
                      setPendingStatus(false);
                    } else {
                      setStatus(true);
                    }
                  }}
                  sx={{
                    "& .MuiSwitch-track": {
                      backgroundColor: status ? "success.main" : "error.main",
                      opacity: 1,
                    },
                    "& .MuiSwitch-thumb": {
                      color: "#fff",
                    },
                  }}
                />
              }
              label={
                <Chip
                  label={status ? "Active" : "Inactive"}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    bgcolor: status ? "success.main" : "error.main",
                  }}
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Data Room Name</Typography>
            <TextField
              fullWidth
              defaultValue="Q3 2025 Regulatory Audit"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Expiry Date</Typography>
            <DatePicker
              value={expiryDate}
              onChange={(newValue) => setExpiryDate(newValue)}
              slotProps={{ textField: { fullWidth: true, size: "small" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>Reason</Typography>
            <TextField
              fullWidth
              defaultValue="Audit trail"
              multiline
              rows={2}
              size="small"
            />
          </Grid>
        </Grid>

        {/* User Section */}
        <Box mt={2}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography fontWeight={600}>User/Group</Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <FormControl size="small" sx={{ minWidth: 250 }}>
                  <Select
                    value={selectedEmail}
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Select email address</em>
                    </MenuItem>
                    {emailList.map((email) => (
                      <MenuItem key={email.value} value={email.value}>
                        {email.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleAddUser}
                >
                  Add User
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              mt: 2,
              px: 2,
              py: 1.5,
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {users.map((user, index) => (
                <Chip
                  key={index}
                  label={user}
                  variant="outlined"
                  onDelete={() => handleDeleteClick(user, "user")}
                  deleteIcon={<CloseIcon fontSize="small" />}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Document Section */}
        <Box mt={2}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography fontWeight={600}>Document List</Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <FormControl size="small" sx={{ minWidth: 250 }}>
                  <Select
                    value={selectedDoc}
                    onChange={(e) => setSelectedDoc(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Search documents</em>
                    </MenuItem>
                    {documentList.map((doc) => (
                      <MenuItem key={doc.value} value={doc.value}>
                        {doc.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleAddDocument}
                >
                  Add
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              mt: 2,
              px: 2,
              py: 1.5,
            }}
          >
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Document ID</b>
                    </TableCell>
                    <TableCell>
                      <b>Title</b>
                    </TableCell>
                    <TableCell>
                      <b>Type</b>
                    </TableCell>
                    <TableCell>
                      <b>Version</b>
                    </TableCell>
                    <TableCell>
                      <b>Status</b>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documents.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell>{doc}</TableCell>
                      <TableCell>Quality Control Report</TableCell>
                      <TableCell>SOP</TableCell>
                      <TableCell>1.0</TableCell>
                      <TableCell>
                        <Chip label="Active" size="small" color="success" />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteClick(doc, "doc")}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          py={2}
          spacing={2}
        >
          <Stack>
            <PageButton variant="outlined" color="info" size="small">
              Send Invite
            </PageButton>
          </Stack>
          <Stack direction="row" spacing={2}>
            <PageButton color="error">Cancel</PageButton>
            <PageButton color="primary">Update Data Room</PageButton>
          </Stack>
        </Stack>

        {/* Dialogs */}
        <Dialog
          open={infoDialogOpen}
          onClose={() => setInfoDialogOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle sx={{ fontWeight: 600 }}>
            Request Additional Information
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Send a message to the data room owner requesting more information.
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Please describe what additional information you need..."
              value={infoMessage}
              onChange={(e) => setInfoMessage(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleSubmitInfoRequest}
              variant="contained"
              fullWidth
              sx={{ m: 2 }}
            >
              Submit Request
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={confirmDialogOpen} onClose={cancelDeletion}>
          <DialogTitle>
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Are you sure you want to remove{" "}
              <Box component="span" sx={{ fontWeight: 600 }}>
                {itemToDelete}
              </Box>{" "}
              from the{" "}
              <Box component="span" sx={{ fontWeight: 600 }}>
                {deleteType === "user" ? "user list" : "document list"}
              </Box>
              ?
            </Typography>
          </DialogTitle>
          <DialogActions>
            <Button onClick={cancelDeletion}>Cancel</Button>
            <Button onClick={confirmDeletion} color="error" variant="contained">
              Remove
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={statusConfirmDialogOpen}
          onClose={() => setStatusConfirmDialogOpen(false)}
        >
          <DialogTitle>
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Are you sure you want to set this data room to{" "}
              <Box component="span" sx={{ fontWeight: 600 }}>
                Inactive
              </Box>
              ?
            </Typography>
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setStatusConfirmDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setStatus(pendingStatus);
                setStatusConfirmDialogOpen(false);
              }}
              color="error"
              variant="contained"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={infoHistoryDialogOpen}
          onClose={() => setInfoHistoryDialogOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Information Request History</DialogTitle>
          <DialogContent>
            {infoHistory.length > 0 ? (
              <Stack spacing={2} mt={1} divider={<Divider />}>
                {infoHistory.map((entry, idx) => (
                  <Box key={idx}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="caption" color="text.secondary">
                        {entry.time}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {entry.message}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            ) : (
              <Typography variant="body2">No requests made yet.</Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setInfoHistoryDialogOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarMsg}
          </Alert>
        </Snackbar>
      </Box>
    </TabWrapper>
  );
}

export default EditDataRoom;
