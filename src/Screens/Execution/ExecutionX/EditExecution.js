import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import TestTable from "./TestTable";
import ExecutionDocument from "./ExecutionDocument";
import ExecutionInitiateDiscrepancy from "./ExecutionInitiateDiscrepancy";
import Discrepancies from "./Discrepancies";

function EditExecution() {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              My Task/ TSK0001-Execution/Document/-CSV/DOC0001
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" disableElevation>
              Task Details
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box width={100 + "%"}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CustomTabs value={value} onChange={handleChange}>
            <CustomTab label="Test Tables" />
            <CustomTab label="Document" />
            <CustomTab label="Discrepancies" />
          </CustomTabs>
          <Box>
            <ExecutionInitiateDiscrepancy />
          </Box>
        </Stack>
        <CustomTabPanel value={value} index={0}>
          <TestTable />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ExecutionDocument />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Discrepancies />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default EditExecution;
