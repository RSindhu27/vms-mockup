import { Box, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo_Arcolab } from "../../Components/Images";
import {
  LandingWrapper,
  LandingInner,
  LoginBox,
  LandingFooter,
} from "../../Components/Landing";

function Landing() {
  return (
    <>
      <LandingWrapper>
        <LandingInner>
          <LoginBox elevation={10}>
            <Outlet />
          </LoginBox>
        </LandingInner>
        <LandingFooter>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body2" color="primary">
              Powered By
            </Typography>
            <Box
              component="img"
              src={Logo_Arcolab}
              alt="arcolab"
              sx={{
                display: "block",
                width: 130,
                height: "auto",
              }}
            />
          </Stack>
        </LandingFooter>
      </LandingWrapper>
    </>
  );
}

export default Landing;
