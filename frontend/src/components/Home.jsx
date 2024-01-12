import React from 'react'
import {  Grid, Paper, ThemeProvider, Typography, createTheme, styled } from '@mui/material'


const theme = createTheme();

const StyledPaper = styled(Paper)({
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    
      transform: 'scale(0.9)', // Adjust the scale factor as needed
    
  },
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.2s ease-in-out', // Added transition for the image
    transform: 'scale(1)', // Set the default scale
  },
});


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
      <ThemeProvider theme={theme}>
      <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6} >
          <StyledPaper>
          
          
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Explore Slots</Typography>
          <Typography variant="body2">Uncover the possibilities! Navigate through available slots at various positions effortlessly, in a single click!</Typography>
          
          </StyledPaper>
           </Grid>
          

          {/* second container */}

          <Grid item xs={12} sm={6} md={6}  >
          <StyledPaper>
          
          
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Book Slot</Typography>
          <Typography variant="body2"> Choose your floor, slot number, input vehicle details, preferred time & effortlessly secure your parking spot with a seamless booking experience. </Typography>
       
        </StyledPaper>
          </Grid>


        </Grid>
        </ThemeProvider>

        
        
    
    </>
  )
}


export default Home