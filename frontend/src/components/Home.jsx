import React from 'react'
import {  Button, Grid, Paper, ThemeProvider, Typography, createTheme, styled } from '@mui/material'
import {NavLink} from 'react-router-dom'

const theme = createTheme();

const StyledPaper = styled(Paper)({
  padding: theme.spacing(1),
  border: '1 px solid black',
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
  width: '60%', // Adjust the width as needed
  margin: 'auto', // Center the Paper within the Grid item
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
      <Grid container  alignItems="stretch" justifyContent="center">
          <Grid item xs={12} sm={4}  md={4} >
          <StyledPaper>
          
          
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Explore Slots</Typography>
          <Typography variant="body2">Uncover the possibilities! Navigate through available slots at various positions effortlessly, in a single click!</Typography>
          <NavLink to="/slot">
                <Button sx={{textTransform:'none',borderRadius:'18px',mt:3,mb:1,width:'30%',fontSize:'15px',py:1}} variant='contained' color='secondary'>View Slots</Button>
                </NavLink>
          </StyledPaper>
           </Grid>
          

          {/* second container */}

          <Grid item xs={12} sm={4} md={4}  >
          <StyledPaper>
          
          
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Book Slot</Typography>
          <Typography variant="body2"> Choose your floor, slot number, input vehicle details, preferred time & effortlessly secure your parking spot with a seamless booking experience. </Typography>
          <NavLink to="/bookslot">
                <Button sx={{textTransform:'none',borderRadius:'18px',mt:3,mb:1,width:'30%',fontSize:'15px',py:1}} variant='contained' color='secondary'>Book Slot</Button>
                </NavLink>
        </StyledPaper>
          </Grid>

          {/* --------------third container */}

          <Grid item xs={12} sm={4}  md={4}  >
          <StyledPaper>
          <img src="https://cdn.dribbble.com/users/2548965/screenshots/5747061/media/a1f6a7b3d1f799410657409c1a49f270.jpg" alt="Container 2" style={{ width: '100%', marginBottom: 10 }} />
          <Typography variant="h6">Book Slot</Typography>
          <Typography variant="body2"> Choose your floor, slot number, input vehicle details, preferred time & effortlessly secure your parking spot with a seamless booking experience. </Typography>
          <NavLink to="/bookslot">
                <Button sx={{textTransform:'none',borderRadius:'18px',mt:3,mb:1,width:'30%',fontSize:'15px',py:1}} variant='contained' color='secondary'>Book Slot</Button>
                </NavLink>
        </StyledPaper>
          </Grid>


        </Grid>
        </ThemeProvider>

        
        
    
    </>
  )
}


export default Home