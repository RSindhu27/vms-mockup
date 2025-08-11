import { Box, Chip, Grid, Stack, TextField, Typography } from "@mui/material";
import { CustomTab, CustomTabs } from "../../../Components/Tabs";
import { PageButton, TabWrapper } from "../../../Components/Page";
import Data from "./././DataObjectType.json";
import { useState } from "react";
import { Table } from "../../../Components/Table";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "id", width: 120 },
  {
    field: "template_name",
    headerName: "Template Name",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => (
      <Typography
        component={Link}
        to="#"
        sx={{
          color: "info.main",
          textDecoration: "underline",
          fontWeight: 500,
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "retain_same_number",
    headerName: "Retain Same Template Number?",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        color="error"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      />
    ),
  },
  {
    field: "bind_as",
    headerName: "Bind As",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        color="success"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      />
    ),
  },
];

function ObjectTypeName() {
  const [objectData, setObjectData] = useState(Data.picklist);
  return (
    <>
      <Box width={100 + "%"}>
        <CustomTabs>
          <CustomTab label="Bound List- (65)" />
        </CustomTabs>
      </Box>

      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Select Object Type
              
            </Typography>
            <TextField
              id="select_object_type"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value="Template"
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Bind From
              
            </Typography>
            <TextField
              id="inherit_from"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Strides"}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Bind To
             
            </Typography>
            <TextField
              id="inherit_to"
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Arcolab"}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom>
              Template Group
             
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              disabled
              value={"Template Group 01"}
            ></TextField>
          </Grid>
        </Grid>
        <Grid item xs={12} py={4}>
          <Table
            data={Data.picklist}
            columns={columns}
            columnVisibilityModel={{
              id: false,
            }}
          />
        </Grid>
      </TabWrapper>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "text.primary", mb: 0.5 }}
          >
            Workflow Status:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "error.main",
              fontWeight: 500,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Review Rejected / Approval Pending
          </Typography>
        </Box>
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default ObjectTypeName;
