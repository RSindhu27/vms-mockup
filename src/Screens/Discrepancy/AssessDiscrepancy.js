import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ViewDiscrepancyDetails from "./ViewDiscrepancyDetails";
import { CustomTab, CustomTabPanel, CustomTabs } from "../../Components/Tabs";
import { useState } from "react";

function AssessDiscrepancy() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      navigate("/app/task-new/my-task/view-task");
    }
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
          <Grid item xs>
            <Typography variant="h5" component="p">
              My Task/ <b>TSK0001-Discrepancy Assessment-CSV</b>/<b>DIS0001</b>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box width={100 + "%"}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <CustomTabs value={value} onChange={handleChange}>
              <CustomTab label="Task Details" />
              <CustomTab label="Discrepancies" />
            </CustomTabs>
          </Grid>

          {/* Show Labels only when Discrepancies Tab is selected */}
          {/* {value === 1 && (
            <Grid item>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                ml={20}
                sx={{
                  bgcolor: "white",
                  border: "1px solid grey.700",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "success.main",
                    px: 1.5,
                    py: 1.5,
                    borderRadius: 2,
                    width: 5,
                  }}
                ></Box>
                <Typography variant="body2">Editable</Typography>

                <Box
                  sx={{
                    bgcolor: "grey.400",
                    px: 1.5,
                    py: 1.5,
                    borderRadius: 2,
                    width: 5,
                  }}
                ></Box>
                <Typography variant="body2">Non-Editable</Typography>

                <Box
                  sx={{
                    bgcolor: "info.main",
                    px: 1.5,
                    py: 1.5,
                    borderRadius: 2,
                    width: 5,
                  }}
                ></Box>
                <Typography variant="body2">System Update</Typography>
              </Stack>
            </Grid>
          )} */}

          <Grid item>
            <Stack direction="row" alignItems="center">
              <Typography>Target Date:</Typography>
              <Box
                sx={{
                  p: 1,
                  ml: 1,
                  bgcolor: "error.main",
                  borderRadius: 1,
                  color: "white",
                }}
              >
                <Typography>25/Mar/2025</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <CustomTabPanel value={value} index={1}>
        <ViewDiscrepancyDetails />
      </CustomTabPanel>
    </>
  );
}

export default AssessDiscrepancy;
