import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

function Head() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const getAppBarBackground = () => {
    if (location.pathname === '/') {
      return isScrolled ? "#259b92" : "transparent";
    } else {
      return "#259b92"; 
    }
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, zIndex: 2, width: "100%", zIndex: "999" }}>
      <AppBar position="static" sx={{ background: getAppBarBackground(), boxShadow: "none" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
          <Box className="header-title" sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ color: 'white', textShadow: 'revert-layer' }}>
              BonVoyage
            </Typography>
            <div style={{ width: "300px", textAlign: "center", display: "flex", justifyContent: "space-between", fontFamily: 'sans-serif', paddingInline: "40px" }}>

              <Link to="/">
                <Button sx={{ fontFamily: 'sans-serif', fontSize: "0.8rem", fontWeight: "600", color: "white" }} variant="">Home</Button>
              </Link>

              <Link to="/package">
                <Button sx={{ fontFamily: 'sans-serif', fontSize: "0.8rem", fontWeight: "600", color: "white" }} variant="">Package</Button>
              </Link>

              <Link to="/faq">
                <Button sx={{ fontFamily: 'sans-serif', fontSize: "0.8rem", fontWeight: "600", color: "white" }} variant="">FAQ</Button>
              </Link>

              <Link to="/package/wishlist">
                <Button sx={{ fontFamily: 'sans-serif', fontSize: "0.8rem", fontWeight: "600", color: "white" }} variant="">Wishlist</Button>
              </Link>

            </div>
          </Box>
          <Button variant="" sx={{ color: 'Black', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', fontSize: "0.8rem", color: "white", fontWeight: "600" }}>Login / Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Head;
