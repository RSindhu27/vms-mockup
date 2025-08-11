import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Table, TableDeleteRow } from "../../Components/Table";
import Data from "./DataTwo.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const handleColor = (e) => {
  if (e === "Assign") return "error";
  if (e === "Assigned") return "info.main";
  if (e === "Completed") return "success.main";
  else return "warning";
};

const columns = [
  {
    field: "edit",
    headerName: "ACTION",
    width: 80,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton size="small" color="primary" component={Link} to="">
          <DriveFileRenameOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <TableDeleteRow key={`${params.row.id}_Delete`} onDelete={() => {}} />
      </Stack>
    ),
    sortable: false,
    filterable: false,
    hideable: false,
  },
  {
    field: "document",
    headerName: "DOCUMENT",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Box>
        <Typography
          variant="body2"
          sx={{ color: "info.main" }}
          noWrap
          component={Link}
          to="#"
        >
          <b>{params.row.document}</b>
        </Typography>
      </Box>
    ),
  },
  {
    field: "doc_no",
    headerName: "DOC NO",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "doc_type",
    headerName: "DOC TYPE",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "status",
    headerName: "STATUS",
    minWidth: 50,
    flex: 1,
    renderCell: (params) =>
      params.row.status === "Assign" ? (
        <Typography variant="body2" component={Link} to="" color="error">
          <b>{params.row.status}</b>
        </Typography>
      ) : (
        <Typography variant="body2" color={handleColor(params.value)}>
          <b>{params.row.status}</b>
        </Typography>
      ),
  },
  {
    field: "action",
    headerName: "ACTION",
    minWidth: 50,
    flex: 1,
  },
  {
    field: "assigned_to",
    headerName: "ASSIGNED TO",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "review_details",
    headerName: "REVIEW DETAILS",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => (
      <Box>
        {params.row.review_details ? (
          <Typography
            variant="body2"
            sx={{ color: "info.main" }}
            noWrap
            component={Link}
            to="#"
          >
            <b>{params.row.review_details}</b>
          </Typography>
        ) : (
          ""
        )}
      </Box>
    ),
  },
];

function AddedDeliverables() {
  const dataBase = Data.picklist;

  const [tableData, setTableData] = useState(dataBase);

  return (
    <>
      <Grid container mt={4} mb={2}>
        <Grid item xs={6}>
          <Typography variant="h6">
            <b>Added Deliverables</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Table
          data={tableData}
          columns={columns}
          getRowHeight={() => 80}
          height={400}
          checkboxSelection
        />
      </Grid>
    </>
  );
}

export default AddedDeliverables;
