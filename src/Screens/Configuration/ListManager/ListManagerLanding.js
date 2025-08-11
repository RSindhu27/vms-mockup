import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import PickList from "./PickList";
import NewPickList from "./NewPickList";

function ListManagerLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Pick List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Pick List"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <PickList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewPickList />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default ListManagerLanding;
