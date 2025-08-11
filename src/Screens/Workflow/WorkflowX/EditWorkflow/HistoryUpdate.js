import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Data from "./DataThree.json";
import { Table, TableDeleteRow } from "../../../../Components/Table";
import Collapse from "@mui/material/Collapse";

const handleColor = (e) => {
  if (e === "Reviewed") return "success.main";
  if (e === "Pending") return "external.main";
  if (e === "Rejected") return "error.main";
  else return null;
};

const usernameList = Data.user_list;

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 50,
    renderCell: (params) => (
      <Stack direction="row">
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "decision",
    headerName: "Decision",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        sx={{
          color: handleColor(params.row.decision),
        }}
      >
        <b>{params.row.decision}</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "decision_date",
    headerName: "Decision Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "reason",
    headerName: "Reason",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        sx={{
          color: "info.main",
        }}
      >
        <b>{params.row.role}</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "order",
    headerName: "Order",
    renderCell: (params) => (
      <Typography
        variant="body2"
        noWrap
        sx={{
          color: "info.main",
        }}
      >
        <b>{params.row.order}</b>
      </Typography>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 150,
    flex: 1,
  },
];

function HistoryUpdate({
  process,
  sequence,
  state,
  status,
  checklist,
  reason,
}) {
  const [tableData, setTableData] = useState(usernameList);
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <Box
        sx={{
          border: 2,
          borderColor:
            status === "Rejected" || status === "Cancelled"
              ? "error.main"
              : "secondary.main",
          p: 1,
          borderRadius: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body2">Process: </Typography>
            <Typography component="span">
              <b>{process}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Sequence: </Typography>
            <Typography
              component="span"
              sx={{
                color: "info.main",
              }}
            >
              <b>{sequence}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Checklist: </Typography>
            <Typography
              component="span"
              sx={{
                color: "info.main",
              }}
            >
              <b>{checklist}</b>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2">State: </Typography>
            <Typography
              component="span"
              sx={{
                color: "info.main",
              }}
            >
              <b>{state}</b>
            </Typography>
          </Grid>
          <Grid item>
            {reason && (
              <>
                <Typography variant="body2">Reason: </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: status === "Done" ? "success.main" : "error.main",
                  }}
                >
                  <b>{reason}</b>
                </Typography>
              </>
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2">Status: </Typography>
            <Typography
              component="span"
              sx={{
                color: status === "Done" ? "success.main" : "error.main",
              }}
            >
              <b>{status}</b>
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => handleExpand()}
              sx={{
                bgcolor: status === "Done" ? "secondary.main" : "error.main",
                color: "secondary.contrastText",
                "&:hover": {
                  bgcolor: status === "Done" ? "secondary.dark" : "error.dark",
                },
              }}
            >
              {expand ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={expand}>
          <Divider sx={{ my: 2 }} />
          <Table
            data={tableData}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Collapse>
      </Box>
    </>
  );
}

export default HistoryUpdate;
