import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PageGradientButton } from "../../Components/Page";

function ForgotPassword() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Forgot Password</b>
          </Typography>
          <Typography variant="body2">
            Don't worry. We will resolve this ASAP
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="user_email"
            label="Enter Your Email Address"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <PageGradientButton
            variant="contained"
            disableElevation
            component={Link}
            size="large"
            to="#"
            fullWidth
          >
            Submit
          </PageGradientButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="secondary">
            We send you e-mail
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/"
            variant="text"
            color="primary"
            size="small"
            fullWidth
          >
            Back To Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ForgotPassword;
