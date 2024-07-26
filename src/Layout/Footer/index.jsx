import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";

export const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<CallOutlinedIcon />} />
        <BottomNavigationAction icon={<PersonOutlineOutlinedIcon />} />
        <BottomNavigationAction icon={<SettingsOutlinedIcon />} />
        <BottomNavigationAction icon={<RadioButtonCheckedOutlinedIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
