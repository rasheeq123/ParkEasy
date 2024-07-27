import React, { useState } from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
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
import { AccountCircle, Lock } from "@mui/icons-material";



const Login = () => {

  const navigate = useNavigate();
  const { setloggedIn } = useAppContext();
  const loginform = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      try {
        const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/user/authenticate`, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status);

        // Ensure the response is OK and contains JSON
        const contentType = res.headers.get('Content-Type');
        if (res.ok && contentType && contentType.includes('application/json')) {
          const data = await res.json();
          console.log(data);
          sessionStorage.setItem('user', JSON.stringify(data));
          setloggedIn(true);
          navigate("/slotlist");

          Swal.fire({
            icon: 'success',
            title: 'Login Successfully'
          });
        } else if (res.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Email or password is invalid'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong!!'
          });
        }
      }
      catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Network error or server is down'
        });
      }

      resetForm();
    }

    // onSubmit: async (values, { resetForm }) => {
    //   console.log(values);

    //   //const res = await fetch('http://localhost:5000/user/authenticate', 
    //   const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/user/authenticate`,
    //     {
    //     method: 'POST',
    //     body: JSON.stringify(values),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   console.log(res.status);
    //   if (res.status === 200) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Login Successfully'

    //     })
    //     const data = await res.json();
    //     console.log(data);
    //     sessionStorage.setItem('user', JSON.stringify(data));
    //     setloggedIn(true);
    //     navigate("/slotlist");
    //   }

    //   else if (res.status === 400) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Login failed',
    //       text: 'Email or password is invalid'

    //     })
    //   }
    //   else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Error',
    //       text: 'Something went wrong!!'
    //     })

    //   }
    //   resetForm();
    // }
  });

  return (

    <Box
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${'https://cdn.dribbble.com/users/1676501/screenshots/4617681/media/014d65eb106be77458344ef11c29adb0.gif'})`,
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
    }}
  >
     <Card sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '32%' }, boxShadow: 3, borderRadius: 2, opacity: 0.9}}>
      <CardContent>
        <Typography variant="h4" align="center" sx={{ opacity: 0.7, marginBottom: 3, marginTop:3,  fontFamily: 'Lato, sans-serif' }}>
         LOGIN PANEL
        </Typography>
        <Container maxWidth="sm">
          <form onSubmit={loginform.handleSubmit}>
            <TextField
              id="email"
              label="Email address"
              type="email"
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
              onChange={loginform.handleChange}
              value={loginform.values.email}
              error={Boolean(loginform.errors.email)}
              helperText={loginform.errors.email}
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
              onChange={loginform.handleChange}
              value={loginform.values.password}
              error={Boolean(loginform.errors.password)}
              helperText={loginform.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              
              fullWidth
              sx={{ textTransform:'none',borderRadius:'78px',mt:3,mb:1,width:'100%',fontSize:'15px',py:1,   }}  color='secondary'
            >
              <Typography sx={{fontFamily: 'Lato, sans-serif'}} variant="h6">Login</Typography>
            </Button>
            <Typography align="center" variant="body2">
              Don't have an account?{" "}
              <NavLink to="/signup">Create account</NavLink>
            </Typography>
          </form>
        </Container>
      </CardContent>
    </Card>
  </Box>      
    )
  }

export default Login