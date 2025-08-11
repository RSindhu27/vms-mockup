import { TextField, Typography } from "@mui/material";
import { useState } from "react";

function ExecutionSummary() {
  const [description, setDescription] = useState("");

  return (
    <>
      <Typography variant="body2" gutterBottom>
        Execution Summary
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
        id="execution-description"
        placeholder="Enter"
        color="secondary"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
    </>
  );
}

export default ExecutionSummary;
