import React from "react";
import {
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { AdditionalForm } from "../AdditionalForm";

function RadioSpecific({ formReset, formEdit }) {
  return (
    <>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Test Pass Or Fail
            <Typography color="error.main" component="span">
              *
            </Typography>
          </Typography>
          <FormControlLabel
            value={1}
            control={<Radio />}
            label="Option 1"
            labelPlacement="end"
          />
          <FormControlLabel
            value={2}
            control={<Radio />}
            label="Option 2"
            labelPlacement="end"
          />
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={0}>
            <AdditionalForm />
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

export default RadioSpecific;
