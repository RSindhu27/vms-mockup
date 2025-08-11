import React, { useState } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChromePicker } from "react-color";
import { PageButton, TabWrapper } from "../../../Components/Page";
import UploadImage from "./UploadImage";
import "./colorPicker.css";

const businessUnits = [
  {
    value: 1,
    label: "Business Unit 1",
  },
  {
    value: 2,
    label: "Business Unit 2",
  },
  {
    value: 3,
    label: "Business Unit 3",
  },
  {
    value: 4,
    label: "Business Unit 4",
  },
  {
    value: 5,
    label: "Business Unit 5",
  },
];

function BusinessUnitTheme() {
  const [logoImageFile, setLogoImageFile] = useState("");
  const [logoIconFile, setLogoIconFile] = useState("");
  const [businessUnit, setBusinessUnit] = useState();
  const [loginImageFile, setLoginImageFile] = useState();
  const [signupImageFile, setSignupImageFile] = useState();
  const [color, setColor] = useState("#9ebf40");

  const handleChangeBusinessUnit = (event) => {
    setBusinessUnit(event.target.value);
  };

  const handleLogoImageFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLogoImageFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleLogoIconFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLogoIconFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleLoginImageFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLoginImageFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSignupImageFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSignupImageFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handlePicker = (color) => {
    setColor(color.hex);
  };

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h5" component="p">
              Business Unit Theme
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="body2" gutterBottom>
              Business Unit
            </Typography>
            <TextField
              id="business_unit"
              placeholder="Business Unit"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={businessUnit}
              onChange={handleChangeBusinessUnit}
            >
              {businessUnits.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography color="secondary.main" gutterBottom>
              Upload the company logo:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <UploadImage
                  imgFile={logoImageFile}
                  handleImageFile={handleLogoImageFile}
                  primaryText="Upload Logo Image"
                  secondaryText="Uploaded Logo"
                  size="156x48px"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <UploadImage
                  imgFile={logoIconFile}
                  handleImageFile={handleLogoIconFile}
                  primaryText="Upload Logo Icon"
                  secondaryText="Uploaded Icon"
                  size="64x64px"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <UploadImage
                  imgFile={loginImageFile}
                  handleImageFile={handleLoginImageFile}
                  primaryText="Login Image"
                  secondaryText="Uploaded Login Image"
                  size="874x700px"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <UploadImage
                  imgFile={signupImageFile}
                  handleImageFile={handleSignupImageFile}
                  primaryText="Signup Image"
                  secondaryText="Uploaded Signup Image"
                  size="874x700px"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography color="secondary.main" gutterBottom>
                  Choose theme color code:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ChromePicker
                  color={color}
                  onChangeComplete={handlePicker}
                  className="color-picker-box"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Apply</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default BusinessUnitTheme;
