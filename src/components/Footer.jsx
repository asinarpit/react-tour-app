import React from 'react';
import { Box, Container, Typography, Link, Grid, List, ListItem } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid alignItems={"center"} container spacing={3}>
          {/* BonVoyage section */}
          <Grid item xs={12} md={3} textAlign="center" alignItems="center">
            <Typography variant="h6" gutterBottom>
              BonVoyage
            </Typography>
          </Grid>

          {/* About Us section */}
          <Grid item xs={12} md={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Company section */}
          <Grid item xs={12} md={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Typography variant="body1" color="textSecondary">
                  Lorem, ipsum.
                </Typography>
              </ListItem>
            </List>
          </Grid>

          {/* Support section */}
          <Grid item xs={12} md={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
              <ListItem sx={{ width: '100%' }}>
                <Link href="#">
                  FAQ
                </Link>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Link href="#">
                  Contact Us
                </Link>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Link href="#">
                  Privacy Policy
                </Link>
              </ListItem>
              <ListItem sx={{ width: '100%' }}>
                <Link href="#">
                  Terms of Service
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ my: 3 }}>
          <hr style={{ borderTop: '1px solid #ddd' }} />
        </Box>

        {/* Bottom text */}
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} BonVoyage. All rights reserved.
          <br />
          Made with ❤️ by <Link href="https://example.com">Your Name</Link>
        </Typography>
      </Container>
    </Box>
  );
}
