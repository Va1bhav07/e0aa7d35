import React, { useContext } from "react";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/FiberManualRecord";

import { grey } from "@mui/material/colors";
import { CallLogsContext } from "../../contexts/CallLogsContext";

export const Header = () => {
  const { callLogsState: callLogs } = useContext(CallLogsContext);
  const totalCalls =
    callLogs.archivedCallsData?.length + callLogs.unArchivedCallsData?.length;
  return (
    <Stack
      direction="row"
      alignItems="center"
      component="header"
      bgcolor={`#e3e3e3`}
      borderRadius="3px 3px 0px 0px"
      borderBottom={`1px solid ${grey[400]}`}
      px="3px"
      py="1px"
      spacing={9}
    >
      <Stack direction="row">
        <CircleIcon fontSize="small" sx={{ color: "airCall.red" }} />
        <CircleIcon fontSize="small" sx={{ color: "airCall.yellow" }} />
        <CircleIcon fontSize="small" sx={{ color: "airCall.green" }} />
      </Stack>
      <Typography
        variant="caption"
        fontSize="13px"
        fontWeight="bold"
        color={`${grey[700]}`}
      >
        {totalCalls ? `(${totalCalls})` : ""} Aircall Phone
      </Typography>
    </Stack>
  );
};
