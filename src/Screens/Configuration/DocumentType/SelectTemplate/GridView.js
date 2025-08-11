import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import { Folder_File, Folder_Full } from "./../../../../Components/Images";

function GridView({ name, dataBase }) {
  const [folderBase, setFolderBase] = useState(dataBase);
  const [subFolderBase, setSubFolderBase] = useState([]);

  const handleActive = (value) => {
    const updatedData = folderBase.map((item) => {
      if (item.id === value) {
        return { ...item, open: true };
      }
      return { ...item, open: false };
    });
    const newSubBase = updatedData.find((e) => e.open);

    if (newSubBase) {
      setSubFolderBase(newSubBase);
    } else setSubFolderBase([]);

    setFolderBase(updatedData);
  };

  const handleFile = (value) => {};

  if (dataBase.length === 0) {
    return (
      <>
        <Box sx={{ position: "relative", flex: 1, minWidth: 300 }}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: 300,
            }}
          >
            <Typography>{name} Is Empty</Typography>
            {/* <Box sx={{ p: 1 }}>
              <Button size="small" variant="outlined">
                Create Folder
              </Button>
            </Box> */}
          </Box>
        </Box>
      </>
    );
  } else
    return (
      <>
        <Box sx={{ minWidth: 300 }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ px: 1, pt: 1 }}>
              <Typography variant="h6" component="p">
                {name}
              </Typography>
            </Box>
          </Stack>

          <List>
            {folderBase.map((e) =>
              e.type === "folder" ? (
                <ListItem key={e.id} disablePadding>
                  <ListItemButton
                    selected={e.open}
                    onClick={() => handleActive(e.id)}
                  >
                    <ListItemIcon>
                      {e.sub && e.sub.length !== 0 ? (
                        <Box
                          component="img"
                          sx={{ width: 30, mr: 1 }}
                          src={Folder_Full}
                        />
                      ) : (
                        <Box
                          component="img"
                          sx={{ width: 30, mr: 1 }}
                          src={Folder_File}
                        />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={e.name} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem
                  key={e.id}
                  disablePadding
                  secondaryAction={
                    <>
                      <Checkbox edge="start" disableRipple />
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
              )
            )}
          </List>
        </Box>
        {subFolderBase.sub ? (
          <>
            <Divider orientation="vertical" flexItem />
            <GridView
              key={subFolderBase.id}
              name={subFolderBase.name}
              dataBase={subFolderBase.sub}
            />
          </>
        ) : (
          <>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ position: "relative", flex: 1, minWidth: 300 }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: 300,
                }}
              >
                <Typography>Select Repository to view the folders</Typography>
              </Box>
            </Box>
          </>
        )}
      </>
    );
}

export default GridView;
