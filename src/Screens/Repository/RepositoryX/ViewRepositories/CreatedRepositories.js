import React, { useState } from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Data from "./DataOne.json";
import GridView from "./GridView";
import TreeView from "./TreeView";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GridViewIcon from "@mui/icons-material/GridView";
import FileView from "./FileView";

function CreatedRepositories() {
  const [dataBase, setDataBase] = useState(Data.folders);
  const [view, setView] = useState(false);

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Typography variant="h6" component="p">
              Repositories
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
        </Grid>
      </Box>
      <Box
        sx={{
          border: 1,
          borderColor: "grey.300",
          borderRadius: 2,
          overflow: "auto",
          bgcolor: "background.paper",
          position: "relative",
        }}
      >
        <Stack direction="row" spacing={0}>
          {view ? (
            <>
              <Box>
                <TreeView key="base" dataBase={dataBase} />
              </Box>
              <Divider orientation="vertical" flexItem />
              <FileView />
            </>
          ) : (
            <GridView key="base" name="Base Folder" dataBase={dataBase} />
          )}
        </Stack>
      </Box>
    </>
  );
}

export default CreatedRepositories;
