import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function RadioDetails() {
  const [newOption, setNewOption] = useState("");
  const [checkOptions, setCheckOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
  ]);
  const [mandatory, setMandatory] = useState("yes");
  const [translation, setTranslation] = useState("yes");

  const handleAddNew = () => {
    const newOptionsX = [...checkOptions, newOption];
    setCheckOptions(newOptionsX);
    setNewOption("");
  };

  const handleRemove = (optionToRemove) => {
    setCheckOptions((prevOptions) =>
      prevOptions.filter((option) => option !== optionToRemove)
    );
  };

  return (
    <>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Character Length
          </Typography>
          <TextField
            id="radio_add_new"
            fullWidth
            size="small"
            value={newOption}
            onChange={(event) => {
              setNewOption(event.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={handleAddNew}>
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" gutterBottom>
            Select Option
          </Typography>
          <Box sx={{ border: 1, borderColor: "grey.200", borderRadius: 1 }}>
            <List disablePadding>
              {checkOptions.map((e) => (
                <ListItem
                  key={e}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemove(e)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={e} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        {/* Mandatory */}
        <Grid item>
          <Typography variant="body1" gutterBottom>
            Mandatory
          </Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            color="secondary"
            size="small"
          >
            <Button
              sx={{
                bgcolor: mandatory === "yes" ? "secondary.main" : "grey.200",
                color:
                  mandatory === "yes"
                    ? "secondary.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setMandatory("yes")}
            >
              Yes
            </Button>
            <Button
              sx={{
                bgcolor: mandatory === "no" ? "secondary.main" : "grey.200",
                color:
                  mandatory === "no"
                    ? "secondary.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setMandatory("no")}
            >
              No
            </Button>
          </ButtonGroup>
        </Grid>
        {/* Translation */}
        <Grid item>
          <Typography variant="body1" gutterBottom>
            Translation Required
          </Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            color="secondary"
            size="small"
          >
            <Button
              sx={{
                bgcolor: translation === "yes" ? "secondary.main" : "grey.200",
                color:
                  translation === "yes"
                    ? "secondary.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setTranslation("yes")}
            >
              Yes
            </Button>
            <Button
              sx={{
                bgcolor: translation === "no" ? "secondary.main" : "grey.200",
                color:
                  translation === "no"
                    ? "secondary.contrastText"
                    : "text.secondary",
                "&:hover": {
                  color: "secondary.contrastText",
                },
              }}
              onClick={() => setTranslation("no")}
            >
              No
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default RadioDetails;
