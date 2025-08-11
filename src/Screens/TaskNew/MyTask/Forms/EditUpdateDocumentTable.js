import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DocumentX from "./DocumentX";

const slTypeList = [
  {
    value: 1,
    label: "ID",
  },
  {
    value: 2,
    label: "Row Number",
  },
];

const headerList = [
  {
    value: 1,
    label: "Non-executable",
  },
  {
    value: 2,
    label: "Executable without Audi Trail",
  },
];

function EditUpdateDocumentTable({ close, update }) {
  const [slType, setSlType] = useState(1);
  const [header1, setHeader1] = useState(1);
  const [header2, setHeader2] = useState(2);
  const [header3, setHeader3] = useState(2);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="body1">
            <b>Tables Number 2</b>
          </Typography>
        </Grid>
        <Grid item>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button
              onClick={update}
              variant="contained"
              disableElevation
              size="large"
              color="inherit"
            >
              Back
            </Button>
            <Button
              autoFocus
              variant="contained"
              disableElevation
              size="large"
              color="success"
            >
              Update
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TableContainer
            sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
          >
            <Table
              size="small"
              sx={{
                borderCollapse: "separate",
                tableLayout: "fixed",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Column Header</TableCell>
                  <TableCell>Column Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="1">
                  <TableCell component="th" scope="row">
                    SL. No.
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="my_task_table_type_sl"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={slType}
                      onChange={(event) => {
                        setSlType(event.target.value);
                      }}
                    >
                      {slTypeList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell component="th" scope="row">
                    Header text 01
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="my_task_table_type_header1"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={header1}
                      onChange={(event) => {
                        setHeader1(event.target.value);
                      }}
                    >
                      {headerList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell component="th" scope="row">
                    Header text 02
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="my_task_table_type_header2"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={header2}
                      onChange={(event) => {
                        setHeader2(event.target.value);
                      }}
                    >
                      {headerList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell component="th" scope="row">
                    Header text 03
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="my_task_table_type_header3"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={header2}
                      onChange={(event) => {
                        setHeader2(event.target.value);
                      }}
                    >
                      {headerList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Table 2 In Document</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <DocumentX />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default EditUpdateDocumentTable;
