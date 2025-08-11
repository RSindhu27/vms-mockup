import React, { useState } from "react";
import { Grid, IconButton, Popover, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { DateField } from "@mui/x-date-pickers";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import { Box } from "@mui/system";

function FilterDate() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [startDate, setStartDate] = useState(dayjs("2014-08-18T21:11:54"));
  const [endDate, setEndDate] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChangeStartDate = (newValue) => {
    setStartDate(newValue);
  };
  const handleChangeEndDate = (newValue) => {
    setEndDate(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="end"
      >
        <Grid item>
          <Typography variant="body2">
            <b>Filter By</b>
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={handleClick}>
            <EventIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 1.5, maxWidth: 400 }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <b>Filter</b>
              </Typography>
            </Grid>
            <Grid item xs>
              <DateField
                fullWidth
                size="small"
                label="Start Date"
                inputFormat="MM/DD/YYYY"
                value={startDate}
                onChange={handleChangeStartDate}
              />
            </Grid>
            <Grid item xs>
              <DateField
                fullWidth
                size="small"
                label="End Date"
                inputFormat="MM/DD/YYYY"
                value={endDate}
                onChange={handleChangeEndDate}
              />
            </Grid>
            <Grid item>
              <IconButton color="secondary" size="medium" sx={{ border: 1 }}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  );
}

export default FilterDate;
