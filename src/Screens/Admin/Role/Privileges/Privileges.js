import {
  Box,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./DataThree.json";

const handleColor = (e) => {
  if (e === "active") return "#0DD08B";
  if (e === "inactive") return "#FFA200";
  else return "black";
};

function Privileges() {
  const columns = [
    {
      field: "admin_module",
      headerName: "Admin Module",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "all",
      headerName: "ALL",
      renderCell: (params) => (
        <Box>
          <Checkbox />
        </Box>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "view",
      headerName: "View",
      renderCell: (params) => (
        <Box>
          <Checkbox />
        </Box>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "create",
      headerName: "Create",
      renderCell: (params) => (
        <Box>
          <Checkbox />
        </Box>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => (
        <Box>
          <Checkbox />
        </Box>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <Box>
          <Checkbox />
        </Box>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "others",
      headerName: "Others",
      renderCell: (params) => (
        <Box>
          <Checkbox />
        </Box>
      ),
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box sx={{ border: 1, borderColor: "grey.400", borderRadius: 2 }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Admin" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Configuration" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Repository" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Workflow" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Template" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Document" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Reports" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Table
            data={Data.picklist}
            columns={columns}
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Privileges;
