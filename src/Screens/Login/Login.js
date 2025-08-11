import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PageGradientButton } from "../../Components/Page";

function Configuration() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Login To DMS</b>
          </Typography>
          <Typography variant="body2">
            Please Enter Your Login Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="user_name"
            label="Enter Your User Name"
            variant="outlined"
            size="large"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="user_password"
            label="Enter Your Password"
            variant="outlined"
            size="large"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <PageGradientButton
            variant="contained"
            disableElevation
            component={Link}
            size="medium"
            to="/app/"
            fullWidth
          >
            Login
          </PageGradientButton>
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/forgot-password"
            variant="text"
            color="primary"
            size="small"
          >
            Forgot Password
          </Button>
          <Button
            variant="text"
            color="secondary"
            size="small"
            fullWidth
            sx={{ fontSize: 18 }}
          >
            SSO
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Configuration;
