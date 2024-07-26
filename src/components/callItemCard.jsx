import React from "react";
import Stack from "@mui/material/Stack";

import { grey } from "@mui/material/colors";

export const CallItemCard = ({ children, props }) => {
  return (
    <Stack
      direction="row"
      borderRadius="10px"
      border={`1px solid ${grey[300]}`}
      alignItems="center"
      p={2}
      pr={0}
      spacing={1}
      // className="test"
      flex={1}
      backgroundColor="common.white"
      {...props}
    >
      {children}
    </Stack>
  );
};
