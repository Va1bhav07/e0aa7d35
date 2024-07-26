import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const CallerAvatar = ({ from }) => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} />
      <Typography variant="h6">{from}</Typography>
    </Stack>
  );
};
