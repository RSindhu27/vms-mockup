import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  TextField,
  Chip,
  Button,
  Box,
  Paper,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";

const PrintEditManager = ({ open, onClose, packageData }) => {
  const theme = useTheme();
  const [formData, setFormData] = useState(packageData);
  const [success, setSuccess] = useState(false);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth scroll="body">
      <DialogTitle>
        <Typography fontWeight={600}>✏️ Edit Package</Typography>
      </DialogTitle>

      <DialogContent dividers sx={{ px: 3, py: 2 }}>
        <Grid container spacing={2}>
          {[
            "package_id",
            "version",
            "title",
            "created_by",
            "created_on",
            "last_updated_date",
            "last_updated_by",
            "activation_date",
            "activation_by",
          ].map((field, idx) => (
            <Grid item xs={4} key={idx}>
              <Typography variant="subtitle2" gutterBottom>
                {field
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={formData[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="subtitle2">Activate:</Typography>
              <Chip
                label={formData.active ? "Yes" : "No"}
                color={formData.active ? "success" : "default"}
                size="small"
                onClick={() => handleChange("active", !formData.active)}
              />
              <Typography variant="subtitle2">Remarks:</Typography>
              <TextField
                fullWidth
                size="small"
                value={formData.remarks || ""}
                onChange={(e) => handleChange("remarks", e.target.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={12} mt={3}>
            <Typography variant="h6" gutterBottom>
              Document List
            </Typography>
            <Paper sx={{ mt: 1 }}>
              <Box
                display="grid"
                gridTemplateColumns="0.8fr 1fr 1fr 2fr 4fr 1fr 1fr"
                fontWeight="bold"
                p={1.5}
                borderBottom="1px solid #ccc"
                bgcolor={theme.palette.grey[100]}
              >
                <Box>Main</Box>
                <Box>Document ID</Box>
                <Box>Type</Box>
                <Box>Title</Box>
                <Box>System Data Fields</Box>
                <Box>Version</Box>
                <Box>Status</Box>
              </Box>
              {formData.documents.map((doc, idx) => (
                <Box
                  key={idx}
                  display="grid"
                  gridTemplateColumns="0.8fr 1fr 1fr 2fr 4fr 1fr 1fr"
                  alignItems="center"
                  p={1.5}
                  borderBottom="1px solid #eee"
                >
                  <Box>
                    {idx === 0 && (
                      <Chip label="Main" color="info" size="small" />
                    )}
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.documentId}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.type}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.title}</Typography>
                  </Box>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {doc.systemDataFields.map((field, i) => (
                      <Chip
                        key={i}
                        label={field}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                  <Box>
                    <Typography variant="body2">{doc.version}</Typography>
                  </Box>
                  <Box>
                    <Chip
                      label={doc.status}
                      color={doc.status === "Active" ? "success" : "default"}
                      size="small"
                    />
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={handleSave}>
          Save Package
        </Button>
      </DialogActions>

      <Snackbar
        open={success}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Package saved successfully
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default PrintEditManager;
