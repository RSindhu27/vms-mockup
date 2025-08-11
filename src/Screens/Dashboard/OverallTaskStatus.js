import { Grid, Paper, Typography } from "@mui/material";
import FilterDate from "./FilterData";
import { green, red, blue, amber } from "@mui/material/colors";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CustomTooltip } from "../../Components/Chart";
import CustomChartLegends from "../../Components/Chart/CustomChartLegends";

const data = [
  { name: "Completed Tasks", value: 187 },
  { name: "Pending Tasks", value: 34 },
  { name: "In Progress", value: 6 },
  { name: "Assigned", value: 44 },
];

const COLORS = [green[500], red[500], blue[500], amber[500]];

function OverallTaskStatus() {
  return (
    <Paper sx={{ p: 1 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs>
          <Typography variant="body1">
            <b>Overall Task Status</b>
          </Typography>
        </Grid>
        <Grid item>
          <FilterDate />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography variant="body2" color="text.secondary">
                Total Tax
              </Typography>
              <Typography variant="h5" color="text.primary">
                <b>187</b>
              </Typography>
              <CustomChartLegends
                bgcolor={green[500]}
                name="Completed Tasks"
                value="103"
              />
              <CustomChartLegends
                bgcolor={red[500]}
                name="Pending Tasks"
                value="34"
              />
              <CustomChartLegends
                bgcolor={blue[500]}
                name="In Progress"
                value="6"
              />
              <CustomChartLegends
                bgcolor={amber[500]}
                name="Assigned"
                value="44"
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

export default OverallTaskStatus;
