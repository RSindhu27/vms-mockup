import React from "react";
import { TabWrapper } from "../../Components/Page";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import sampleData from "./DataOne.json";
import { Table } from "../../Components/Table";
import { AllTraceabilityMatrix } from "./AllTraceabilityMatrixList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`trace-matrix-type-${index}`}
      aria-labelledby={`trace-matrix-type-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const columns = [
  { Header: "Requirement ID", accessor: "requirement" },
  { Header: "Description", accessor: "description" },
  { Header: "Test Case", accessor: "testCase" },
  { Header: "Status", accessor: "status" },
];

function TraceMatrixList() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabWrapper>
        <Grid container>
          <Grid xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All" />
              <Tab label="WIP" />
              <Tab label="Completed" />
              <Tab label="Rejected" />
              <Tab label="Terminated" />
            </Tabs>
          </Grid>
          <Grid xs={12}>
            <CustomTabPanel value={value} index={0}>
              <AllTraceabilityMatrix />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {/* WIP data here */}
              <Table
                columns={columns}
                data={sampleData.filter((row) => row.status === "WIP")}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              {/* Completed data here */}
              <Table
                columns={columns}
                data={sampleData.filter(
                  (row) => row.status === "Completed" || row.status === "Passed"
                )}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              {/* Rejected data here */}
              <Table
                columns={columns}
                data={sampleData.filter(
                  (row) => row.status === "Rejected" || row.status === "Failed"
                )}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              {/* Terminated data here */}
              <Table
                columns={columns}
                data={sampleData.filter((row) => row.status === "Terminated")}
              />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </TabWrapper>
    </>
  );
}

export default TraceMatrixList;
