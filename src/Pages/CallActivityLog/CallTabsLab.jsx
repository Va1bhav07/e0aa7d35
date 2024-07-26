import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

export function CallTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        transform: "translate(0px, -50px)",
      }}
    >
      <TabContext value={value} className="test123">
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="activity call tabs"
            className="test"
            backgroundColor="airCall.greyPrime"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "airCall.red !important",
              },
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: "end",
              },
              "& button": {
                // margin: "0 0 0 5px",
                padding: 0,
                minWidth: "80px ",
              },
            }}
          >
            <Tab label="inbox" value="1" />
            <Tab label="All Calls" value="2" />
            <Tab icon={<TuneOutlinedIcon />} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">inbox</TabPanel>
        <TabPanel value="2">All Call</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
