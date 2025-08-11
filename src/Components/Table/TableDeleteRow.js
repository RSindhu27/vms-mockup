import React, { useState } from "react";
import { Button, IconButton, Popover, Stack, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function TableDeleteRow({ onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete();
    setTimeout(function () {
      setAnchorEl(null);
    }, 100);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton size="small" color="error" onClick={handleClick}>
        <DeleteOutlineOutlinedIcon fontSize="small" />
      </IconButton>
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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          py={1}
          px={2}
          spacing={2}
        >
          <Typography>Confirm Delete </Typography>
          <Button
            onClick={handleDelete}
            variant="contained"
            disableElevation
            size="small"
            color="error"
          >
            Delete
          </Button>
        </Stack>
      </Popover>
    </>
  );
}

export default TableDeleteRow;
