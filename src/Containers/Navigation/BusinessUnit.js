import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box, InputAdornment } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const businessUnitList = [
  {
    value: 1,
    label: "Business 1",
  },
  {
    value: 2,
    label: "Business 2",
  },
  {
    value: 3,
    label: "Business 3",
  },
  {
    value: 4,
    label: "Business 4",
  },
];

function BusinessUnit() {
  const [businessUnit, setBusinessUnit] = useState(1);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          select
          value={businessUnit}
          onChange={(event) => {
            setBusinessUnit(event.target.value);
          }}
          size="small"
          sx={{ maxWidth: 180 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LanguageIcon color="info" />
              </InputAdornment>
            ),
            inputProps: {
              outline: false,
            },
          }}
        >
          {businessUnitList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
}

export default BusinessUnit;
