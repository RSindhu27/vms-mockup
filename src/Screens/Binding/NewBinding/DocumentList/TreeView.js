import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Folder_File, Folder_Full } from "../../../../Components/Images";

function TreeView({
  dataBase,
  showEntityCheckbox = false,
  selectedEntities = [],
  onEntitySelect = () => {},
}) {
  const [folderBase, setFolderBase] = useState(dataBase);

  const handleActive = (value) => {
    const updatedData = folderBase.map((item) =>
      item.id === value ? { ...item, open: !item.open } : { ...item }
    );
    setFolderBase(updatedData);
  };

  const handleFile = (id) => {
    onEntitySelect(id);
  };

  if (dataBase.length === 0) {
    return (
      <Box sx={{ position: "relative", flex: 1, minWidth: 250 }}>
        <Box sx={{ p: 1, pl: 1 }}>
          <Typography>Repository Is Empty</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minWidth: 250 }}>
      <List>
        {folderBase.map((e) => (
          <React.Fragment key={e.id}>
            {e.type === "folder" ? (
              <ListItem disablePadding>
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
                  <Box
                    component="img"
                    sx={{ width: 25, mx: 1 }}
                    src={
                      e.sub && e.sub.length !== 0 ? Folder_Full : Folder_File
                    }
                  />
                  <ListItemText primary={e.name} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                {showEntityCheckbox && e.name === "Entity 01" && (
                  <Checkbox
                    size="small"
                    checked={selectedEntities.includes(e.id)}
                    onChange={() => handleFile(e.id)}
                  />
                )}
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
            {e.sub && e.open && (
              <Box
                sx={{
                  pl: 1,
                  ml: 2,
                  borderLeft: 1,
                  borderColor: "secondary.main",
                }}
              >
                <TreeView
                  dataBase={e.sub}
                  showEntityCheckbox={showEntityCheckbox}
                  selectedEntities={selectedEntities}
                  onEntitySelect={onEntitySelect}
                />
              </Box>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default TreeView;
