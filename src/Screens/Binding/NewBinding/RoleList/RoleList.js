import React, { useState } from "react";
import {
  FormControlLabel,
  Switch,
  Typography,
  Grid,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import { Table } from "../../../../Components/Table";
import Data from "./././DataRole.json";
import { Link } from "react-router-dom";
import { PageButton } from "../../../../Components/Page";

const RoleList = () => {
  const [roleData, setRoleData] = useState(Data.picklist);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleNameChange = (id, newValue) => {
    setRoleData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, role_name: newValue } : row))
    );
  };

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "role_name",
      headerName: "Role Name",
      renderCell: (params) => {
        const { id, role_name, allow_overwrite } = params.row;
        return allow_overwrite ? (
          <TextField
            variant="outlined"
            size="small"
            value={role_name}
            onChange={(e) => handleNameChange(id, e.target.value)}
            sx={{
              width: "300px",
              height: "30px",
              "& .MuiInputBase-root": { height: "30px", fontSize: "14px" },
              "& .MuiOutlinedInput-input": { padding: "5px 10px" },
            }}
          />
        ) : (
          <Typography variant="body2" component={Link} to="#" color="info.main">
            {role_name}
          </Typography>
        );
      },
      minWidth: 150,
      flex: 1,
    },
    {
      field: "allow_overwrite",
      headerName: "Allow Overwrite?",
      renderCell: (params) => {
        const { role_name, allow_overwrite } = params.row;

        if (role_name === "Reviewer") {
          return <Typography variant="body2">N/A</Typography>;
        }

        return (
          <FormControlLabel
            control={<Switch checked={allow_overwrite} />}
            label={allow_overwrite ? "Yes" : "No"}
          />
        );
      },
      minWidth: 150,
      flex: 1,
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Table
          data={roleData}
          columns={columns}
          columnVisibilityModel={{
            id: false,
          }}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
        />
      </Grid>

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        py={2}
        spacing={2}
        width="100%"
      >
        <Box>
          <PageButton color="error">Cancel</PageButton>
        </Box>
        <Box>
          <PageButton color="primary">Reset</PageButton>
        </Box>
        {selectedRows.length > 0 && (
          <Box>
            <PageButton color="success">Submit</PageButton>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default RoleList;
