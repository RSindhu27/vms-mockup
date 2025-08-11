import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CustomTab, CustomTabs, CustomTabPanel } from "../../Components/Tabs";

import TraceMatrixList from "./TraceMatrixList";
import NewTraceMatrix from "./NewTraceMatrix/NewTraceMatrix";

function TraceMatrixLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Bound List- (65)" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Create New Matrix"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <TraceMatrixList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewTraceMatrix />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default TraceMatrixLanding;
