import { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { CompoWrapper } from "../../../../Components/Page";
import SelectUser from "./SelectUser";
import Data from "./DataTwo.json";

function VmsFrom() {
  const [prefix, setPrefix] = useState("");
  const [startValue, setStartValue] = useState("");
  const [lengthInDigits, setLengthInDigits] = useState("");
  const [review, setReview] = useState(false);
  const [approval, setApproval] = useState(false);

  const handleReview = (event) => {
    setReview(event.target.checked);
  };
  const handleApproval = (event) => {
    setApproval(event.target.checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" gutterBottom>
            Prefix
          </Typography>
          <TextField
            id="workflow_type_prefix"
            placeholder="Enter Prefix"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={prefix}
            onChange={(event) => {
              setPrefix(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" gutterBottom>
            WF-Serial Number Start Value
          </Typography>
          <TextField
            id="workflow_type_start_value"
            placeholder="WF-Serial Number Start Value"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={startValue}
            onChange={(event) => {
              setStartValue(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" gutterBottom>
            WF-Serial Number length in digits
          </Typography>
          <TextField
            id="workflow_type_length_in_digits"
            placeholder="WF-Serial Number Start Value"
            color="secondary"
            variant="outlined"
            size="small"
            fullWidth
            value={lengthInDigits}
            onChange={(event) => {
              setLengthInDigits(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body1">Workflow Lifecycle</Typography>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                control={<Checkbox checked={review} onChange={handleReview} />}
                label="Review"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={approval} onChange={handleApproval} />
                }
                label="Approval"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <b>Select Users</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CompoWrapper>
            <SelectUser
              role="Reviewer"
              order="01"
              key="reviewer"
              data={Data.reviewer}
            />
          </CompoWrapper>
        </Grid>
        <Grid item xs={12}>
          <CompoWrapper>
            <SelectUser
              role="Approver"
              order="02"
              key="approver"
              data={Data.approver}
            />
          </CompoWrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default VmsFrom;
