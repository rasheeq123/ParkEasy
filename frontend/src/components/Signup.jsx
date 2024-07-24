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
import { useFormik } from 'formik';
import React from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

// import { BeatLoader } from 'react-spinners';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required')
    .matches('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$', 'Password is invalid'),      // yaha pe hum password me condition dene ke lie ki wo uppercase, lowercase and number include kre , chatgpt se  

  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const navigate = useNavigate();

  const signupform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-Type': 'application/json'
        }
      })
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully',
          text: 'Login to continue'
        })
        navigate('/login');
        resetForm();
      }
      else { // yaha pe ye condution jab address me kuch glti kr denge tb chlegi, basocally jab error occur hoga 
        Swal.fire({
          icon: 'error', // error defaullt h yaha
          title: 'Error',
          text: 'Something went wrong!!'
        })
      }
      //send values to backend
    },
    validationSchema: SignupSchema
  });

  return (

    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${'/images/signup.mp4'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <video
        autoPlay
        loop
        muted style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          objectFit: 'cover', // Cover the entire area without losing the aspect ratio
          top: 0,
          left: 0,
          zIndex: -1,
        }}>
        <source src="/images/signup.mp4" type="video/mp4" />
      </video>
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
            <form onSubmit={signupform.handleSubmit}>
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
    </Box>
    // <div>

    //   <div className='py-5 vh-100' >
    //     <div className="col-md-4 mx-auto py-5">
    //       <div className="card ">
    //         <div className="card-body">
    //           <h2 className="my-3"><center>SignUp form</center></h2>
    //           <form onSubmit={signupform.handleSubmit}>

    //             <label className='fs-6 fw-medium'>Name</label>

    //             <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.name && signupform.errors.name}</span> {/*touched islie bcoz jab submit kre tbhi wo batae ki short h pehle se type krte saathi naa bataye */}
    //             <input id="name" onChange={signupform.handleChange} value={signupform.values.name} type="text" className='form-control mb-3 shadow p-3 mb-2 bg-body-tertiary rounded' />

    //             <label className='fs-6 fw-medium'>Email</label>
    //             <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.email && signupform.errors.email}</span>
    //             <input id="email" onChange={signupform.handleChange} value={signupform.values.email} type="text" className='form-control  shadow p-3 mb-2 bg-body-tertiary rounded' />


    //             <label className='fs-6 fw-medium'>Password</label>
    //             <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.password && signupform.errors.password}</span>
    //             <input id="password" onChange={signupform.handleChange} value={signupform.values.password} type="password" className='form-control shadow p-3 mb-2 bg-body-tertiary rounded' />

    //             <label className='fs-6 fw-medium'>Confirm Password</label>
    //             <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.errors.confirm}</span>
    //             <input id="confirm" onChange={signupform.handleChange} value={signupform.values.confirm} type="password" className='form-control shadow p-3 mb-2 bg-body-tertiary rounded' />

    //             <button type="submit" className="btn btn-primary">Submit</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Signup