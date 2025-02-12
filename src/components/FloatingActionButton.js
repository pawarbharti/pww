import React from "react";
import { Fab, Box, Tooltip, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { WhatsApp } from "@mui/icons-material";

const FloatingActionButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Tooltip title="Call Now" placement="left">
        <Fab
          aria-label="call"
          sx={{
            width: 45,
            height: 45,
          }}
          onClick={() => (window.location.href = "tel:+919910553531")}
        >
          <CallIcon sx={{ color: "#15B2F7" }} />
        </Fab>
      </Tooltip>

      <Tooltip title="Chat Now" placement="left">
        <Link
          href="https://wa.me/919910553531"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab
            aria-label="chat"
            sx={{
              width: 45,
              height: 45,
            }}
          >
            <WhatsApp sx={{ color: "#25d366" }} />
          </Fab>
        </Link>
      </Tooltip>
    </Box>
  );
};

export default FloatingActionButton;
