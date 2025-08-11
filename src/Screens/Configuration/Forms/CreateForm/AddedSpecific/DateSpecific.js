import React, { useState } from "react";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function DateSpecific({ formReset, formEdit }) {
  const [startDate, setStartDate] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChangeStartDate = (newValue) => {
    setStartDate(newValue);
  };

  return (
    <>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Enter Date
            <Typography color="error.main" component="span">
              *
            </Typography>
          </Typography>
          <DateField
            fullWidth
            id="form_1"
            size="small"
            inputFormat="MM/DD/YYYY"
            value={startDate}
            onChange={handleChangeStartDate}
          />
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

export default DateSpecific;
