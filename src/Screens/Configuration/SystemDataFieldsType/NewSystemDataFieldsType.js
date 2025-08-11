import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PageButton, TabWrapper } from "../../../Components/Page";
import { useState } from "react";
import ViewDependency from "./ViewDependency";

const fieldTypeList = [
  {
    value: 1,
    label: "List Manager",
  },
  {
    value: 2,
    label: "String",
  },
];

const picklistData = [
  {
    value: 1,
    label: "Picklist 1",
  },
  {
    value: 2,
    label: "Picklist 2",
  },
];

const picklistNameData = [
  {
    value: 1,
    label: "Picklist Name 1",
  },
  {
    value: 2,
    label: "Picklist Name 2",
  },
];

function NewSystemDataFieldsType() {
  const [pickBusinessUnit, setPickBusinessUnit] = useState("");
  const [dataFieldType, setDataFieldType] = useState("");
  const [selectPickList, setSelectPickList] = useState("");
  const [pickListName, setPickListName] = useState("");
  const [defineNo, setDefineNo] = useState("");

  return (
    <>
      <TabWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <TextField
              id="sdft_name"
              placeholder="Name"
              color="secondary"
              variant="outlined"
              size="small"
              fullWidth
              value={pickBusinessUnit}
              onChange={(event) => {
                setPickBusinessUnit(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" gutterBottom>
              Data field Type
            </Typography>
            <TextField
              id="data_field_type"
              variant="outlined"
              size="small"
              fullWidth
              select
              value={dataFieldType}
              onChange={(event) => {
                setDataFieldType(event.target.value);
              }}
            >
              {fieldTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {dataFieldType ? (
            <>
              {dataFieldType === 1 ? (
                <>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" gutterBottom>
                      Select Picklist
                    </Typography>
                    <TextField
                      id="select_picklist"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={selectPickList}
                      onChange={(event) => {
                        setSelectPickList(event.target.value);
                      }}
                    >
                      {picklistData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" gutterBottom>
                      Pick List Name
                    </Typography>
                    <TextField
                      id="select_picklist_name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      value={pickListName}
                      onChange={(event) => {
                        setPickListName(event.target.value);
                      }}
                    >
                      {picklistNameData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="body2" gutterBottom>
                      Define No: Charecter
                    </Typography>
                    <TextField
                      id="sdft_define_no"
                      placeholder="Define No"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={defineNo}
                      onChange={(event) => {
                        setDefineNo(event.target.value);
                      }}
                    />
                  </Grid>
                </>
              )}
            </>
          ) : (
            ""
          )}
        </Grid>
        {dataFieldType === 1 ? (
          <>
            <Box p={1} />
            <Typography variant="body1">
              Pick List Value/Short Form: <b>ARC</b>
            </Typography>
            <Box p={1} />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography>
                  <strong>
                    <u>Dependencies</u>
                  </strong>
                </Typography>
              </Grid>
            </Grid>
            <Box p={1} />
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  <b>DEPENDED ON</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  <b>DEPENDED ITEMS</b>
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Country
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    India, UK, Germany, USA , France, AUS, Belgium
                  </Typography>
                  <ViewDependency />
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  States
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  KL,KA,TN, AP,MH,GA,MP,OD,WB,UP,RJ,GJ,HR,PB,UK,HP,JK
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          ""
        )}
      </TabWrapper>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Save</PageButton>
        </Box>
      </Stack>
    </>
  );
}

export default NewSystemDataFieldsType;
