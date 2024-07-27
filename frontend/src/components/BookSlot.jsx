import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';
import slotData from './dummyData';
import * as Yup from 'yup';
import { Box, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, FormHelperText, Fade } from '@mui/material';
import { keyframes, styled } from '@mui/system';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for bounce animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const FormContainer = styled(Box)({
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(150, 150, 150, 0.9))', // Increased gradient intensity
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    maxWidth: '400px',
    backdropFilter: 'blur(8px)', // Blur effect for a frosted glass look
    border: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border
    opacity: 1, // Full opacity for better visibility
    animation: `${fadeIn} 1s ease-out, ${bounce} 2s ease infinite`, // Smooth entrance and bounce animation
  });
  
  const DarkRedButton = styled(Button)({
    background: 'linear-gradient(45deg, #C62828, #B71C1C)', // Dark red gradient
    borderRadius: '8px',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: 'linear-gradient(45deg, #B71C1C, #C62828)', // Reverse gradient on hover
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    width: '100%',
  });
const BookSchema = Yup.object().shape({
//    floor: Yup.number().required('Required'),

   slot: Yup.number().min(0, 'Invalid!')
   .required('Required'),

   vehicle: Yup.string().min(9, 'Invalid!')
   .max(12, 'Invalid!').required('Required'),
   
    time: Yup.date().required('Required')
   });

const BookSlot = () => {

    const [selectedFloor, setselectedFloor] = useState(0);
    const [slotsAvailable, setSlotsAvailable] = useState(slotData.filter(slotData => slotData.floor === selectedFloor).map(slotData => slotData.slot));


    const fetchbookedSlots = async () => {
        // const res = await fetch('http://localhost:5000/parkings/getall')
        const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/getall`)
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        const bookedslots = data.map(slotData => slotData.slot);
        setSlotsAvailable(slotsAvailable.filter(slotNum => !bookedslots.includes(slotNum) ))
    }
    useEffect(() => {
        fetchbookedSlots();
    }, [])

    const { setloggedIn } = useAppContext();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    const bookslot = useFormik({
        initialValues: {
            floor: 1,
            slot: 0,
            vehicle: '',
            user: currentUser._id,
            time: null
        },
        onSubmit: async (values, {resetForm}) => {
            console.log(values);
            const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/add`,
           // const res = await fetch('http://localhost:5000/parkings/add',
             {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'

                }
            });
            console.log(res.status)
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Booked Successfully'

                })
                setloggedIn(true);
                const data = await res.json();
                console.log(data);
                sessionStorage.setItem('parkings', JSON.stringify(data)); 
                resetForm();
                fetchbookedSlots();  
            }

            else { // yaha pe ye condution jab address me kuch glti kr denge tb chlegi, basically jab error occur hoga 
                Swal.fire({
                    icon: 'error', // error defaullt h yaha
                    title: 'Error',
                    text: 'Something went wrong!!'
                })

            }

        },
        validationSchema: BookSchema
    });

    const setFloor = async (e) => {
        bookslot.setFieldValue('floor', e.target.value);
        // console.log(bookslot.values);
        setselectedFloor(parseInt(e.target.value));
        const temp = slotData.filter(slotData => slotData.floor === parseInt(e.target.value)).map(slotData => slotData.slot)
        //const res = await fetch('http://localhost:5000/parkings/getall')
       const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/getall`)
        console.log(res.status);
        const data = await res.json();
        const bookedslots = data.map(slotData => slotData.slot);
        setSlotsAvailable(temp.filter(slotNum => !bookedslots.includes(slotNum) ))
    }

    return (

        <Box
    sx={{
     height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    backgroundImage: `url(${'/images/bookslot.gif'})`,
     
      // backgroundPosition: 'center',
    }}
  >
<Box
      sx={{
        py: 5,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black', // Black background
      }}
    >
      <Fade in={true} timeout={1000}>
        <FormContainer>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#333', mb: 2 }}>
            Book Slot
          </Typography>
          <form onSubmit={bookslot.handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="floor-label">Floor</InputLabel>
              <Select
                labelId="floor-label"
                id="floor"
                value={bookslot.values.floor}
                onChange={setFloor}
                label="Floor"
                sx={{ bgcolor: 'transparent' }} // Removed background color
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <MenuItem key={i} value={i}>{i}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel id="slot-label">Slot</InputLabel>
              <Select
                labelId="slot-label"
                id="slot"
                name="slot"
                value={bookslot.values.slot}
                onChange={bookslot.handleChange}
                label="Slot"
                sx={{ bgcolor: 'transparent' }} // Removed background color
              >
                <MenuItem value="">Select Slot</MenuItem>
                {slotsAvailable.map((slot, index) => (
                  <MenuItem key={index} value={slot}>{slot}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="vehicle"
              label="Vehicle No."
              variant="outlined"
              fullWidth
              margin="normal"
              value={bookslot.values.vehicle}
              onChange={bookslot.handleChange}
              error={bookslot.touched.vehicle && Boolean(bookslot.errors.vehicle)}
              helperText={bookslot.touched.vehicle && bookslot.errors.vehicle}
            />

            <TextField
              id="time"
              label="Time"
              variant="outlined"
              type="datetime-local"
              fullWidth
              margin="normal"
              value={bookslot.values.time}
              onChange={bookslot.handleChange}
              error={bookslot.touched.time && Boolean(bookslot.errors.time)}
              helperText={bookslot.touched.time && bookslot.errors.time}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <DarkRedButton type="submit" variant="contained">
              Submit
            </DarkRedButton>
          </form>
        </FormContainer>
      </Fade>
    </Box>
  

</Box>      
    )
}

export default BookSlot