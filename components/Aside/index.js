import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import BarChart from "./Charts1";
import PolarArea from "./Charts2";
import Part2 from "../Part2";

export default function Aside() {
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <BarChart />
        <PolarArea />
        <Box>
          <Card sx={{ minWidth: 275, backgroundColor: "#fff0e6" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5">Top 10</Typography>
              <Typography>Position in dribble</Typography>
              <Typography sx={{ fontSize: "11px" }}>
                20% increase from lastweek
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#eceafe",
              marginTop: "30px",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5">26</Typography>
              <Typography>New employees onboarded</Typography>
              <Typography sx={{ fontSize: "11px" }}>
                15% increase from lastweek
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#e5f7ff",
              marginTop: "30px",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5">500</Typography>
              <Typography>New clients approached</Typography>
              <Typography sx={{ fontSize: "11px" }}>
                5% increase from lastweek
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
        <Part2 />
    </Box>
  );
}