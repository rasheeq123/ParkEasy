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

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully'

        })
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        setloggedIn(true);
        navigate("/slotlist");
      }

      else if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: 'Email or password is invalid'

        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong!!'
        })

      }
      resetForm();
    }
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
     <Card sx={{ width: { xs: '90%', sm: '70%', md: '50%', lg: '32%' }, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h4" align="center" sx={{ opacity: 0.7 }}>
          Welcome back!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ opacity: 0.7, mb: 4 }}
          gutterBottom
        >
          Please login to your account
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
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 1, textTransform: "none" }}
            >
              <Typography variant="h6">Submit</Typography>
            </Button>
            <Typography align="center" variant="body1">
              Don't have an account?{" "}
              <NavLink to="/signup">Create account</NavLink>
            </Typography>
          </form>
        </Container>
      </CardContent>
    </Card>
  </Box>




      // <div>
      //   <div className="container-fluid py-5 d-flex justify-content-center align-items-center">
      //     <div className="row w-100">
      //       {/* Left Column for Image */}
      //       <div className="col-md-6">
      //         <img src="https://cdn.dribbble.com/users/1676501/screenshots/4617681/media/014d65eb106be77458344ef11c29adb0.gif" className="img-fluid background-image-login" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      //       </div>
        
      //       {/* Right Column for Login Form */}
      //       <div className="col-md-6 " style={{ paddingLeft: '9%' }}>
      //         <div className="card card-design-login shadow mx-5 ">
      //           <div className="card-body">
      //             <h2 className=" text-center text-black">Login</h2>
      //             <form onSubmit={loginform.handleSubmit} className="needs-validation">
                  
      //               <div className="mb-3">
      //                 <label htmlFor="email" className="form-label fs-5 fw-semibold text-muted">Email</label>
      //                 <input
      //                   id="email"
      //                   onChange={loginform.handleChange}
      //                   value={loginform.values.email}
      //                   type="email"
      //                   className="form-control p-3 rounded"
      //                   required
      //                 />
      //               </div>
      //               <div className="mb-3">
      //                 <label htmlFor="password" className="form-label fs-5 fw-semibold text-muted">Password</label>
      //                 <input
      //                   id="password"
      //                   onChange={loginform.handleChange}
      //                   value={loginform.values.password}
      //                   type="password"
      //                   className="form-control p-3 rounded"
      //                   required
      //                 />
      //               </div>
      //             <div className="d-grid">
      //               <button type="submit" className="btn btn-primary btn-lg rounded-pill">
      //                 Submit
      //               </button>
      //             </div>
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //     </div>
      //   </div>
      //</div>
  
  
        //<div className=" py-5 vh-100 d-flex bg-dark" > */}
            // <img src='\images\A1.png' className='background-image-login'/>
            //     <div className="col-md-6 ms-auto  ">
            //         <div className="card card-design-login  shadow">
            //             <div className="card-body">
            //                 <h2 className="my-3"><center>Login form</center></h2>
            //                 <form onSubmit={loginform.handleSubmit} >
            //                 <label className='fs-5 fw-semibold'>Email</label>
            //                 <input id="email" onChange={loginform.handleChange} value={loginform.values.email} type="email" className='form-control mb-3 shadow p-3 mb-5  rounded' />
            //                 <label className='fs-5 fw-semibold'>Password</label>
            //                 <input id="password" onChange={loginform.handleChange} value={loginform.values.password} type="password" className='form-control mb-3 shadow p-3 mb-5 bg-body-tertiary rounded' />
            //                 <button type="submit" className="btn btn-primary">Submit</button>
            //                 </form>
            //             </div>
            //         </div>
            //     </div>
            // </div> 
      
    )
  }

export default Login