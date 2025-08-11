import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const optionsList = [
  {
    value: 1,
    label: "Alpha Numeric",
  },
  {
    value: 2,
    label: "Number",
  },
];

function TextAreaDetails() {
  const [type, setType] = useState(1);
  const [characterLength, setCharacterLength] = useState(400);
  const [defaultValue, setDefaultValue] = useState("");
  const [mandatory, setMandatory] = useState("yes");
  const [translation, setTranslation] = useState("yes");

  return (
    <>
      <Grid container spacing={2}>
        {/* Text Field Type */}
        <Grid item xs={6}>
          <Typography variant="body2" gutterBottom>
            Select Type
          </Typography>
          <TextField
            id="text_field_type"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            select
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            {optionsList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {/* Character Length */}
        <Grid item xs={6}>
          <Typography variant="body2" gutterBottom>
            Character Length
          </Typography>
          <TextField
            id="text_field_character_length"
            fullWidth
            size="small"
            type="number"
            value={characterLength}
            onChange={(event) => {
              setCharacterLength(event.target.value);
            }}
          />
        </Grid>
        {/* Default Value */}
        <Grid item xs={6}>
          <Typography variant="body2" gutterBottom>
            Default Value
          </Typography>
          <TextField
            id="text_field_default_value"
            fullWidth
            size="small"
            placeholder="Default Value"
            value={defaultValue}
            onChange={(event) => {
              setDefaultValue(event.target.value);
            }}
          />
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

export default TextAreaDetails;
