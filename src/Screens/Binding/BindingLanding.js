import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CustomTab, CustomTabs, CustomTabPanel } from "../../Components/Tabs";
import BindingList from "./BindingList";
import NewBinding from "./NewBinding";

function BindingLanding() {
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
            label="New Binding"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <BindingList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewBinding />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default BindingLanding;
