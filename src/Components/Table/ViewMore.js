import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";

function ViewMore({ primaryText, dataList }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Typography variant="body2" color="info.main" onClick={handleClick}>
        {primaryText ? primaryText : "View All"}
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        {dataList ? (
          <List dense sx={{ maxHeight: 200 }}>
            {dataList.length === 0 && (
              <ListItem>
                <ListItemText primary="Empty" />
              </ListItem>
            )}
            {dataList.map((e) => (
              <ListItem>
                <ListItemText primary={e} />
              </ListItem>
            ))}
          </List>
        ) : (
          "Invalid"
        )}
      </Popover>
    </>
  );
}

export default ViewMore;
