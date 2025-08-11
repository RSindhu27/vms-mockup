import {
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as TableX,
  TextField,
  Typography,
} from "@mui/material";
import { CompoWrapper } from "../../../../Components/Page";
import { TableDeleteRow } from "../../../../Components/Table";
import { useState } from "react";

const defaultDate = [
  {
    id: 1,
    section: "section_1",
    sequence: "concurrent",
  },
  {
    id: 2,
    section: "section_3",
    sequence: "parallel",
  },
];

function BusinessRuleSection() {
  const [data, setData] = useState(defaultDate);

  const handleAddSection = () => {
    const newData = [
      ...data,
      { id: 1, section: "section_1", sequence: "concurrent" },
    ];
    setData(newData);
  };

  return (
    <>
      <CompoWrapper>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Typography variant="h6">
              <b>Add Business Rule Sections:</b>
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                disableElevation
                onClick={handleAddSection}
              >
                Add Section
              </Button>
              <Button variant="outlined" color="info">
                Reset
              </Button>
              <Button variant="outlined" color="primary">
                Save
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <TableContainer
              sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
            >
              <TableX
                size="small"
                sx={{
                  borderCollapse: "separate",
                  tableLayout: "fixed",
                  minWidth: 740,
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell width={40}></TableCell>
                    <TableCell width={40}>Action</TableCell>
                    <TableCell>Section</TableCell>
                    <TableCell>Sequence</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((e) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Checkbox />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TableDeleteRow />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={e.section}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value="section_1">
                            Section 1
                          </MenuItem>
                          <MenuItem key={2} value="section_2">
                            Section 2
                          </MenuItem>
                          <MenuItem key={3} value="section_3">
                            Section 3
                          </MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          color="secondary"
                          select
                          defaultValue={e.sequence}
                          size="small"
                          fullWidth
                        >
                          <MenuItem key={1} value="parallel">
                            Parallel
                          </MenuItem>
                          <MenuItem key={2} value="concurrent">
                            Concurrent
                          </MenuItem>
                          <MenuItem key={3} value="simultaneous">
                            Simultaneous
                          </MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableX>
            </TableContainer>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default BusinessRuleSection;
