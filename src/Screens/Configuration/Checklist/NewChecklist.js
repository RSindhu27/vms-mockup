import React, { useState } from "react";
import { PageButton, TabWrapper } from "../../../Components/Page";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Data from "./DataTwo.json";
import AddCheckpoint from "./AddCheckpoint";
import QueueIcon from "@mui/icons-material/Queue";
import { Table, TableDeleteRow } from "../../../Components/Table";
import EditCheckpoint from "./EditCheckpoint";

function NewChecklist() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 120,
      renderCell: (params) => (
        <Stack direction="row">
          <EditCheckpoint key={`${params.row.id}_Edit`} />
          <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
          <IconButton size="small" color="info">
            <QueueIcon fontSize="small" />
          </IconButton>
        </Stack>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "header",
      headerName: "Header",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="checklist_name"
              placeholder="Checklist Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="checklist_name"
              color="secondary"
              value={description}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography>
              <strong>Depended On:</strong>
            </Typography>
          </Grid>
          <Grid item>
            <AddCheckpoint key="add-checkpoint" />
          </Grid>
        </Grid>
        <Box p={1} />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography>
              <strong>Checkpoints & String/Picklist Categories:</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Table data={Data.picklist} columns={columns} />
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

export default NewChecklist;
