import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";

import { CallItemCard } from "../../components/callItemCard";
import { grey } from "@mui/material/colors";

import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import PhoneMissedOutlinedIcon from "@mui/icons-material/PhoneMissedOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import { formatTime, getAmPm } from "../../utilities/formatDate";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

const primaryTxtColor = grey[700];
const secondaryTxtColor = grey[500];

export const CallIList = ({
  callsData = {},
  callDetailsHandler,
  isLoading,
}) => {
  const callsDates = Object.keys(callsData);

  if (isLoading) {
    return (
      <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!callsDates.length) {
    return (
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5"> No Call Log Found </Typography>
      </Box>
    );
  }

  const handleCallDetails = (id) => {
    callDetailsHandler?.(id);
  };

  return (
    <Box>
      <List>
        {callsDates.map((date) => (
          <Box key={date}>
            <Divider
              textAlign="center"
              sx={{ my: 1.5 }}
              color={primaryTxtColor}
            >
              <Typography variant="subtitle2" color={primaryTxtColor}>
                {date}
              </Typography>
            </Divider>
            {Object.keys(callsData[date] || {}).map((from, index) => {
              const calls = callsData[date][from];
              const call = calls?.[0];
              const numOfTimes = calls?.length;

              return (
                <ListItemButton
                  key={call.id}
                  px={2}
                  onClick={() => handleCallDetails(call.id)}
                >
                  <CallItemCard>
                    {call.call_type === "answered" ? (
                      call.direction === "inbound" ? (
                        <PhoneCallbackOutlinedIcon
                          sx={{ color: primaryTxtColor }}
                        />
                      ) : (
                        <PhoneForwardedOutlinedIcon
                          sx={{ color: primaryTxtColor }}
                        />
                      )
                    ) : (
                      <PhoneMissedOutlinedIcon
                        sx={{ color: primaryTxtColor }}
                      />
                    )}
                    <Stack>
                      <Typography
                        variant="caption"
                        lineHeight={1}
                        fontWeight="bold"
                      >
                        {numOfTimes > 1 ? (
                          <Badge color="error" badgeContent={numOfTimes}>
                            <Box pr={2}>{call.from}</Box>
                          </Badge>
                        ) : (
                          <Box pr={2}>{call.from}</Box>
                        )}
                      </Typography>
                      <Typography variant="caption" color={primaryTxtColor}>
                        tried to call on {`${call.to}`}
                      </Typography>
                    </Stack>

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ flex: 1 }}
                    />
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      color={secondaryTxtColor}
                    >
                      {formatTime(call.created_at)}
                    </Typography>
                    <Box
                      border={`1px solid ${grey[300]}`}
                      borderRadius=" 3px 0 0 3px"
                      p={"3px"}
                      borderRight={0}
                    >
                      <Typography
                        fontWeight="bold"
                        fontSize="8px"
                        color={secondaryTxtColor}
                      >
                        {getAmPm(call.created_at)}
                      </Typography>
                    </Box>
                  </CallItemCard>
                </ListItemButton>
              );
            })}
          </Box>
        ))}
      </List>
    </Box>
  );
};
