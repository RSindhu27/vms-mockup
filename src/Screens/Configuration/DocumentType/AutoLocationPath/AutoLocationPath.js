import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Data from "./DataOne.json";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GridViewIcon from "@mui/icons-material/GridView";
import GridView from "./GridView";
import TreeView from "./TreeView";
import { PageButton } from "../../../../Components/Page";

function AutoLocationPath() {
  const navigate = useNavigate();
  const [dataBase, setDataBase] = useState(Data.folders);
  const [view, setView] = useState(false);

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="p">
              Auto Location Path
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              disableElevation
              startIcon={view ? <GridViewIcon /> : <AccountTreeIcon />}
              color="secondary"
              onClick={() => setView(!view)}
            >
              {view ? "Grid View" : "Tree View"}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disableElevation color="secondary">
              Add Folder
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: 1,
          borderColor: "grey.300",
          borderRadius: 2,
          overflow: "auto",
          bgcolor: "background.paper",
        }}
      >
        <Stack direction="row" spacing={0}>
          {view ? (
            <TreeView key="base" dataBase={dataBase} />
          ) : (
            <GridView key="base" name="Base Folder" dataBase={dataBase} />
          )}
        </Stack>
      </Box>
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
          <PageButton color="primary">Apply</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default AutoLocationPath;
