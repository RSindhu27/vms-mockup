import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function DocumentX() {
  const [routingReview, setRoutingReview] = useState(false);
  const [peerReview, setPeerReview] = useState(false);

  const handleReview = (event) => {
    setRoutingReview(event.target.checked);
  };
  const handleApproval = (event) => {
    setPeerReview(event.target.checked);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "grey.400",
          p: 2,
          height: 500,
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        This is a Box for view Document
        <Box
          sx={{
            py: 0.5,
            px: 1,
            bgcolor: "background.paper",
            position: "absolute",
            bottom: 16,
            right: 16,
            borderRadius: 2,
          }}
        >
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                control={
                  <Checkbox checked={routingReview} onChange={handleReview} />
                }
                label="Editable"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={peerReview} onChange={handleApproval} />
                }
                label="Non-Editable"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default DocumentX;
