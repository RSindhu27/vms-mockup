import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";

import PrintTemplateList from "./PrintTemplateList";
import NewPrintTemplate from "./NewPrintTemplate";

function PrintTemplateLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Print Templates List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Print Templates"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <PrintTemplateList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewPrintTemplate />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default PrintTemplateLanding;
