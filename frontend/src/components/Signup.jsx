import { useFormik } from 'formik';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required')
  .matches('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$', 'Password is invalid') ,      // yaha pe hum password me condition dene ke lie ki wo uppercase, lowercase and number include kre , chatgpt se  

  confirm : Yup.string() .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const Navigate= useNavigate();

  const signupform= useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },

    onSubmit: async(values, {resetform})=>{
      console.log(values);
      resetform();

      const res = await fetch('http://localhost:5000/user/add', {
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'content-Type' : 'application/json'
        }
  })
  console.log(res.status);
  if(res.status===200){
    Swal.fire({
      icon:'success',
                    title:'Registered Successfully',
                    text:'Login to continue'
                })
                Navigate('/login');
            }
            else{ // yaha pe ye condution jab address me kuch glti kr denge tb chlegi, basocally jab error occur hoga 
                Swal.fire({
                    icon:'error', // error defaullt h yaha
                    title:'Error',
                    text:'Something went wrong!!'
                })
            }
            //send values to backend
        },
        validationSchema: SignupSchema 
    });

  return (
    <div>
      <div className="py-5 vh-100 bg-body-secondary">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <h2 className="my-3">SignUp form</h2>
              <form onSubmit={signupform.handleSubmit}>

                <label>Name</label>

                <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.name && signupform.errors.name}</span> {/*touched islie bcoz jab submit kre tbhi wo batae ki short h pehle se type krte saathi naa bataye */}
                <input id="name" onChange={signupform.handleChange} value={signupform.values.name} type="text" className='form-control mb-3' />

                <label>Email</label>
                <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.email && signupform.errors.email}</span>
                <input id="email" onChange={signupform.handleChange} value={signupform.values.email} type="text" className='form-control mb-3' />


                <label>Password</label>
                <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.touched.password && signupform.errors.password}</span>
                <input id="password" onChange={signupform.handleChange} value={signupform.values.password} type="password" className='form-control mb-3' />

                <label>Confirm Password</label>
                <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }} >{signupform.errors.confirm}</span>
                <input id="confirm" onChange={signupform.handleChange} value={signupform.values.confirm} type="password" className='form-control mb-3' />

                <button type="submit" className="btn btn-primary">Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup