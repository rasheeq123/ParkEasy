import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <Card >

        <CardMedia
          component="img"
          alt='Sample GIF'
          height="900"
          text="hello"
          image='https://cdn.dribbble.com/users/2118336/screenshots/12113942/media/ec72a5e052af7792a64a1f3fd156af28.gif'
          style={{
            borderRadius: '125px',
            padding: '5%',
            display: 'flex',
            justifyContent: 'center',

            // opacity:'0.8'
          }}

        />



        <Typography gutterBottom variant="h3" component="div" align='center' marginTop='1%'>
          Booking
        </Typography>
        <Box sx={{ alignItems: "center", margin: '5%', marginLeft: '22%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>

              <Card sx={{ maxWidth: 300, height: 350, backgroundColor: '#212529' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"

                    image="https://cdn.dribbble.com/users/730631/screenshots/2274680/media/9c377c62aa94b1181c3c6979792c396c.png"
                    borderRadius='500px'

                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={'whitesmoke'}>
                      Available Slots
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ marginTop: '-15px' }}>
                  <Button component={Link} to="/slotlist" variant='contained' size="medium" color="secondary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card sx={{ maxWidth: 300, height: 350, backgroundColor: '#212529' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"

                    image="https://cdn.dribbble.com/users/484320/screenshots/4461961/media/71d74f376b237f29c8a8a3bb35187ac9.jpg"
                    borderRadius='500px'

                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={'whitesmoke'}>
                      Book Slot
                    </Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ marginTop: '-15px' }}>
                  <Button component={Link} to="/bookslot" variant='contained' size="medium" color="secondary">
                    Click here
                  </Button>
                </CardActions>
              </Card>

            </Grid>
          </Grid>
        </Box>
      </Card>

    </div>





  )
}

export default Home