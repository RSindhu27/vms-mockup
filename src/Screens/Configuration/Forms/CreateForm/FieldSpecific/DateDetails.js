import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

function DateDetails() {
  const [mandatory, setMandatory] = useState("yes");
  const [translation, setTranslation] = useState("yes");

  return (
    <Grid container spacing={2} alignItems="flex-end">
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
  );
}

export default DateDetails;
