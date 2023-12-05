import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Home = () => {
  return (
    <div>

      <Card>

        <CardMedia
          component="img"
          alt='Sample GIF'
          height="900"


          image='https://cdn.dribbble.com/users/2118336/screenshots/12113942/media/ec72a5e052af7792a64a1f3fd156af28.gif'
          style={{
            borderRadius: '125px',
            padding: '5%',
            display: 'flex',
            justifyContent: 'center',
            // opacity:'0.8'
          }}

        />

      </Card>
      <Box sx={{ width: '100%' , align-items:'center'}}>
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
                  <Typography gutterBottom variant="h5" component="div">
                    Available Slots
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions sx={{ marginTop: '-15px' }}>
                <Button variant='contained' size="medium" color="secondary">
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

                  image="https://cdn.dribbble.com/users/730631/screenshots/2274680/media/9c377c62aa94b1181c3c6979792c396c.png"
                  borderRadius='500px'

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Available Slots
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions sx={{ marginTop: '-15px' }}>
                <Button variant='contained' size="medium" color="secondary">
                  Explore
                </Button>
              </CardActions>
            </Card>
          
        </Grid>
      </Grid>
      </Box>

    </div>





  )
}

export default Home