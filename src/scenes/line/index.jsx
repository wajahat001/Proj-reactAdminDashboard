import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

import React from "react";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="LINECHART" subtitle="Simple LineChart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
