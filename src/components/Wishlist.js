import React from 'react';
import { Container, Stack, Divider, Typography, Box, Grid } from '@mui/material';
import { useWishlist } from '../context/WishlistContext';
import PackageItem from './PackageItem';
import heroBg from "../assets/houses.jpg";
import WishlistItem from './WishlistItem';

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Box 
        sx={{
          position: 'relative',
          width: '100%',
          height: '300px',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography 
          variant='h2' 
          sx={{ 
            color: 'white', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        >
          Wishlist
        </Typography>
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        />
      </Box>

      <Container maxWidth={"lg"} style={{ marginTop: "2rem", marginBottom: "2rem",minHeight:"100vh"}}>
        <Grid container spacing={5}>
          {wishlist.length > 0 ? (
            wishlist.map(item => (
              <Grid item xs={12} sm={6} md={5} lg={4} key={item.packageId}>
                <Box px={1}> 
                  <WishlistItem data={item}  />
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant='body1' sx={{my:5,mx:"auto"}}>
              Your wishlist is empty.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
