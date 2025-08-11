import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { SearchWrapper } from "../../Components/Navigation";

function Search() {
  return (
    <SearchWrapper>
      <SearchIcon sx={{ color: "text.secondary", fontSize: 28 }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </SearchWrapper>
  );
}

export default Search;
