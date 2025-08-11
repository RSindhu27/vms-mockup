import { Box, TextField } from "@mui/material";
import { Table } from "../../../../Components/Table";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "section",
    headerName: "Section",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.section.replace(/\s/g, "")}
          color="secondary"
          defaultValue={params.row.section}
          size="small"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "sequence",
    headerName: "Sequence",
    renderCell: (params) => (
      <Box sx={{ pt: 1, pb: 1, width: 100 + "%" }}>
        <TextField
          id={params.row.sequence.replace(/\s/g, "")}
          color="secondary"
          defaultValue={params.row.sequence}
          size="small"
          fullWidth
        />
      </Box>
    ),
    minWidth: 150,
    flex: 1,
  },
];

const defaultDate = [
  {
    id: 1,
    section: "section 1",
    sequence: "Parallel",
  },
  {
    id: 2,
    section: "section 2",
    sequence: "Concurrent",
  },
  {
    id: 3,
    section: "section 3",
    sequence: "Simultaneous",
  },
];

function ViewBusinessRuleSection() {
  const [tableData, setTableData] = useState(defaultDate);

  return (
    <>
      <Table data={tableData} columns={columns} getRowHeight={() => "auto"} />
    </>
  );
}

export default ViewBusinessRuleSection;
