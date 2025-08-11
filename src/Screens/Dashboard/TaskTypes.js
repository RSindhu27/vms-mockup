import { Grid, Paper, Typography } from "@mui/material";
import FilterDate from "./FilterData";
import { indigo, lightBlue, pink } from "@mui/material/colors";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CustomTooltip } from "../../Components/Chart";
import CustomChartLegends from "../../Components/Chart/CustomChartLegends";

const data = [
  { name: "Document Approval", value: 81 },
  { name: "Document Review", value: 67 },
  { name: "Document Creation", value: 16 },
];

const COLORS = [indigo[500], lightBlue[500], pink[500]];

function TaskTypes() {
  return (
    <Paper sx={{ p: 1 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs>
          <Typography variant="body1">
            <b>Task Types</b>
          </Typography>
        </Grid>
        <Grid item>
          <FilterDate />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography variant="body2" color="text.secondary">
                Total
              </Typography>
              <Typography variant="h5" color="text.primary">
                <b>180</b>
              </Typography>
              <CustomChartLegends
                bgcolor={indigo[500]}
                name="Document Approval"
                value="81"
              />
              <CustomChartLegends
                bgcolor={lightBlue[500]}
                name="Document Review"
                value="67"
              />
              <CustomChartLegends
                bgcolor={pink[500]}
                name="Document Creation"
                value="16"
              />
            </Grid>
            <Grid item xs={7}>
              <ResponsiveContainer height={210}>
                <PieChart width={170} height={170}>
                  <Pie
                    startAngle={180}
                    endAngle={540}
                    dataKey="value"
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TaskTypes;
