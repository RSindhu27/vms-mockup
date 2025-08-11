import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Button,
  Stack,
  Checkbox,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Card,
  Drawer,
  Divider,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DocumentData from "./DocumentData.json";
import ScannedDocuments from "./ScannedDocuments";

const systemDataFields = [
  "Product Name",
  "Batch Number",
  "Field 5",
  "Market",
  "LOT-36",
  "Field 6",
];

const printLogData = [
  {
    id: "DOC0009359",
    type: "Print",
    printedBy: "John Smith",
    printedTo: "Alex Johnson",
    timestamp: "4/10/2024, 3:05:00 PM",
    details: "Printed all docs in package",
  },
  {
    id: "DOC0009359",
    type: "Reprinted",
    printedBy: "John Smith",
    printedTo: "Emma John",
    timestamp: "4/10/2024, 3:05:00 PM",
    details: "Reprinted cover page",
  },
  {
    id: "DOC0009359",
    type: "Print",
    printedBy: "Emma John",
    printedTo: "Alex Johnson",
    timestamp: "4/10/2024, 3:05:00 PM",
    details: "Printed document DOC000027",
  },
  {
    id: "DOC0009359",
    type: "Reprinted",
    printedBy: "John Smith",
    printedTo: "Emma Smith",
    timestamp: "4/10/2024, 3:05:00 PM",
    details: "Reprinted all documents",
  },
];

function ViewPrintEvents() {
  const [tab, setTab] = useState(0);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState([]);

  const documents = DocumentData.documents;
  const allChecked = selectedDocs.length === documents.length;

  const toggleDocSelection = (id) => {
    setSelectedDocs((prev) =>
      prev.includes(id) ? prev.filter((docId) => docId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedDocs(allChecked ? [] : documents.map((doc) => doc.id));
  };

  const openPreview = (doc) => {
    setPreviewDoc(doc);
    setPreviewOpen(true);
  };

  return (
    <Box p={3} border={1} borderColor="divider" borderRadius={2} boxShadow={2}>
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Print Viewer" />
        <Tab label="Print Log" />
        <Tab label="Scanned Documents" />
      </Tabs>

      {tab === 0 && (
        <>
          {/* Event Info */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e9f3fb", borderRadius: 2 }}>
            <Typography>
              <b>Event ID:</b> PE0000001
            </Typography>
            <Typography>
              <b>Created Date/Time:</b> 2025-04-06 12:00:00 AM
            </Typography>
            <Typography>
              <b>Document Type:</b> Quality Control Report
            </Typography>
            <Typography>
              <b>Status:</b>{" "}
              <Chip
                label="Pending"
                size="small"
                sx={{ bgcolor: "orange", color: "white", ml: 1 }}
              />
            </Typography>
            <Typography>
              <b>Print Type:</b> Reprint
            </Typography>
          </Card>

          {/* System Fields */}
          <Card sx={{ mt: 4, p: 2 }}>
            <Typography fontWeight={600} mb={2}>
              System Data Fields
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {Array.from({
                    length: Math.ceil(systemDataFields.length / 3),
                  }).map((_, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {systemDataFields
                        .slice(rowIndex * 3, rowIndex * 3 + 3)
                        .map((field, i) => (
                          <TableCell key={i}>
                            <Checkbox
                              size="small"
                              checked={field === "Product Name"}
                            />
                            {field}
                          </TableCell>
                        ))}
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="right">
                      <Checkbox size="small" checked sx={{ color: "green" }} />
                      <Typography variant="caption">Unique key</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>

          {/* Package Documents Table */}
          <Card sx={{ mt: 4, p: 2 }}>
            <Typography fontWeight={600} mb={2}>
              Package Documents
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        size="small"
                        checked={allChecked}
                        onChange={toggleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Main</TableCell>
                    <TableCell>Document ID</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Version</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documents.map((doc, index) => (
                    <TableRow key={index} hover>
                      <TableCell padding="checkbox">
                        <Checkbox
                          size="small"
                          checked={selectedDocs.includes(doc.id)}
                          onChange={() => toggleDocSelection(doc.id)}
                        />
                      </TableCell>
                      <TableCell>
                        {doc.main && (
                          <Chip
                            label="Main"
                            color="info"
                            size="small"
                            sx={{ fontSize: 10 }}
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          color="info.main"
                        >
                          {doc.id}
                        </Typography>
                      </TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>{doc.title}</TableCell>
                      <TableCell>{doc.version}</TableCell>
                      <TableCell>
                        <Chip
                          label={doc.status}
                          size="small"
                          color={
                            doc.status === "Reprinted" ? "info" : "success"
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Button
                            startIcon={<VisibilityIcon />}
                            variant="text"
                            size="small"
                            color="info"
                            onClick={() => openPreview(doc)}
                          >
                            Preview
                          </Button>
                          <Button
                            startIcon={<PrintIcon />}
                            variant="text"
                            size="small"
                            color="success"
                          >
                            Print
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Stack direction="row" spacing={2} mt={3} justifyContent="flex-end">
              <Button variant="outlined">Print Cover Page</Button>
              <Button variant="contained" color="primary">
                Print
              </Button>
              <Button variant="contained" color="info">
                Re-Print
              </Button>
            </Stack>
          </Card>

          <Drawer
            anchor="right"
            open={previewOpen}
            onClose={() => setPreviewOpen(false)}
          >
            <Box p={3} width={400}>
              <Typography variant="h6" gutterBottom>
                Document Preview
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {previewDoc ? (
                <Box>
                  <Typography gutterBottom>
                    <strong>Document ID:</strong> {previewDoc.id}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Type:</strong> {previewDoc.type}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Title:</strong> {previewDoc.title}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Version:</strong> {previewDoc.version}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Status:</strong> {previewDoc.status}
                  </Typography>
                </Box>
              ) : (
                <Typography>No document selected.</Typography>
              )}
            </Box>
          </Drawer>
        </>
      )}

      {tab === 1 && (
        <Card sx={{ p: 2, mt: 3 }}>
          <TableContainer component={Paper} elevation={0}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Document ID</b>
                  </TableCell>
                  <TableCell>
                    <b>Print Type</b>
                  </TableCell>
                  <TableCell>
                    <b>Printed By</b>
                  </TableCell>
                  <TableCell>
                    <b>Printed Issued To</b>
                  </TableCell>
                  <TableCell>
                    <b>Timestamp</b>
                  </TableCell>
                  <TableCell>
                    <b>Details</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {printLogData.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "info.main", fontWeight: 500 }}>
                      {log.id}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={log.type}
                        color={log.type === "Print" ? "success" : "info"}
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </TableCell>
                    <TableCell>{log.printedBy}</TableCell>
                    <TableCell>{log.printedTo}</TableCell>
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>{log.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}

      {tab === 2 && <ScannedDocuments />}
    </Box>
  );
}

export default ViewPrintEvents;
