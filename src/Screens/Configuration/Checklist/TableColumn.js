import {
  Box,
  Button,
  Grid,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const names = ["Yes", "No", "Not Applicable", "Others"];

const listCategoryList = [
  {
    value: 1,
    label: "List Category 1",
  },
  {
    value: 2,
    label: "List Category 2",
  },
  {
    value: 3,
    label: "List Category 3",
  },
];

const typeList = [
  {
    value: 1,
    label: "String & Selection",
  },
  {
    value: 2,
    label: "List Manager",
  },
  {
    value: 3,
    label: "String",
  },
];

const TableColumn = ({ itemData, provided, snapshot, refX }) => {
  const [type, setType] = useState(itemData.type);
  const [listCategory, setListCategory] = useState(1);
  const [string, setString] = useState("");
  const [header, setHeader] = useState("");
  const [selectValue, setSelectValue] = useState([]);

  const handleSelectValue = (event) => {
    const {
      target: { value },
    } = event;
    setSelectValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box ref={refX}>
        <Box
          sx={{
            p: 1,
            bgcolor: snapshot.isDragging ? "secondary.extraLight" : "grey.50",
            borderRadius: 2,
            mb: 1,
            ...provided.draggableProps.style,
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box>
                      <DragIndicatorIcon
                        sx={{
                          color: "grey.500",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ fontSize: 24 }}
                        color="secondary"
                      >
                        Column {itemData.label}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" color="error">
                      Cancel
                    </Button>
                    <Button variant="outlined" color="info">
                      Apply
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" gutterBottom>
                Select Type
              </Typography>
              <TextField
                id="checkpoint_type"
                fullWidth
                select
                size="small"
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                {typeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {type === 1 ? (
              <>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" gutterBottom>
                    Enter String Name
                  </Typography>
                  <TextField
                    id="checkpoint_string_name"
                    fullWidth
                    size="small"
                    value={string}
                    onChange={(event) => {
                      setString(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" gutterBottom>
                    Enter Selection Value
                  </Typography>
                  <Select
                    id="checkpoint_select"
                    multiple
                    size="small"
                    fullWidth
                    value={selectValue}
                    onChange={handleSelectValue}
                    input={<OutlinedInput />}
                    renderValue={(selected) => selected.join(", ")}
                    // MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          size="small"
                          checked={selectValue.indexOf(name) > -1}
                          style={{ marginRight: 8, padding: 0 }}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </>
            ) : (
              ""
            )}
            {type === 2 ? (
              <>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="body2" gutterBottom>
                    Enter List Manager Category
                  </Typography>
                  <TextField
                    id="checkpoint_list_manager_category"
                    fullWidth
                    select
                    size="small"
                    value={listCategory}
                    onChange={(event) => {
                      setListCategory(event.target.value);
                    }}
                  >
                    {listCategoryList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </>
            ) : (
              ""
            )}
            {type === 3 ? (
              <>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="body2" gutterBottom>
                    Enter String Name
                  </Typography>
                  <TextField
                    id="checkpoint_string_name"
                    fullWidth
                    size="small"
                    value={string}
                    onChange={(event) => {
                      setString(event.target.value);
                    }}
                  />
                </Grid>
              </>
            ) : (
              ""
            )}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" gutterBottom>
                Header Name
              </Typography>
              <TextField
                id="checkpoint_string_name"
                fullWidth
                size="small"
                value={header}
                onChange={(event) => {
                  setHeader(event.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TableColumn;
