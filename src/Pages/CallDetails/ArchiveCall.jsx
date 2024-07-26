import React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import { grey } from "@mui/material/colors";
const primaryTxtColor = grey[700];

export const ArchiveCall = ({ archiveHandler, isArchived }) => {
  return (
    <Box px={2}>
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        color={primaryTxtColor}
        pb={2}
      >
        Contact settings
      </Typography>

      <Button
        variant="text"
        startIcon={<ArchiveOutlinedIcon sx={{ color: primaryTxtColor }} />}
        sx={{
          textTransform: "capitalize",
          p: "10px 10px 10px 0",
        }}
        onClick={archiveHandler}
      >
        <Typography variant="subtitle2" color={primaryTxtColor} ml={1}>
          {`${isArchived ? "Unarchive number" : "Archive number"}`}
        </Typography>
      </Button>
    </Box>
  );
};
