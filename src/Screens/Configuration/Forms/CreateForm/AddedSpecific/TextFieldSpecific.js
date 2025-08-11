import { Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function TextFieldSpecific({ formReset, formEdit }) {
  const [type, setType] = useState("");

  return (
    <>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Enter Name
            <Typography color="error.main" component="span">
              *
            </Typography>
          </Typography>
          <TextField
            id="form_1"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          ></TextField>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={1}>
            <IconButton color="primary" onClick={formEdit}>
              <DriveFileRenameOutlineOutlinedIcon />
            </IconButton>
            <IconButton color="error" onClick={formReset}>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default TextFieldSpecific;
