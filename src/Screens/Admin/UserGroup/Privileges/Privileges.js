import {
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Switch,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PrivilegesTable from "./PrivilegesTable";
import { useState } from "react";

function Privileges() {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box sx={{ border: 1, borderColor: "grey.400", borderRadius: 2 }}>
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{ bgcolor: "transparent" }}
                >
                  Nested List Items
                </ListSubheader>
              }
            >
              <ListItem disablePadding>
                <ListItemButton selected>
                  <ListItemText primary="Future Case Structure" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Doc Type 2" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Doc Type 3" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="search-user"
                placeholder="Search User"
                color="secondary"
                variant="outlined"
                size="small"
                fullWidth
                value={search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={checked} onChange={handleChange} />}
                  label="Show Select Only"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <PrivilegesTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Privileges;
