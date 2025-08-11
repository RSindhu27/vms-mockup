import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import ChecklistList from "./ChecklistList";
import NewChecklist from "./NewChecklist";

function ChecklistLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Checklist" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Checklist"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <ChecklistList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewChecklist />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default ChecklistLanding;
