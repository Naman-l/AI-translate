import React, { useState } from "react";
import { Box, Typography, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import {useTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttons = [
    {
      title: "Home",
      to: "/home",
    },
    {
      title: "Transate",
      to: "/translate",
    },
    {
      title: "Contact Us",
      to: "/contact",
    },

  ]

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        opacity: 0.9,
        position: 'fixed',
        zIndex: 1041,
        boxShadow: 3,
        top: '0px',
        left: '0px',
        right: '0px',
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        color: '#000',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/home")}
      >
        <img src={logo} alt="logo" style={{ height:'30px', cursor: 'pointer' }} />
      </Box>
      {isSmallScreen ? (
        <>
          <IconButton
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ padding: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            sx={{
              // '& .MuiDrawer-root': {
              //     position: 'absolute',
              //     top: '50px'
              // },
              '& .MuiPaper-root': {
                  position: 'absolute',
                  top: '52px'
              },
            }}
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            BackdropProps={{ invisible: true }}
          >
            {buttons.map((button, index) => {
              return (
              <ListItem key={index} onClick={() => { navigate(button.to); setDrawerOpen(false); }}>
                <ListItemText sx={{"&:hover": { color: "orange" }}} primary={button.title} />
              </ListItem>
            )})}
            </Drawer>
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {buttons.map((button, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                sx={{ padding: '5px',marginRight: '10px', cursor: 'pointer', "&:hover": { color: "orange" } }}
                onClick={() => navigate(button.to)}
              >
                {button.title}
              </Typography>
          )})}
        </Box>
      )}
    </Box>
  );
};

export default Header;

