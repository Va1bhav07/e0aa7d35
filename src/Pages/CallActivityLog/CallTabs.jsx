import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { AllCalls } from "./AllCalls";
import { Inbox } from "./Inbox";
import { ArchivedCalls } from "./ArchivedCalls";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{
        maxHeight: "528px",
        overflow: "auto",
      }}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const CallTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    // sx={
    //   {
    //     // transform: "translate(0px, -54px)",
    //   }
    // }
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="call activity tabs"
          className="test"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "airCall.red",
            },
          }}
          sx={{
            "& .Mui-selected": {},
            "& .MuiTabs-flexContainer": {
              justifyContent: "end",
              mt: "3px",
              mr: "3px",
            },
            "& button": {
              padding: "16px",
              minWidth: "80px",
              backgroundColor: "airCall.greyPrime",
            },
          }}
        >
          <Tab
            label="inbox"
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            {...a11yProps(0)}
          />
          <Tab
            label="All calls"
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            {...a11yProps(1)}
          />
          <Tab icon={<TuneOutlinedIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Inbox />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AllCalls />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ArchivedCalls />
      </CustomTabPanel>
    </Box>
  );
};
