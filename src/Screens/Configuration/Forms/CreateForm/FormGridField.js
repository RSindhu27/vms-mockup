import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import AddField from "./AddField";
import GridOnIcon from "@mui/icons-material/GridOn";
import { PageIconSecondaryButtonBox } from "../../../../Components/Page";

function FormGridField() {
  const [formField, setFormField] = useState([{ id: 1 }]);
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  const [fieldRow, setFieldRow] = useState(12);

  const handleGrid = (a, b) => {
    setRow(a);
    setColumn(b);
  };

  const handleUpdateFields = () => {
    var totalField = row * column;
    var fieldArray = [];
    for (var i = 1; i <= totalField; i++) {
      fieldArray = [...fieldArray, { id: i }];
    }
    if (row === 1) {
      setFieldRow(12);
    } else if (row === 2) {
      setFieldRow(6);
    } else {
      setFieldRow(4);
    }
    setFormField(fieldArray);
  };

  return (
    <>
      <Grid container spacing={2}>
        {/* Row Column Selection */}
        <Grid item xs={12} sm>
          <Typography variant="body2" gutterBottom>
            Select Grid
          </Typography>
          <Box>
            <Grid container spacing={1}>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(1, 1)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>1x1</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(1, 2)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>1x2</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(1, 3)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>1x3</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(2, 1)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>2x1</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(2, 2)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>2x2</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(2, 3)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>2x3</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(3, 1)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>3x1</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(3, 2)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>3x2</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(3, 3)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>3x3</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(3, 4)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>3x4</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
              <Grid item>
                <PageIconSecondaryButtonBox onClick={() => handleGrid(3, 5)}>
                  <GridOnIcon fontSize="large" color="secondary" />
                  <Typography>
                    <b>3x5</b>
                  </Typography>
                </PageIconSecondaryButtonBox>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} sm="auto">
          <Typography variant="body2" gutterBottom>
            Rows
          </Typography>
          <TextField
            id="section_row"
            size="small"
            sx={{ width: 100 }}
            value={row}
            onChange={(event) => {
              setRow(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6} sm="auto">
          <Typography variant="body2" gutterBottom>
            Columns-Max 3
          </Typography>
          <TextField
            id="section_column"
            size="small"
            sx={{ width: 100 }}
            value={column}
            onChange={(event) => {
              setColumn(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Stack direction="row" justifyContent="flex-end">
            <Box>
              <Button
                onClick={handleUpdateFields}
                autoFocus
                variant="contained"
                disableElevation
                size="large"
                color="info"
              >
                Update
              </Button>
            </Box>
          </Stack>
        </Grid>
        {/* Row Column View */}
        <Grid item xs={12} sm={12}>
          <Grid container spacing={0}>
            {formField.map((e) => (
              <Grid
                item
                xs={fieldRow}
                key={e.id}
                sx={{
                  p: 1,
                  border: 1,
                  borderColor: "grey.200",
                  boxSizing: "border-box",
                }}
              >
                <AddField />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default FormGridField;
