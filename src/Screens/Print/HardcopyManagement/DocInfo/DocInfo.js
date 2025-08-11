import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";

function DocInfo({ fileName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? fileName : undefined;

  return (
    <>
      <Tooltip title="Document Info">
        <IconButton
          size="small"
          color="info"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ maxWidth: 480 }}>
          <Box sx={{ p: 1, boxSizing: "border-box" }}>
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs>
                <Typography>{fileName}</Typography>
              </Grid>
              <Grid item>
                <IconButton size="small" onClick={handleClose}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box sx={{ p: 1, boxSizing: "border-box" }}>
            <Grid
              container
              spacing={0}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">HARDCOPY NO:</Typography>
                <Typography variant="body1">
                  <b>03</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">REPRINT NO:</Typography>
                  <Typography variant="body1">
                    <b>05</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">PRINTED BY:</Typography>
                <Typography variant="body1">
                  <b>SHIVAPRAKASH H</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">
                    ORIGINAL PRINT HARDCOPY NO:
                  </Typography>
                  <Typography variant="body1">
                    <b>03</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">PRINTER USED:</Typography>
                <Typography variant="body1">
                  <b>NAME</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">ISSUE NO:</Typography>
                  <Typography variant="body1">
                    <b>UPDATE LATER</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">
                  DESTRUCTION RECORDED DATE:
                </Typography>
                <Typography variant="body1">
                  <b>24-FEB-2023</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">PRINT REASON:</Typography>
                  <Typography variant="body1">
                    <b>REASON TEXTS</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">
                  DESTRUCTION RECORDED BY:
                </Typography>
                <Typography variant="body1">
                  <b>LIKITH RAJ</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">
                    DESTRUCTION PERFORMED BY:
                  </Typography>
                  <Typography variant="body1">
                    <b>SHIVAPRAKSH H</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">DESTRUCTION DATE:</Typography>
                <Typography variant="body1">
                  <b>23-FEB-2023</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">ARCHIVED BY:</Typography>
                  <Typography variant="body1">
                    <b>SHIVAPRAKSH H</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="caption">ARCHIVED DATE:</Typography>
                <Typography variant="body1">
                  <b>25-FEB-2023</b>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "right",
                      lg: "right",
                    },
                  }}
                >
                  <Typography variant="caption">ARCHIVED LOCATION:</Typography>
                  <Typography variant="body1" color="secondary.main" noWrap>
                    arcolab/docs/archived/arcd0x001
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Popover>
    </>
  );
}

export default DocInfo;
