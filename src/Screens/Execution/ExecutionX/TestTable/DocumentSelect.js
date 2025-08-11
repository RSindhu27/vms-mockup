import { VisBox, VisuallyHiddenInput } from "../../../../Components/Page";
import {
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { TableDeleteRow } from "../../../../Components/Table";
import { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";

const fileType = [
  {
    value: 1,
    label: "File 1",
  },
  {
    value: 2,
    label: "File 2",
  },
  {
    value: 3,
    label: "File 3",
  },
];

function UploadFromDevice() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  const handleDelete = () => {
    setFile(null);
    setFileName(null);
  };

  return (
    <>
      <Grid container spacing={2} alignItems="end">
        <Grid item>
          <Typography variant="body2" gutterBottom>
            Select Document
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
                Selected Document:
              </Typography>
              <VisBox>
                <Stack direction="row" spacing={2} alignItems="center">
                  <DescriptionIcon fontSize="large" color="info" />
                  <Typography variant="body1" color="text.secondary">
                    {fileName}
                  </Typography>{" "}
                  <TableDeleteRow onDelete={() => handleDelete()} />
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

function UploadFromApplication() {
  const [selectFile, setSelectFile] = useState(1);

  return (
    <>
      <Grid container spacing={2} alignItems="end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Select file
            <Typography
              component="span"
              variant="body2"
              color="error.main"
              gutterBottom
            >
              *
            </Typography>
          </Typography>
          <TextField
            id="attach_select_file"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={selectFile}
            onChange={(event) => {
              setSelectFile(event.target.value);
            }}
          >
            {fileType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item>
          <Button variant="contained" disableElevation color="secondary">
            Add Image
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export { UploadFromDevice, UploadFromApplication };
