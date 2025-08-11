import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { AdditionalForm } from "../AdditionalForm";

function CheckSpecific({ formReset, formEdit }) {
  return (
    <>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Function Code
            <Typography color="error.main" component="span">
              *
            </Typography>
          </Typography>
          <FormControlLabel
            value={1}
            control={<Checkbox />}
            label="Option 1"
            labelPlacement="end"
          />
          <FormControlLabel
            value={2}
            control={<Checkbox />}
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

export default CheckSpecific;
