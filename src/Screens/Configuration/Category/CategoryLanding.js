import { Box } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  CustomTab,
  CustomTabs,
  CustomTabPanel,
} from "../../../Components/Tabs";
import CategoryList from "./CategoryList";
import NewCategory from "./NewCategory";

function CategoryLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs value={value} onChange={handleChange}>
          <CustomTab label="Category List" />
          <CustomTab
            icon={<AddCircleIcon />}
            iconPosition="start"
            label="New Category"
          />
        </CustomTabs>
        <CustomTabPanel value={value} index={0}>
          <CategoryList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NewCategory />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default CategoryLanding;
