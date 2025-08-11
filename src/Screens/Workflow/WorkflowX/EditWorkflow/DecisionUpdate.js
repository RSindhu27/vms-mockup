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
import Checklist from "./Checklist";

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
    field: "checklist",
    headerName: "Checklist",
    renderCell: (params) => <Checklist />,
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
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
    field: "sla_days",
    headerName: "SLA Days",
    minWidth: 150,
    flex: 1,
  },
];

function DecisionUpdate({ role, sequence, order, status, checklist }) {
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
          borderColor: status === "Done" ? "secondary.main" : "grey.300",
          opacity: status === "Done" ? 1 : 0.5,
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
            <Typography variant="body1">
              Role:{" "}
              <Typography
                component="span"
                sx={{
                  color: status === "Done" ? "info.main" : "text.secondary",
                }}
              >
                <b>{role}</b>
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Sequence:{" "}
              <Typography
                component="span"
                sx={{
                  color: status === "Done" ? "info.main" : "text.secondary",
                }}
              >
                <b>{sequence}</b>
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Order:{" "}
              <Typography
                component="span"
                sx={{
                  color: status === "Done" ? "info.main" : "text.secondary",
                }}
              >
                <b>{order}</b>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Status:{" "}
              <Typography
                component="span"
                sx={{
                  color: status === "Done" ? "success.main" : "text.secondary",
                }}
              >
                <b>{status}</b>
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => handleExpand()}
              sx={{
                bgcolor: status === "Done" ? "secondary.main" : "grey.400",
                color: "secondary.contrastText",
                "&:hover": {
                  bgcolor: status === "Done" ? "secondary.dark" : "grey.600",
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
            columnVisibilityModel={{
              role: false,
              order: false,
              email: false,
            }}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Collapse>
      </Box>
    </>
  );
}

export default DecisionUpdate;
