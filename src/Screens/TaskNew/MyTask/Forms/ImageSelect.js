import { VisBox, VisuallyHiddenInput } from "../../../../Components/Page";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { useState } from "react";

function UploadFromDevice() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  return (
    <>
      <Grid container spacing={2} alignItems="end">
        <Grid item>
          <Typography variant="body2" gutterBottom>
            Select Image
          </Typography>
          <Button
            color="info"
            variant="outlined"
            startIcon={<InsertLinkIcon />}
            component="label"
          >
            Browse
            <VisuallyHiddenInput type="file" onChange={handleChange} />
          </Button>
        </Grid>
        <Grid item>
          {file ? (
            <>
              <Typography variant="body2" gutterBottom>
                Upload Image:
              </Typography>
              <VisBox>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{ maxWidth: 50, height: "auto" }}
                    component="img"
                    src={file}
                    alt="fileName"
                  />
                  <Typography variant="body1" color="text.secondary">
                    {fileName}
                  </Typography>{" "}
                </Stack>
              </VisBox>
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid item>
          {file && (
            <>
              <Button variant="contained" disableElevation color="secondary">
                Add Image
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

function UploadFromCamera() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  return (
    <>
      <Grid container spacing={2} alignItems="end">
        <Grid item>
          <Typography variant="body2" gutterBottom>
            Take Picture
          </Typography>
          <Button
            color="info"
            variant="outlined"
            startIcon={<InsertLinkIcon />}
            component="label"
          >
            {file ? "Retake" : "Click"}
            <VisuallyHiddenInput type="file" onChange={handleChange} />
          </Button>
        </Grid>
        <Grid item>
          {file ? (
            <>
              <Typography variant="body2" gutterBottom>
                Capture Image:
              </Typography>
              <VisBox>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{ maxWidth: 50, height: "auto" }}
                    component="img"
                    src={file}
                    alt="fileName"
                  />
                  <Typography variant="body1" color="text.secondary">
                    {fileName}
                  </Typography>{" "}
                </Stack>
              </VisBox>
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid item>
          {file && (
            <>
              <Button variant="contained" disableElevation color="secondary">
                Add Image
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export { UploadFromDevice, UploadFromCamera };
