import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";

import NumberingSystemList from "./NumberingSystemList";
import NewNumberingSystem from "./NewNumberingSystem";

function DocumentTypeLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Numbering System List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Numbering System"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <NumberingSystemList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewNumberingSystem />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default DocumentTypeLanding;
