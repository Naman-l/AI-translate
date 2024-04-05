import { Box, Typography, colors, css } from "@mui/material"
import React from "react";

const Header = () => {

    // improve header css
    // height choti karni hai
    // better background colors
    // add nav items(contacts us, home , tranlsate) top right, route

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 24px 10px 24px",
        color:'#000',
        width:'100%'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2.5,
          cursor: "pointer",
        }}
      >
        accounts header
      </Box>
    </Box>
  );
};

export default Header;
