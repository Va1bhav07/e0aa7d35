import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import { apiAxios } from "../../../utilities/axios";
import { CallLogsContext } from "../../../contexts/CallLogsContext";

import { grey } from "@mui/material/colors";

export const ArchiveCallBtn = ({ isArchive = false, callIds }) => {
  const { setUpdate } = useContext(CallLogsContext);
  const primaryTxtColor = grey[700];

  const handleAllCallArchive = async () => {
    try {
      const promises = callIds.map((callId) => {
        const api = `/activities/${callId}`;
        return apiAxios.patch(api, {
          is_archived: !isArchive,
        });
      });

      const responses = await Promise.all(promises);
      if (responses.length) {
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      console.error("Error archiving calls:", error);
    }
  };

  return (
    <Box px={2}>
      <Button
        variant="outlined"
        startIcon={
          isArchive ? <UnarchiveOutlinedIcon /> : <ArchiveOutlinedIcon />
        }
        onClick={handleAllCallArchive}
        sx={{
          color: primaryTxtColor,
          backgroundColor: "common.white",
          borderRadius: "10px",
          border: `1px solid ${grey[300]}`,
          // alignItems: "center",
          justifyContent: "start",
          width: "100%",
          p: "16px",
          textTransform: "capitalize",
          "&:hover": {
            borderColor: primaryTxtColor,
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <Typography
          // variant="subtitle1"
          fontWeight="bold"
          fontSize="14px"
          color={primaryTxtColor}
        >
          {`${isArchive ? "Unarchive" : "Archive"}  all calls`}
        </Typography>
      </Button>
    </Box>
  );
};
