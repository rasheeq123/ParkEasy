import React from 'react'
import {Card, CardMedia} from '@mui/material'
const Home = () => {
  return (
    
    // <div className="py-5 vh-100 bg-body-secondary">
    //         <div className="col-lg-6 mx-auto">
    //             <div className="card card-home">
    //                     <img src="https://cdn.dribbble.com/users/2560254/screenshots/5701893/media/c62a836c1cef8fd2880d78e25927e650.gif" alt="Images" />
    //             </div>
    //         </div>
    //     </div>
    // <div>
    //   <div className="container">
        
    //   <div className="col-lg-6 mx-auto py-5">
    //   <img src="https://cdn.dribbble.com/users/2560254/screenshots/5701893/media/c62a836c1cef8fd2880d78e25927e650.gif" alt="Images" />
    //    </div>
    //   </div>
    // </div>
    <Card>
      <CardMedia
      component="img"
      alt='Sample GIF'
      height="900"
      image='https://cdn.dribbble.com/users/2560254/screenshots/5701893/media/c62a836c1cef8fd2880d78e25927e650.gif'
      style={{ 
        borderRadius: '125px',
        padding: '3%', 
        display: 'flex',
        justifyContent: 'center',
        // opacity:'0.8'
        
      }}
      />

    </Card>
  )
}

export default Home