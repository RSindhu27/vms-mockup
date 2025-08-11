import { Avatar, Box, Grid, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { Profile_Icon } from "../../Components/Images";

function UserProfile() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const media_md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Avatar
              alt="Bruce Wayne"
              src={Profile_Icon}
              sx={{ border: 2, borderColor: "divider" }}
            />
          </Grid>
          <Grid item>
            {media_md ? (
              <>
                <Typography variant="body1">
                  Bruce Wayne{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{ verticalAlign: "middle" }}
                  />
                </Typography>
                <Typography variant="body2" color="primary.main">
                  bruceWayne@batman.com
                </Typography>
              </>
            ) : (
              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{ verticalAlign: "middle" }}
              />
            )}
          </Grid>
        </Grid>
      </Box>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ mt: 1 }}
      >
        <MenuItem onClick={handleClose}>Your Profile</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default UserProfile;
