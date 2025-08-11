import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";

import FormList from "./FormList";
import NewForm from "./NewForm";

function FormLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Form List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Form"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <FormList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewForm />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default FormLanding;
