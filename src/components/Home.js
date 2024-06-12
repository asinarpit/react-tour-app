import { Search, SentimentDissatisfied, WidthFull } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Paper,
} from "@mui/material";
import React from "react";
import "./Home.css";
import Head from "./Head";
import { FaFlagCheckered, FaRegHandshake } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdFlightTakeoff } from "react-icons/md";
import Parallax from "./Parallax";
import photo from '../assets/team2.jpg'


import data from "./data.json"
import PopularDestinationCard from "./PopularDestinationCard";

const Home = () => {

  const debounceSearch = () => {
    // Debounce search function implementation
  }

  return (
    <div>
      <Head />
      <Parallax />
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="orange">3 steps of the perfect tour</Typography>
        <Typography maxWidth={"800px"} margin={"0 auto"} variant="h4" color="#259b92" sx={{ mt: 2 }}>Your gateway to seamless journeys and unforgettable adventures</Typography>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, textAlign: 'center',height:"100%" }}>
              <FaFlagCheckered style={{fontSize:"1.5rem",color:"#259b92"}} className="icon" />
              <Typography maxWidth="200px" margin="0 auto" variant="h6">Tell Us What You Want To Do.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, textAlign: 'center',height:"100%" }}>
              <IoLocation style={{fontSize:"1.5rem",color:"#259b92"}} className="icon" />
              <Typography maxWidth="200px" margin="0 auto" variant="h6">Share Your Travel Locations.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, textAlign: 'center',height:"100%" }}>
              <MdFlightTakeoff style={{fontSize:"1.5rem",color:"#259b92"}} className="icon" />
              <Typography maxWidth="200px" margin="0 auto" variant="h6">Share Your Travel Preference.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, textAlign: 'center',height:"100%" }}>
              <FaRegHandshake style={{fontSize:"1.5rem",color:"#259b92"}} className="icon" />
              <Typography maxWidth="200px" margin="0 auto" variant="h6">We Are Trusted Agency.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 20 }}>
        <Typography variant="h5" align="center" fontWeight={"500"} gutterBottom>Popular Destinations</Typography>
        <Grid sx={{my:4}} container spacing={2}>
            {data.map((item)=>(
                <PopularDestinationCard data={item}/>
            ))}
        </Grid>
      </Container>

      <Container sx={{ mt: 10 }}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent>
              <Typography component="div" variant="h4">
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Welcome to our world of boundless exploration and discovery, where the journey is just as enriching as the destination. As avid travelers ourselves, we understand the transformative power of stepping outside our comfort zones and immersing ourselves in new cultures, landscapes, and experiences. Our passion for travel is deeply rooted in the belief that every journey has the potential to broaden our horizons, deepen our understanding of the world, and forge connections that transcend borders. With a relentless pursuit of adventure and a commitment to sustainability, we strive to curate unforgettable travel experiences that not only leave a lasting impression on our travelers but also contribute positively to the communities and environments we visit.
                <br />
                At the heart of our ethos lies a profound respect for the diversity of our planet and its inhabitants. We recognize that travel is a privilege and endeavor to approach it with humility, curiosity, and an open mind. Whether you're embarking on a solo expedition, seeking family-friendly escapades, or planning a romantic getaway, we're here to guide you every step of the way. Our team of seasoned travel experts is dedicated to crafting bespoke itineraries tailored to your unique preferences, interests, and budget, ensuring that each trip is as extraordinary as you are.
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 400, borderRadius: 2, m: 2 }}
            image={photo}
            alt="Team Photo"
          />
        </Card>
      </Container>
    </div>
  );
};

export default Home;
