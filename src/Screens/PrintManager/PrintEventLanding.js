import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CustomTab, CustomTabs, CustomTabPanel } from "../../Components/Tabs";
import PrintEventManagerList from "../PrintManager/PrintEventManager/PrintEventManagerList";
import PrintEventSettings from "../PrintManager/PrintEventManager/PrintEventSettings";
function PrintEventLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Print Events"
          />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="Print Event Settings"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <PrintEventManagerList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PrintEventSettings />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default PrintEventLanding;
