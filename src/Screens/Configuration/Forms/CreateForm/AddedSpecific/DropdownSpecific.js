import React, { useState } from "react";
import {
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { AdditionalForm } from "../AdditionalForm";

const optionsList = [
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
  {
    value: 3,
    label: "Option 3",
  },
];

function DropdownSpecific({ formReset, formEdit }) {
  const [type, setType] = useState(1);

  return (
    <>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Select Field Type
            <Typography color="error.main" component="span">
              *
            </Typography>
          </Typography>
          <TextField
            id="form_type"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            {optionsList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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

export default DropdownSpecific;
