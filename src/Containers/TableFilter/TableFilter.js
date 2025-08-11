import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import Papa from "papaparse";

function TableFilters({ dataBase, dataFilter, setData }) {
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState("all");
  const [clearFilter, setClearFilter] = useState(false);

  const filterOptions = [
    { value: "all", label: "All" },
    ...Object.keys(dataBase[0]).map((property) => ({
      value: property,
      label: property.charAt(0).toUpperCase() + property.slice(1),
    })),
  ];

  const handleFilter = () => {
    setData(filterSearch, search);
  };

  const handleClear = () => {
    setSearch("");
    setFilterSearch("all");
    setData(filterSearch, "");
  };

  const CSVDownloadButton = ({ data, filename }) => {
    const downloadCSV = () => {
      const csv = Papa.unparse(data);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert(
          "Your browser does not support the download functionality. Please try a different browser."
        );
      }
    };

    return (
      <Button
        color="secondary"
        variant="contained"
        disableElevation
        startIcon={<FileDownloadIcon />}
        onClick={downloadCSV}
      >
        Download CSV
      </Button>
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (dataBase.length === dataFilter.length) {
      setClearFilter(false);
    } else setClearFilter(true);
  });

  return (
    <>
      <Box mb={2}>
        <Grid
          container
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="table-search-option"
              placeholder="Filter"
              variant="outlined"
              size="small"
              select
              fullWidth
              value={filterSearch}
              onChange={(event) => {
                setFilterSearch(event.target.value);
              }}
            >
              {filterOptions.map((option, idx) => (
                <MenuItem key={idx + 1} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="table-search"
              placeholder="Search"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              disableElevation
              startIcon={<FilterAltIcon />}
              onClick={handleFilter}
            >
              Filter
            </Button>
          </Grid>
          {clearFilter && (
            <Grid item>
              <Button
                color="error"
                variant="contained"
                disableElevation
                startIcon={<CloseIcon />}
                onClick={handleClear}
              >
                Clear
              </Button>
            </Grid>
          )}
          <Grid item>
            <CSVDownloadButton data={dataFilter} filename="your_data.csv" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default TableFilters;
