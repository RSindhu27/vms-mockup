import { Box } from "@mui/material";

function TableView() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "grey.400",
          p: 2,
          height: 100,
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        This is a Box for view Document.
      </Box>
    </>
  );
}

export default TableView;
