import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';
import slotData from './dummyData';
import * as Yup from 'yup';

import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Card,
    CardContent,
  } from "@mui/material";
  import { AccountCircle, Email, Lock } from "@mui/icons-material";


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
     
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    backgroundImage: `url(${'/images/bookslot.gif'})`,
     
      // backgroundPosition: 'center',
    }}
  >
    <Card  sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '35%' }, boxShadow: 3, borderRadius: 2, zIndex:20, opacity: 0.93}}>
        <CardContent>
          <Typography variant="h4" align="center" sx={{ opacity: 0.7, fontFamily: 'Lato, sans-serif'}}>
            Create your Account
          </Typography>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ opacity: 0.7, mb: 3 }}
          >
            
          </Typography>
          <Container maxWidth="sm">
            <form onSubmit={bookslot.handleSubmit}>
              <TextField
                id="name"
                label="Username"
                type="text"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <AccountCircle />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupform.handleChange}
                value={signupform.values.name}
                error={Boolean(
                  signupform.touched.name && signupform.errors.name
                )}
                helperText={signupform.touched.name && signupform.errors.name}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupform.handleChange}
                value={signupform.values.email}
                error={Boolean(
                  signupform.touched.email && signupform.errors.email
                )}
                helperText={signupform.touched.email && signupform.errors.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Lock />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupform.handleChange}
                value={signupform.values.password}
                error={Boolean(
                  signupform.touched.password && signupform.errors.password
                )}
                helperText={
                  signupform.touched.password && signupform.errors.password
                }
              />
              <TextField
                id="confirm"
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Lock />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={signupform.handleChange}
                value={signupform.values.confirm}
                error={Boolean(
                  signupform.touched.confirm && signupform.errors.confirm
                )}
                helperText={
                  signupform.touched.confirm && signupform.errors.confirm
                }
              />
              <Button
                type="submit"
                variant="contained"
                
                fullWidth
                sx={{ textTransform:'none',borderRadius:'78px',mt:3,mb:1,width:'100%',fontSize:'15px',py:1}}  color='secondary'
              >
                <Typography sx={{fontFamily: 'Lato, sans-serif'}} variant="h6">Create your account</Typography>
              </Button>
              <Typography align="center" variant="body1" sx={{fontFamily: 'Lato, sans-serif'}}>
                Already have an account? <NavLink to="/login">Login</NavLink>
              </Typography>
            </form>
          </Container>
        </CardContent>
      </Card>
        {/* <div className="py-5 vh-100 ">
            <div className="col-md-12 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3">Book Slot</h2>
                        <form onSubmit={bookslot.handleSubmit}>
                            <label  >Floor</label>
                            

                            <select className='form-control mb-3' id="floor" onChange={setFloor} value={bookslot.values.floor}>
                                <option value={0}> 0</option>
                                <option value={1}> 1</option>
                                <option value={2}> 2</option>
                                <option value={3}> 3</option>
                                <option value={4}> 4</option>
                                <option value={5}> 5</option>
                                <option value={6}> 6</option>
                                <option value={7}> 7</option>
                                <option value={8}> 8</option>
                                <option value={9}> 9</option>
                                <option value={10}>10</option>


                            </select>


                            <label>Slot</label>
                            <span style={{fontSize: 10, marginLeft:'10px', color: 'red'}} >{bookslot.touched.slot && bookslot.errors.slot}</span> 
                            <select className='form-control mb-3' id="slot" onChange={bookslot.handleChange} value={bookslot.values.slot}>
                                <option value="">Select Slot</option>
                                {
                                    slotsAvailable.map(slot => (
                                        <option value={slot}>{slot}</option>
                                    ))
                                }



                            </select>
                            

                            <label>Vehicle No. </label>
                            <span style={{fontSize: 10, marginLeft:'10px', color: 'red'}} >{bookslot.touched.vehicle && bookslot.errors.vehicle}</span> 

                            <input id="vehicle" type="text" className='form-control mb-3' onChange={bookslot.handleChange} value={bookslot.values.vehicle} />

                            <label>Time </label>
                            <span style={{fontSize: 10, marginLeft:'10px', color: 'red'}} >{bookslot.touched.time && bookslot.errors.time}</span> 
                            <input id="time" type="datetime-local" className='form-control mb-3' onChange={bookslot.handleChange} value={bookslot.values.time} />

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}
        </Box>
    )
}

export default BookSlot