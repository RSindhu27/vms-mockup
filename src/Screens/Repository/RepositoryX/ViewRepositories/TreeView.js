import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import { Folder_File, Folder_Full } from "../../../../Components/Images";

function TreeView({ dataBase }) {
  const [folderBase, setFolderBase] = useState(dataBase);

  const handleActive = (value) => {
    const updatedData = folderBase.map((item) => {
      if (item.id === value) {
        return { ...item, open: !item.open };
      }
      return { ...item };
    });

    setFolderBase(updatedData);
  };

  const handleFile = (value) => {};

  if (dataBase.length === 0) {
    return (
      <>
        <Box sx={{ position: "relative", flex: 1, minWidth: 300 }}>
          <Box sx={{ p: 1, pl: 2 }}>
            <Typography>Repository Is Empty</Typography>
          </Box>
        </Box>
      </>
    );
  } else
    return (
      <>
        <Box sx={{ minWidth: 300 }}>
          <List>
            {folderBase.map((e) => (
              <>
                {e.type === "folder" ? (
                  <ListItem
                    key={e.id}
                    disablePadding
                    secondaryAction={
                      <>
                        <Grid container spacing={1} direction="row">
                          <Grid item>
                            <IconButton
                              color="info"
                              edge="end"
                              aria-label="delete"
                            >
                              <EditOutlinedIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton
                              color="error"
                              edge="end"
                              aria-label="delete"
                            >
                              <DeleteOutlineOutlinedIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </>
                    }
                  >
                    <ListItemButton
                      selected={e.open}
                      onClick={() => handleActive(e.id)}
                    >
                      <ListItemIcon>
                        {e.open ? (
                          <RemoveCircleOutlineIcon color="secondary" />
                        ) : (
                          <AddCircleOutlineIcon />
                        )}
                      </ListItemIcon>
                      {e.sub && e.sub.length !== 0 ? (
                        <Box
                          component="img"
                          sx={{ width: 30, mx: 1 }}
                          src={Folder_Full}
                        />
                      ) : (
                        <Box
                          component="img"
                          sx={{ width: 30, mx: 1 }}
                          src={Folder_File}
                        />
                      )}
                      <ListItemText primary={e.name} />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <ListItem
                    key={e.id}
                    disablePadding
                    secondaryAction={
                      <>
                        <Grid container spacing={1} direction="row">
                          <Grid item>
                            <IconButton
                              color="info"
                              edge="end"
                              aria-label="delete"
                            >
                              <EditOutlinedIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton
                              color="error"
                              edge="end"
                              aria-label="delete"
                            >
                              <DeleteOutlineOutlinedIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </>
                    }
                  >
                    <ListItemButton
                      selected={e.open}
                      onClick={() => handleFile(e.id)}
                    >
                      <ListItemIcon>
                        <DescriptionIcon color="info" />
                      </ListItemIcon>
                      <ListItemText primary={e.name} />
                    </ListItemButton>
                  </ListItem>
                )}
                {e.sub && e.open ? (
                  <>
                    <Box
                      sx={{
                        pl: 1,
                        ml: 3,
                        borderLeft: 1,
                        borderColor: "secondary.main",
                      }}
                    >
                      <TreeView key={e.name} dataBase={e.sub} />
                      {/* <Box
                        sx={{ position: "relative", flex: 1, minWidth: 300 }}
                      >
                        <Box sx={{ pb: 1, pl: 2 }}>
                          <Button size="small" variant="outlined">
                            Create Folder
                          </Button>
                        </Box>
                      </Box> */}
                    </Box>
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
          </List>
        </Box>
      </>
    );
}

export default TreeView;
