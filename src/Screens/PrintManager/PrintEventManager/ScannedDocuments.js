import React from "react";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const scannedFiles = [
  {
    fileName: "Signed_Invoice.pdf",
    uploadedBy: "John Smith",
    timestamp: "4/10/2024, 3:05:00 PM",
    type: "Read Only",
  },
  {
    fileName: "Signed_Invoice.pdf",
    uploadedBy: "John Smith",
    timestamp: "4/10/2024, 3:05:00 PM",
    type: "Read Only",
  },
  {
    fileName: "Signed_Invoice.pdf",
    uploadedBy: "Emma John",
    timestamp: "4/10/2024, 3:05:00 PM",
    type: "Read Only",
  },
];

function ScannedDocuments() {
  return (
    <Card sx={{ mt: 3, p: 3 }}>
      <Typography variant="h6" mb={2}>
        Scanned Executed Documents
      </Typography>

      {/* Upload Section */}
      <Box
        sx={{
          border: "2px dashed #90caf9",
          p: 3,
          mb: 3,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 40, color: "#90caf9" }} />
        <Typography mt={1}>Drag and drop file here, or</Typography>
        <Button variant="outlined" sx={{ mt: 1 }}>
          Browse Files
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} elevation={0}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>File Name</b>
              </TableCell>
              <TableCell>
                <b>Uploaded By</b>
              </TableCell>
              <TableCell>
                <b>Timestamp</b>
              </TableCell>
              <TableCell>
                <b>Print Type</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scannedFiles.map((file, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    color: "info.main",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {file.fileName}
                </TableCell>
                <TableCell>{file.uploadedBy}</TableCell>
                <TableCell>{file.timestamp}</TableCell>
                <TableCell>
                  <Chip
                    label={file.type}
                    size="small"
                    color="success"
                    sx={{ fontWeight: 600 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default ScannedDocuments;
