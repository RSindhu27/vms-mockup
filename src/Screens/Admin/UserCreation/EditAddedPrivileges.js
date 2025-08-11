import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { PopupContainer } from "../../../Components/Page";
import { Table, TableDeleteRow } from "../../../Components/Table";
import Data from "./DataTwo.json";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "edit",
    headerName: "",
    width: 80,
    renderCell: (params) => (
      <Stack direction="row">
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/admin/user-creation/edit-user"
        >
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
    field: "business_unit",
    headerName: "Business Unit",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "roles",
    headerName: "Roles",
    renderCell: (params) => (
      <Tooltip title={params.row.roles}>
        <Typography variant="body2" noWrap>
          {params.row.roles}
        </Typography>
      </Tooltip>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "user_group",
    headerName: "User Group",
    renderCell: (params) => (
      <Tooltip title={params.row.user_group}>
        <Typography variant="body2" noWrap>
          {params.row.user_group}
        </Typography>
      </Tooltip>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "dep_to_view",
    headerName: "Department To View",
    renderCell: (params) => (
      <Tooltip title={params.row.dep_to_view}>
        <Typography variant="body2" noWrap>
          {params.row.dep_to_view}
        </Typography>
      </Tooltip>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "dep_to_create",
    headerName: "Department To Create",
    renderCell: (params) => (
      <Tooltip title={params.row.dep_to_view}>
        <Typography variant="body2" noWrap>
          {params.row.dep_to_view}
        </Typography>
      </Tooltip>
    ),
    minWidth: 150,
    flex: 1,
  },
];

function EditAddedPrivileges() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="info" onClick={handleClickOpen}>
        <u>View/Edit Added Privileges</u>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ borderBottom: 1, borderColor: "divider" }}>
          View/Edit Privileges
        </DialogTitle>
        <PopupContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Table data={Data.picklist} columns={columns} />
            </Grid>
          </Grid>
        </PopupContainer>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            size="large"
            color="inherit"
          >
            Cancel
          </Button>
          <Button variant="outlined" color="info" disableElevation size="large">
            Revert Back
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            disableElevation
            size="large"
            color="success"
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditAddedPrivileges;
