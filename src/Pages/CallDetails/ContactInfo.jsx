import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import PhoneMissedOutlinedIcon from "@mui/icons-material/PhoneMissedOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { convertSeconds } from "../../utilities/formatDate";
import { grey } from "@mui/material/colors";

const primaryTxtColor = grey[700];
export const ContactInfo = ({ callDetailsState }) => {
  return (
    <Box px={2}>
      <Box
        borderRadius="10px"
        border={`1px solid ${grey[300]}`}
        p={2}
        spacing={2}
        // className="test"
        flex={1}
        backgroundColor="common.white"
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color={primaryTxtColor}
          pb={1}
        >
          Contact info
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            {callDetailsState.call_type === "answered" ? (
              callDetailsState.direction === "inbound" ? (
                <PhoneCallbackOutlinedIcon sx={{ color: primaryTxtColor }} />
              ) : (
                <PhoneForwardedOutlinedIcon sx={{ color: primaryTxtColor }} />
              )
            ) : (
              <PhoneMissedOutlinedIcon sx={{ color: primaryTxtColor }} />
            )}
            <Stack>
              <Typography>{callDetailsState.from}</Typography>

              <Typography variant="caption" color={primaryTxtColor}>
                call on {`${callDetailsState.to} `}
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={2}>
              <VideocamOutlinedIcon />
              <ChatOutlinedIcon />
            </Stack>
            <Typography variant="caption" color={primaryTxtColor} pl="2px">
              {callDetailsState.duration > 60
                ? convertSeconds(callDetailsState.duration)
                : `${callDetailsState.duration}s`}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
