import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Chip,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";

const documentList = [
  { value: "BMR", label: "BMR - Batch Manufacturing Record" },
  { value: "QR", label: "QR - Quality Report" },
  { value: "CR", label: "CR - Compliance Record" },
];

const subDocumentList = [
  { value: "Batch Manufacturing Record", label: "Batch Manufacturing Record" },
  { value: "Quality Control Report", label: "Quality Control Report" },
  { value: "Form Control Report", label: "Form Control Report" },
];

const CreateNewPackage = ({ open, onClose }) => {
  const [active, setActive] = useState("Yes");
  const [tab, setTab] = useState(0);
  const [documentType, setDocumentType] = useState("BMR");
  const [associatedDocs, setAssociatedDocs] = useState([]);
  const [selectedSubDoc, setSelectedSubDoc] = useState(
    "Batch Manufacturing Record"
  );
  const [mainFile, setMainFile] = useState(null);
  const [subFile, setSubFile] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);

  const handleAddDocument = () => {
    const newDoc = {
      documentId: "DOC" + Math.floor(Math.random() * 1000000),
      type: "SOP",
      title: selectedSubDoc,
      systemDataFields: ["Vendor Id", "Product Code", "Batch Number"],
      version: "1.0",
      status: "Active",
    };
    setAssociatedDocs([...associatedDocs, newDoc]);
  };

  const handleDeleteDoc = (index) => {
    const updated = [...associatedDocs];
    updated.splice(index, 1);
    setAssociatedDocs(updated);
  };

  const handleMainFileChange = (e) => {
    setMainFile(e.target.files[0]);
  };

  const handleSubFileChange = (e) => {
    setSubFile(e.target.files[0]);
  };

  const selectedDoc = documentList.find((d) => d.value === documentType);

  const documentDetails = {
    Title: selectedDoc?.label.split(" - ")[1] || "",
    Type: selectedDoc?.value || "",
    Version: "1.2",
    Status: "Active",
    "Product Code": "PRD001",
    "Batch Number": "BN2023001",
  };

  const handleSave = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirm = () => {
    setConfirmDialogOpen(false);
    setSuccessSnackbarOpen(true);
    onClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {}}
        disableEscapeKeyDown
        maxWidth="lg"
        fullWidth
        scroll="body"
        PaperProps={{ sx: { maxHeight: "90vh" } }}
      >
        <DialogTitle>
          <Typography fontWeight={600}>🛠️ Create New Package</Typography>
        </DialogTitle>

        <DialogContent dividers sx={{ px: 3, py: 2 }}>
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="subtitle2" mb={0.5}>
                  Package ID
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  value="PAC0093473"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" mb={0.5}>
                  Version
                </Typography>
                <TextField fullWidth size="small" value="1.0" />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" mb={0.5}>
                  Title
                </Typography>
                <TextField fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography variant="subtitle2">Activate:</Typography>
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      value={active}
                      exclusive
                      onChange={(e, val) => val && setActive(val)}
                      size="small"
                    >
                      <ToggleButton value="Yes" color="success">
                        Yes
                      </ToggleButton>
                      <ToggleButton value="No" color="error">
                        No
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle2" mb={0.5}>
                      Remarks *
                    </Typography>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Tabs
                  value={tab}
                  onChange={(e, val) => setTab(val)}
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    mb: 2,
                    "& .MuiTab-root": { fontWeight: 600 },
                  }}
                >
                  <Tab label="Main Document" />
                  <Tab label="Associated Document(s)" />
                </Tabs>
              </Grid>

              {tab === 0 && (
                <>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle2" mb={0.5}>
                      Select Main Document
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                      >
                        {documentList.map((doc) => (
                          <MenuItem key={doc.value} value={doc.value}>
                            {doc.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    display="flex"
                    alignItems="flex-end"
                  >
                    <Button
                      variant="contained"
                      component="label"
                      color="success"
                      fullWidth
                      sx={{ height: 40 }}
                    >
                      Browse Files
                      <input
                        type="file"
                        hidden
                        onChange={handleMainFileChange}
                      />
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      sx={{ p: 3, backgroundColor: "#f9fafa", borderRadius: 2 }}
                    >
                      <Typography variant="subtitle2" mb={1}>
                        Document Details:
                      </Typography>
                      {Object.entries(documentDetails).map(([label, value]) => (
                        <Typography key={label} variant="body2" mb={0.5}>
                          <strong>{label}:</strong> {value}
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>
                </>
              )}

              {tab === 1 && (
                <>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle2" mb={0.5}>
                      Select Sub - Document
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={selectedSubDoc}
                        onChange={(e) => setSelectedSubDoc(e.target.value)}
                      >
                        {subDocumentList.map((doc) => (
                          <MenuItem key={doc.value} value={doc.value}>
                            {doc.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={2}
                    display="flex"
                    alignItems="flex-end"
                  >
                    <Button
                      variant="contained"
                      component="label"
                      color="success"
                      fullWidth
                      sx={{ height: 40 }}
                    >
                      Browse Files
                      <input
                        type="file"
                        hidden
                        onChange={handleSubFileChange}
                      />
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={2}
                    display="flex"
                    alignItems="flex-end"
                  >
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ height: 40 }}
                      startIcon={<Add />}
                      onClick={handleAddDocument}
                    >
                      Add Document
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                      <Box
                        display="flex"
                        fontWeight="bold"
                        pb={1}
                        borderBottom="1px solid #ddd"
                      >
                        <Box flex={1}>Document ID</Box>
                        <Box flex={1}>Type</Box>
                        <Box flex={2}>Title</Box>
                        <Box flex={3}>System Data Fields</Box>
                        <Box flex={1}>Version</Box>
                        <Box flex={1}>Status</Box>
                        <Box width="32px" />
                      </Box>

                      {associatedDocs.map((doc, idx) => (
                        <Box
                          key={idx}
                          display="flex"
                          alignItems="center"
                          py={1}
                          borderBottom="1px solid #eee"
                        >
                          <Box flex={1} color="info.main" fontWeight={600}>
                            {doc.documentId}
                          </Box>
                          <Box flex={1}>{doc.type}</Box>
                          <Box flex={2}>{doc.title}</Box>
                          <Box flex={3} display="flex" flexWrap="wrap" gap={1}>
                            {doc.systemDataFields.map((field, i) => (
                              <Chip
                                key={i}
                                label={field}
                                size="small"
                                variant="outlined"
                              />
                            ))}
                          </Box>
                          <Box flex={1}>{doc.version}</Box>
                          <Box flex={1}>
                            <Chip
                              label={doc.status}
                              size="small"
                              color={
                                doc.status === "Active" ? "success" : "default"
                              }
                            />
                          </Box>
                          <Box width="32px">
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteDoc(idx)}
                            >
                              <Close fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      ))}
                    </Paper>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="success">
            Save Package
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>
          <Typography variant="subtitle1">
            We need confirmation to activate the package. Would you like to send
            confirmation?
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="error">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Package is saved successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateNewPackage;
