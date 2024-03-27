import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useAuth } from '../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';


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

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
    confirm: '',
  },
  validationSchema: SignupSchema,
  onSubmit: async (values) => {
    setIsRegistering(true);
    await doCreateUserWithEmailAndPassword(values.email, values.password);
  },
});


const Signup = () => {
  const navigate = useNavigate();

   
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

  

  return (
      <>
          {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

          <main className="w-full h-screen flex self-center place-content-center place-items-center">
              <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                  <div className="text-center mb-6">
                      <div className="mt-2">
                          <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                      </div>

                  </div>
                  <form onSubmit={formik.handleSubmit}
                      className="space-y-4"
                  >
                      <div>
                          <label className="text-sm text-gray-600 font-bold">
                              Email
                          </label>
                          <input
                              type="email"
                              autoComplete='email'
                              required
                              value={email} onChange={(e) => { setEmail(e.target.value) }}
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                          />
                      </div>

                      <div>
                          <label className="text-sm text-gray-600 font-bold">
                              Password
                          </label>
                          <input
                              disabled={isRegistering}
                              type="password"
                              autoComplete='new-password'
                              required
                              value={password} onChange={(e) => { setPassword(e.target.value) }}
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                          />
                      </div>

                      <div>
                          <label className="text-sm text-gray-600 font-bold">
                              Confirm Password
                          </label>
                          <input
                              disabled={isRegistering}
                              type="password"
                              autoComplete='off'
                              required
                              value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                          />
                      </div>

                      {errorMessage && (
                          <span className='text-red-600 font-bold'>{errorMessage}</span>
                      )}

                      <button
                          type="submit"
                          disabled={isRegistering}
                          className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                      >
                          {isRegistering ? 'Signing Up...' : 'Sign Up'}
                      </button>
                      <div className="text-sm text-center">
                          Already have an account? {'   '}
                          <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                      </div>
                  </form>
              </div>
          </main>
      </>
  )
}

//   const signupform = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: ''
//     },

//     onSubmit: async (values, { resetForm }) => {
//       console.log(values);
      
//       const res = await fetch('http://localhost:5000/user/add', 
//       // const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/user/add`, 
//       {
//         method: 'POST',
//         body: JSON.stringify(values),
//         headers: {
//           'content-Type': 'application/json'
//         }
//       })
//       console.log(res.status);
//       if (res.status === 200) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Registered Successfully',
//           text: 'Login to continue'
//         })
//         navigate('/login');
//         resetForm();
//       }
//       else { 
//         Swal.fire({
//           icon: 'error', 
//           title: 'Error',
//           text: 'Something went wrong!!'
//         })
//       }
//       //send values to backend
//     },
//     validationSchema: SignupSchema
//   });

//   return (
//     <div>
      
//       <div className='py-5 vh-100' >
//         <div className="col-md-4 mx-auto py-5">
//           <div className="card ">
//             <div className="card-body">
//               <h2 className="my-3"><center>SignUp form</center></h2>
//               <form onSubmit={signupform.handleSubmit}>

//                 <label className='fs-6 fw-medium'>Name</label>

//                 <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.name && signupform.errors.name}</span> {/*touched islie bcoz jab submit kre tbhi wo batae ki short h pehle se type krte saathi naa bataye */}
//                 <input id="name" onChange={signupform.handleChange} value={signupform.values.name} type="text" className='form-control mb-3 shadow p-3 mb-2 bg-body-tertiary rounded' />

//                 <label className='fs-6 fw-medium'>Email</label>
//                 <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.email && signupform.errors.email}</span>
//                 <input id="email" onChange={signupform.handleChange} value={signupform.values.email} type="text" className='form-control  shadow p-3 mb-2 bg-body-tertiary rounded' />


//                 <label className='fs-6 fw-medium'>Password</label>
//                 <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.password && signupform.errors.password}</span>
//                 <input id="password" onChange={signupform.handleChange} value={signupform.values.password} type="password" className='form-control shadow p-3 mb-2 bg-body-tertiary rounded' />

//                 <label className='fs-6 fw-medium'>Confirm Password</label>
//                 <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.errors.confirm}</span>
//                 <input id="confirm" onChange={signupform.handleChange} value={signupform.values.confirm} type="password" className='form-control shadow p-3 mb-2 bg-body-tertiary rounded' />

//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Signup