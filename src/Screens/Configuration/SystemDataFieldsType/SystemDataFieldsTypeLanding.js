import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import SystemDataFieldTypeList from "./SystemDataFieldsTypeList";
import NewSystemDataFieldsType from "./NewSystemDataFieldsType";

function SystemDataFieldsTypeLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="System Data Fields Type List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New System Data Field Types"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <SystemDataFieldTypeList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewSystemDataFieldsType />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default SystemDataFieldsTypeLanding;
