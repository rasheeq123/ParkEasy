import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';
import slotData from './dummyData';
import * as Yup from 'yup';
import { Box, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';


const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 400,
    width: '100%',
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(192, 192, 192, 0.9))',
    color: theme.palette.common.black,
  }));
  
  const StyledButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    color: theme.palette.common.white,
  }));


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
        const res = await fetch('http://localhost:5000/parkings/getall')
        // const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/getall`)
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
            // const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/parkings/add`,
            const res = await fetch('http://localhost:5000/parkings/add',
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
        const res = await fetch('http://localhost:5000/parkings/getall')
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
  background: 'url("/images/background.jpg") no-repeat center center',
  backgroundSize: 'cover',
}}
>
<StyledCard className="fade-in-up">
  <CardContent>
    <Typography variant="h4" gutterBottom sx={{textAlign: 'center' }} className="fade-in-up">Book Slot</Typography>
    <form onSubmit={bookslot.handleSubmit}>
      <FormControl fullWidth margin="normal" className="fade-in-up">
        <InputLabel id="floor-label">Floor</InputLabel>
        <Select
          labelId="floor-label"
          id="floor"
          value={bookslot.values.floor}
          onChange={setFloor}
          label="Floor"
        >
          {[...Array(11).keys()].map(floor => (
            <MenuItem key={floor} value={floor}>{floor}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" error={bookslot.touched.slot && Boolean(bookslot.errors.slot)}>
      <InputLabel id="slot-label">Slot</InputLabel>
      <Select
        labelId="slot-label"
        id="slot"
        name="slot"
        value={bookslot.values.slot}
        onChange={bookslot.handleChange}
        label="Slot"
      >
        <MenuItem value="">Select Slot</MenuItem>
        {slotsAvailable.map((slot) => (
          <MenuItem key={slot} value={slot}>
            {slot}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{bookslot.touched.slot && bookslot.errors.slot}</FormHelperText>
    </FormControl>

      <TextField
        fullWidth
        margin="normal"
        id="vehicle"
        label="Vehicle No."
        type="text"
        value={bookslot.values.vehicle}
        onChange={bookslot.handleChange}
        error={bookslot.touched.vehicle && Boolean(bookslot.errors.vehicle)}
        helperText={bookslot.touched.vehicle && bookslot.errors.vehicle}
        className="fade-in-up"
      />

      <TextField
        fullWidth
        margin="normal"
        id="time"
        label="Time"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        value={bookslot.values.time}
        onChange={bookslot.handleChange}
        error={bookslot.touched.time && Boolean(bookslot.errors.time)}
        helperText={bookslot.touched.time && bookslot.errors.time}
        className="fade-in-up"
      />

      <StyledButton type="submit" variant="contained" fullWidth sx={{ mt: 2 }} className="fade-in-up">
        Submit
      </StyledButton>
    </form>
  </CardContent>
</StyledCard>
</Box>
</Box>      
    )
}

export default BookSlot