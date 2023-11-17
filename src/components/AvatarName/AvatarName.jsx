// BackgroundLetterAvatars.jsx
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#ccc", color: '#0E8750',
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,

  };
}

export default function BackgroundLetterAvatars({ userName }) {
  const avatarProps = stringAvatar(userName);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar {...avatarProps} />
      <span 
      style={{ 
        color: "#0E8750",
        fontFamily: "Nunito",
        fontSize: "18px",
        fontWeight: 600,
        }}>{userName}</span>
    </Stack>
  );
}
