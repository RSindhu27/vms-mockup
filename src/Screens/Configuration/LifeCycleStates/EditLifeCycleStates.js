import React, { useState } from "react";
import {
  PageButton,
  TabWrapper,
  VisBox,
  VisuallyHiddenInput,
} from "../../../Components/Page";
import {
  Box,
  Button,
  Grid,
  Radio,
  Stack,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { TableDeleteRow } from "../../../Components/Table";

function EditLifeCycleStates() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [locked, setLocked] = useState("yes");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
    console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0].name);
  }

  const handleLocked = (event) => {
    setLocked(event.target.value);
  };

  const handleDelete = () => {
    setFile(null);
    setFileName(null);
  };

  return (
    <>
      <Box mb={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} color="secondary">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p">
              Edit Life Cycle States
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="life_cycle_state_name"
              placeholder="Enter Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Description
            </Typography>
            <TextField
              id="life_cycle_state_description"
              color="secondary"
              value={description}
              fullWidth
              multiline
              rows={4}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Select Icon
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
                      Selected Icon
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Box>
                        <Box
                          sx={{ maxWidth: 80, height: "auto" }}
                          component="img"
                          src={file}
                          alt="fileName"
                        />
                      </Box>
                      <Box>
                        <VisBox>
                          <Typography variant="body1" color="text.secondary">
                            {fileName}
                          </Typography>{" "}
                          <TableDeleteRow onDelete={() => handleDelete()} />
                        </VisBox>
                      </Box>
                    </Stack>
                  </>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box>
                    <Typography variant="body1">
                      <b>Locked State:</b>
                    </Typography>
                  </Box>
                  <Box>
                    <RadioGroup
                      row
                      name="life_cycle_state_Locked"
                      value={locked}
                      onChange={handleLocked}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Stack>
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
          <PageButton color="secondary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default EditLifeCycleStates;
