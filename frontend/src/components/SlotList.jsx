import React, { useEffect, useState } from 'react'
import slotData from './dummyData'
import { NavLink, useHistory } from 'react-router-dom'
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const SlotList = () => {

    const [slotList, setSlotList] = useState([])

    const [existSlots, setExistSlots] = useState([]);

    const fetchSlots = async () => {
        //const res = await fetch('http://localhost:5000/parkings/getall')
        const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/getall`)
        console.log(res.status);
        const data = await res.json(); // data fetch krne ke lie
        console.table(data);
        setSlotList(data);
        const bookedSlots = data.map(slotData => slotData.slot);
        // console.log(bookedSlots);
        setExistSlots(
            slotData.filter(slot => (!bookedSlots.includes(slot.slot)))
        )
        // console.log(slotData.filter(slot => ( !bookedSlots.includes(slot.slot)  )));
    }
    useEffect(() => {

        fetchSlots();

    }, [])

    return (  
        <div style={{ 
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)', 
        minHeight: '190vh', // Ensure it covers the full viewport height
        backgroundAttachment: 'fixed', // Parallax effect
        backgroundSize: 'cover'
    }}>
            <header>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', py: 4, color: '#333' }}>
                        Slots Available
                    </Typography>
                </Container>
            </header>
            <Container>
                <Grid container spacing={2}>
                    {existSlots.map((item, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index}>
                            <Card
                                className="py-2 mt-4 text-center"
                                sx={{
                                    background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
                                    color: '#333',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Floor: {item.floor}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Slot No: {item.slot}</Typography>
                                    <NavLink to="/bookslot">
                                        <Button 
                                            sx={{ 
                                                textTransform: 'none', 
                                                borderRadius: '18px', 
                                                mt: 3, 
                                                mb: 1, 
                                                width: '70%', 
                                                fontSize: '15px', 
                                                py: 1, 
                                                backgroundColor: '#ff7e5f', 
                                                background: 'linear-gradient(to right, #ff7e5f, #feb47b)' ,
                                                color: 'black'
                                            }} 
                                            variant='contained' 
                                            color='warning'>
                                            Book
                                        </Button>
                                    </NavLink>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

        // <div>
        //     <header>
        //         <div  className="container">

        //             <h1 className='fw-bolder py-4'> <center>Slots Available</center></h1>
        //         </div>
        //     </header>
        //     <div style={{marginTop:'25%', zIndex:2}} className="container">
        //         <div className="row">
        //             {existSlots.map((item, index) => (
        //                 <div key={index} className="col-md-2">
        //                     <div className="card py-2 mt-4 text-center">
        //                         <h5>Floor: {item.floor}</h5>
        //                         <h5>Slot No: {item.slot}</h5>
        //                         <NavLink to="/bookslot">
        //                             <Button sx={{ textTransform: 'none', borderRadius: '18px', mt: 3, mb: 1, width: '70%', fontSize: '15px', py: 1 }} variant='contained' color='secondary'>Book</Button>



        //                         </NavLink>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
   
    

export default SlotList

// import React, { useEffect, useState } from 'react';
// import slotData from './dummyData';
// import { NavLink } from 'react-router-dom';
// import { Box, Button, Card, CardContent, Grid, Typography, Container } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     typography: {
//         fontFamily: 'Roboto, sans-serif',
//     },
// });

// const SlotList = () => {
//     const [slotList, setSlotList] = useState([]);
//     const [existSlots, setExistSlots] = useState([]);

//     const fetchSlots = async () => {
//         const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/getall`);
//         if (res.ok) {
//             const data = await res.json();
//             setSlotList(data);
//             const bookedSlots = data.map(slotData => slotData.slot);
//             setExistSlots(
//                 slotData.filter(slot => (!bookedSlots.includes(slot.slot)))
//             );
//         } else {
//             console.error('Failed to fetch slots:', res.status);
//         }
//     };

//     useEffect(() => {
//         fetchSlots();
//     }, []);

//     return (
//         <ThemeProvider theme={theme}>
//             <Box
//                 sx={{
//                     background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
//                     minHeight: '100vh',
//                     backgroundAttachment: 'fixed',
//                     backgroundSize: 'cover',
//                     py: 4
//                 }}
//             >
//                 <Container>
//                     <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
//                         Slots Available
//                     </Typography>
//                     <Grid container spacing={2}>
//                         {existSlots.map((item, index) => (
//                             <Grid item xs={12} sm={6} md={3} key={index}>
//                                 <Card
//                                     sx={{
//                                         background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
//                                         color: '#333',
//                                         borderRadius: '15px',
//                                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                         transition: 'transform 0.3s, box-shadow 0.3s',
//                                         '&:hover': {
//                                             transform: 'scale(1.05)',
//                                             boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
//                                         },
//                                     }}
//                                 >
//                                     <CardContent>
//                                         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                             Floor: {item.floor}
//                                         </Typography>
//                                         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                             Slot No: {item.slot}
//                                         </Typography>
//                                         <NavLink to="/bookslot" style={{ textDecoration: 'none' }}>
//                                             <Button
//                                                 sx={{
//                                                     textTransform: 'none',
//                                                     borderRadius: '18px',
//                                                     mt: 3,
//                                                     mb: 1,
//                                                     width: '100%',
//                                                     fontSize: '15px',
//                                                     py: 1,
//                                                     background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
//                                                     color: 'black'
//                                                 }}
//                                                 variant="contained"
//                                                 color="warning"
//                                             >
//                                                 Book
//                                             </Button>
//                                         </NavLink>
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </Box>
//         </ThemeProvider>
//     );
// };

// export default SlotList;
