import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import video from "../about_video.mp4"

const Home = () => {
  return (
    <>
    
    <div
        className="bghome"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertical centering
          alignItems: "center", // Horizontal centering
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/A14.png')`,
          
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: 'center',
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          mt={0}
          sx={{ color: "white", textAlign: "center", fontSize: "10vw",textShadow: '5px 5px 5px rgba(0, 0, 0, 0.8)' }}
          // sx={{ color: "rgb(121, 158, 42)", textAlign: "center", fontSize: "10vw",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          ParkEasy{" "}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "white", textAlign: "center", fontSize: "3vw",textShadow: '4px 4px 4px rgba(0, 0, 0, 0.8)' }}
        >
          Paving the Way for Hassle-Free Parking
        </Typography>
      </div>
        <Typography variant="h2" textAlign={"center"} sx={{ mt: 5,mb:10 }}>
          Book your parking slot!
        </Typography>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <Grid xs={6} > */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  // mt: 5,
                  width: "480px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Typography variant="h3" fontWeight='semibold' mb={2}>Explore Slots</Typography>
                <Typography variant="h4" mb={0}>Uncover the possibilities! Navigate through available slots at various positions effortlessly!</Typography>
                <NavLink to="/user">
                <Button sx={{textTransform:'none',borderRadius:'28px',mt:4,width:'60%',fontSize:'25px',py:1}} variant='contained' color='primary'>Get a free diagnosis</Button>
                </NavLink>
              </Box>
            </Grid>
            {/* <Grid xs={6}> */}
            <Grid item xs={12} sm={6}>
              <Container
               sx={{display: "flex",
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/G1.jpg')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  minHeight: 500,
                  width:'100%',
                  // m:5,
                  // mt:10,
                  // backgroundSize: '100% 100%', // Cover the entire Paper
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  }}
                >
                </Container>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{mt:18,}}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            
            {/* <Grid xs={6}> */}
            <Grid item xs={12} sm={6}>
              <Container
               sx={{display: "flex",
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/images/G2.jpg')`,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  minHeight: 500,
                  width:'100%',
                  // m:5,
                  // mt:10,
                  // backgroundSize: '100% 100%', // Cover the entire Paper
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                  }}
                >
                </Container>
            </Grid>
            {/* <Grid xs={6}> */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  // m:10,
                  width: "480px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Typography variant="h3" mb={2} fontWeight='semibold'>Book Slot</Typography>
                <Typography mb={0} variant="h4">Your parking, your way! Choose your floor, slot number, input vehicle details, and preferred time – effortlessly secure your parking spot with a seamless booking experience. Your stress-free parking reservation begins here!</Typography>
                <NavLink to="/user">
                <Button sx={{textTransform:'none',borderRadius:'28px',mt:4,mb:1,width:'60%',fontSize:'25px',py:1}} variant='contained' color='primary'>Get a free treatment</Button>
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
    
    </>
  )
}

export default Home