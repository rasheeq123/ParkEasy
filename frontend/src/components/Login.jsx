import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const{ setloggedIn}= useAppContext();


  const loginform= useFormik ({
    initialValues: {
        email:'',
        password:''
    },
    onSubmit: async (values, {resetForm})=> {
        console.log(values);

        const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/user/authenticate`,{
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
                const data= await res.json();
                console.log(data);
                sessionStorage.setItem('user', JSON.stringify(data));
                setloggedIn(true);
                navigate("/slotlist");
            }
        
            else if(res.status===400){
                Swal.fire({
                    icon:'error',
                    title:'Login failed',
                    text:'Email or password is invalid'
                    
                })
            }
            else{  
                Swal.fire({
                    icon:'error', 
                    title:'Error',
                    text:'Something went wrong!!'
                })
            
            }
            resetForm();
    }
});


  return (
    <div className="container-fluid py-5 d-flex justify-content-center align-items-center">
    {/* Left Column for Image */}
    <div className="col-md-6">
        <img src="/images/A1.png" className="img-fluid background-image-login" alt="Background" />
    </div>

    {/* Right Column for Login Form */}
    <div className="col-md-6">
        <div className="card card-design-login shadow">
            <div className="card-body">
                <h2 className="my-3 text-center">Login form</h2>
                <form onSubmit={loginform.handleSubmit}>
                    <label className="fs-5 fw-semibold">Email</label>
                    <input
                        id="email"
                        onChange={loginform.handleChange}
                        value={loginform.values.email}
                        type="email"
                        className="form-control mb-3 shadow p-3 mb-5 rounded"
                    />
                    <label className="fs-5 fw-semibold">Password</label>
                    <input
                        id="password"
                        onChange={loginform.handleChange}
                        value={loginform.values.password}
                        type="password"
                        className="form-control mb-3 shadow p-3 mb-5 rounded"
                    />
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    // <div className=" py-5 vh-100 d-flex bg-dark" >
    //     <img src='\images\A1.png' className='background-image-login'/>
    //         <div className="col-md-6 ms-auto  ">
    //             <div className="card card-design-login  shadow">
    //                 <div className="card-body">
    //                     <h2 className="my-3"><center>Login form</center></h2>
    //                     <form onSubmit={loginform.handleSubmit} >
    //                     <label className='fs-5 fw-semibold'>Email</label>
    //                     <input id="email" onChange={loginform.handleChange} value={loginform.values.email} type="email" className='form-control mb-3 shadow p-3 mb-5  rounded' />
    //                     <label className='fs-5 fw-semibold'>Password</label>
    //                     <input id="password" onChange={loginform.handleChange} value={loginform.values.password} type="password" className='form-control mb-3 shadow p-3 mb-5 bg-body-tertiary rounded' />
    //                     <button type="submit" className="btn btn-primary">Submit</button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
  )
}

export default Login