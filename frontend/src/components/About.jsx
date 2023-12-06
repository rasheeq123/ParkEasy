import { Card, CardMedia } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Card >

<CardMedia
  component="img"
  alt='Sample GIF'
  height="1000"
  text="hello"
  image='https://cdn.dribbble.com/users/330915/screenshots/4870196/media/480eaa7901b7b263750168d478e1ab47.jpg'
  style={{
    borderRadius: '125px',
    padding: '5%',
    display: 'flex',
    justifyContent: 'center',

    // opacity:'0.8'
  }}

/>
</Card>
    </div>
  )
}

export default About