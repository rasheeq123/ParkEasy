import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';

const Login = () => {
    
        const{ setloggedIn}= useAppContext();


  const loginform= useFormik ({
    initialValues: {
        
        email:'',
        password:''
    },
    onSubmit: async (values)=> {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/authenticate',{
            method: 'POST',
            body:JSON.stringify(values),
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(res.status);
            if(res.status===200){
                Swal.fire({
                    icon:'success',
                    title:'Login Successfully'
                    
                })
                setloggedIn(true);
                const data= await res.json();
                console.log(data);
                sessionStorage.setItem('user', JSON.stringify(data));
            }
        
            else if(res.status===400){
                Swal.fire({
                    icon:'error',
                    title:'Login failed',
                    text:'Email or password is invalid'
                    
                })
            }
            else{ // yaha pe ye condution jab address me kuch glti kr denge tb chlegi, basically jab error occur hoga 
                Swal.fire({
                    icon:'error', // error defaullt h yaha
                    title:'Error',
                    text:'Something went wrong!!'
                })
            
            }
    }
});


  return (
    <div className="py-5 vh-100 bg-body-secondary">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3">Login form</h2>

                        <form onSubmit={loginform.handleSubmit} >

                        
                        <label>Email</label>
                        <input id="email" onChange={loginform.handleChange} value={loginform.values.email} type="email" className='form-control mb-3' />
                        <label>Password</label>
                        <input id="password" onChange={loginform.handleChange} value={loginform.values.password} type="password" className='form-control mb-3' />

                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login