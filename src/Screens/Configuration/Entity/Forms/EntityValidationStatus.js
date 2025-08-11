import { Autocomplete, TextField, Typography } from "@mui/material";
import { useState } from "react";

const optionList = [
  {
    value: 1,
    label: "User Group 01",
  },
  {
    value: 2,
    label: "User Group 02",
  },
  {
    value: 3,
    label: "User Group 03",
  },
  {
    value: 4,
    label: "User Group 04",
  },
];

function EntityValidationStatus() {
  const [assessorsGroup, setAssessorsGroup] = useState([]);

  return (
    <>
      <Typography variant="body2" gutterBottom>
        Select Entity Validation Status Alert Group
        <Typography
          component="span"
          variant="body2"
          color="error.main"
          gutterBottom
        >
          *
        </Typography>
      </Typography>
      <Autocomplete
        multiple
        id="entity_validation_status"
        options={optionList}
        getOptionLabel={(option) => option.label}
        size="small"
        value={assessorsGroup}
        onChange={(event, newValue) => {
          setAssessorsGroup(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Favorites" />
        )}
      />
    </>
  );
}

export default EntityValidationStatus;
