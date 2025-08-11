import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Table, TableDeleteRow } from "../../../Components/Table";
import { CompoWrapper, PageIconPrimaryButton } from "../../../Components/Page";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AddQuestion from "./AddQuestion";
import Data from "./DataThree.json";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 90,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton size="small" color="primary">
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  { field: "id", headerName: "Order", width: 90 },
  {
    field: "prefix",
    headerName: "Prefix",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "question",
    headerName: "Question",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "answer",
    headerName: "If Answer Is",
    renderCell: (params) => (
      <Box>
        <Stack direction="column">
          {params.row.answer.map((e) => (
            <Box
              sx={{
                height: 40,
                p: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="info.main">
                {e}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    ),
    minWidth: 100,
    flex: 1,
  },
  {
    field: "next_setup",
    headerName: "Next Setup",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1 }}>
        <Grid container spacing={1}>
          {params.row.answer.map((e, idx) => (
            <Grid item xs={12}>
              <TextField
                id={params.row.question.replace(/\s/g, "") + e + idx}
                color="secondary"
                select
                defaultValue={1}
                size="small"
                fullWidth
              >
                <MenuItem key={1} value={1}>
                  Decision Required
                </MenuItem>
                <MenuItem key={2} value={2}>
                  End Action
                </MenuItem>
                <MenuItem key={3} value={3}>
                  Question 3
                </MenuItem>
                <MenuItem key={4} value={4}>
                  Question 4
                </MenuItem>
              </TextField>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
    minWidth: 200,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1 }}>
        <Grid container spacing={1}>
          {params.row.answer.map((e, idx) => (
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    id={params.row.question.replace(/\s/g, "") + e + idx}
                    color="secondary"
                    size="small"
                    fullWidth
                    placeholder="Enter Decision"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id={params.row.question.replace(/\s/g, "") + e + idx}
                    color="secondary"
                    select
                    defaultValue={1}
                    size="small"
                    fullWidth
                  >
                    <MenuItem key={1} value={1}>
                      End Action
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      Question 3
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                      Question 4
                    </MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
    minWidth: 300,
    flex: 1,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    renderCell: (params) => (
      <Box sx={{ p: 1 }}>
        <ToggleButtonGroup
          color="secondary"
          value={params.row.remarks}
          onChange={() => {}}
          exclusive
          aria-label="Platform"
          size="small"
        >
          <ToggleButton value="mandatory">Mandatory</ToggleButton>
          <ToggleButton value="optional">Optional</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    ),
    minWidth: 200,
    flex: 1,
  },
  {
    field: "update",
    headerName: "Update",
    renderCell: (params) => (
      <Box sx={{ p: 1 }}>
        <Button variant="contained" color="secondary" disableElevation>
          Update
        </Button>
      </Box>
    ),
    minWidth: 120,
    flex: 1,
  },
];

function SectionDetails() {
  const [checked, setChecked] = useState(false);
  const [decision, setDecision] = useState("");

  const handleExpand = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <CompoWrapper>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs>
                <Typography variant="body1">
                  Section 1: <b>Define Action</b>
                </Typography>
              </Grid>
              <Grid item>
                <AddQuestion />
              </Grid>
              <Grid item>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">
                    <b>Action:</b>
                  </Typography>
                  <Button color="info" size="small">
                    Edit
                  </Button>
                  <Typography variant="body2">/</Typography>
                  <Button color="error" size="small">
                    Delete
                  </Button>
                </Stack>
              </Grid>
              <Grid item>
                <PageIconPrimaryButton size="small" onClick={handleExpand}>
                  {checked ? <RemoveIcon /> : <AddIcon />}
                </PageIconPrimaryButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={checked}>
              <Box p={1} />
              <Table
                data={Data.picklist}
                columns={columns}
                getRowHeight={() => "auto"}
                checkboxSelection
                disableRowSelectionOnClick
              />
              <Box p={1} />
              <Typography variant="body2" gutterBottom>
                Enter Prefix
              </Typography>
              <TextField
                id="decision_final"
                placeholder="Prefix"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={decision}
                onChange={(event) => {
                  setDecision(event.target.value);
                }}
              />
              <Box p={1} />
              <Grid container spacing={1} justifyContent="end">
                <Grid item>
                  <Button color="error" variant="contained" disableElevation>
                    Delete Field
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="error" variant="outlined" disableElevation>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="info" variant="outlined" disableElevation>
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="secondary" variant="outlined" disableElevation>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </CompoWrapper>
    </>
  );
}

export default SectionDetails;
