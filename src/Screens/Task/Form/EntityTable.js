import {
  Typography,
  Table as TableX,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const defaultDate = [
  {
    id: 1,
    entity_name: "section_1",
    entity_name_link: "#",
    entity_no: "ENXCSV02",
    entity_type: "CSV Entity type",
    entity_type_link: "#",
    category: "csv",
    sub_category: "Subcat 01",
    view_template: "#",
  },
];

function EntityTable() {
  const [data, setData] = useState(defaultDate);

  return (
    <>
      <TableContainer
        sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
      >
        <TableX
          size="small"
          sx={{
            borderCollapse: "separate",
            tableLayout: "fixed",
            minWidth: 740,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="GrayText">
                  Entity Name
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="GrayText">
                  Entity No
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="GrayText">
                  Entity Type
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="GrayText">
                  Category
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="GrayText">
                  Sub Category
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2" color="GrayText">
                  Assessment Template
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e) => (
              <TableRow>
                <TableCell component="td" scope="row">
                  <Typography
                    variant="body1"
                    color="info.main"
                    component={Link}
                    to={e.entity_name_link}
                  >
                    {e.entity_name}
                  </Typography>
                </TableCell>
                <TableCell component="td" scope="row">
                  <Typography variant="body1" color="textPrimary">
                    {e.entity_no}
                  </Typography>
                </TableCell>
                <TableCell component="td" scope="row">
                  <Typography
                    variant="body1"
                    color="info.main"
                    component={Link}
                    to={e.entity_type_link}
                  >
                    {e.entity_type}
                  </Typography>
                </TableCell>
                <TableCell component="td" scope="row">
                  <Typography variant="body1" color="textPrimary">
                    {e.category}
                  </Typography>
                </TableCell>
                <TableCell component="td" scope="row">
                  <Typography variant="body1" color="textPrimary">
                    {e.sub_category}
                  </Typography>
                </TableCell>
                <TableCell component="td" scope="row">
                  <Typography
                    variant="body1"
                    color="info.main"
                    component={Link}
                    to={e.view_template}
                  >
                    View Template
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableX>
      </TableContainer>
    </>
  );
}

export default EntityTable;
