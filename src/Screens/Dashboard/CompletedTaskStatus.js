import { Grid, Paper, Typography } from "@mui/material";
import FilterDate from "./FilterData";
import { green, amber } from "@mui/material/colors";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CustomTooltip } from "../../Components/Chart";
import CustomChartLegends from "../../Components/Chart/CustomChartLegends";

const data = [
  { name: "Completed On Time", value: 203 },
  { name: "Completed Delayed", value: 44 },
];

const COLORS = [green[500], amber[500]];

function CompletedTaskStatus() {
  return (
    <Paper sx={{ p: 1 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs>
          <Typography variant="body1">
            <b>Completed Task Status</b>
          </Typography>
        </Grid>
        <Grid item>
          <FilterDate />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography variant="body2" color="text.secondary">
                Total Completed Tax
              </Typography>
              <Typography variant="h5" color="text.primary">
                <b>247</b>
              </Typography>
              <CustomChartLegends
                bgcolor={green[500]}
                name="Completed On Time"
                value="203"
              />
              <CustomChartLegends
                bgcolor={amber[500]}
                name="Completed Delayed"
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

export default CompletedTaskStatus;
