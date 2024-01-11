import React from 'react'
import {  Grid, Paper, Typography } from '@mui/material'

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
        
      {/*--------------- container started ------------------ */}
      
      <Grid container>
          <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
          
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Explore Slots</Typography>
          <Typography variant="body2">Uncover the possibilities! Navigate through available slots at various positions effortlessly!</Typography>
        </Paper>
          </Grid>

          {/* second container */}

          <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
          
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Book Slot</Typography>
          <Typography variant="body2">Your parking, your way! Choose your floor, slot number, input vehicle details, and preferred time – effortlessly secure your parking spot with a seamless booking experience. Your stress-free parking reservation begins here!</Typography>
        </Paper>
          </Grid>


        </Grid>

        
        
    
    </>
  )
}


export default Home