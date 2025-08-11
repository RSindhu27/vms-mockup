import React, { useState } from "react";
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
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PageButton, TabWrapper } from "../../../Components/Page";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { Chip } from "@mui/material";

const emailList = [
  { value: "user1@example.com", label: "user1@example.com" },
  { value: "user2@example.com", label: "user2@example.com" },
];

const documentList = [
  { value: "DOC001", label: "DOC001 - Financial Report Q1" },
  { value: "DOC002", label: "DOC002 - Compliance Checklist" },
];

function NewDataRoom() {
  const [status, setStatus] = useState(true);
  const [expiryDate, setExpiryDate] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("");
  const [users, setUsers] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [statusConfirmDialogOpen, setStatusConfirmDialogOpen] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(status);

  // Delete confirmation & snackbar
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState(""); // 'user' or 'doc'
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

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

  return (
    <TabWrapper>
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        {/* Form Grid */}
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
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>Status</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={status}
                  onChange={(e) => {
                    if (status) {
                      setStatusConfirmDialogOpen(true);
                      setPendingStatus(false);
                    } else {
                      setStatus(true);
                    }
                  }}
                  color="success"
                />
              }
              label={
                <Box
                  sx={{
                    ml: 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Chip
                    label={status ? "Active" : "Inactive"}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      color: "#fff",
                      bgcolor: status ? "success.main" : "error.main",
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Data Room Name</Typography>
            <TextField
              fullWidth
              placeholder="e.g., Q3 2025 Regulatory Audit"
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
              placeholder="Purpose of this data room"
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
                {/* <Button variant="outlined" color="info" size="small">
                  Send Invite
                </Button> */}
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
            {users.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No users added yet. Add users by email address
              </Typography>
            ) : (
              <Stack spacing={1}>
                {users.map((user, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CircleIcon sx={{ color: "green", fontSize: 10 }} />
                      <Typography variant="body2">{user}</Typography>
                    </Stack>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(user, "user")}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                ))}
              </Stack>
            )}
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
            {documents.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No documents added to this data room yet.
              </Typography>
            ) : (
              <Stack spacing={1}>
                {documents.map((doc, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CircleIcon sx={{ color: "green", fontSize: 10 }} />
                      <Typography variant="body2">{doc}</Typography>
                    </Stack>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(doc, "doc")}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" justifyContent="flex-end" py={2} spacing={2}>
          <PageButton color="error">Cancel</PageButton>
          <PageButton color="primary">Create Data Room</PageButton>
        </Stack>

        {/* Confirmation Dialog */}
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

        {/* Snackbar */}
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

export default NewDataRoom;
