import { useFormik } from 'formik'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';

const BookSlot = () => {

    const{ setloggedIn}= useAppContext();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    const bookslot = useFormik ({
        initialValues:{
            floor: 1,
            slot:0,
            vehicle:'',
            user: currentUser._id,
            time:new Date()
        },
        onSubmit: async (values)=>{
            console.log(values);
            const res = await fetch('http://localhost:5000/parkings/add',{
            method: 'POST',
            body:JSON.stringify(values),
            headers:{
                'Content-Type':'application/json'
                
            }
        });
        console.log(res.status)
            if(res.status===200){
                Swal.fire({
                    icon:'success',
                    title:'Booked Successfully'
                    
                })
                setloggedIn(true);
                const data= await res.json();
                console.log(data);
                sessionStorage.setItem('parkings', JSON.stringify(data));
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
                        <h2 className="my-3">Book Slot</h2>
                        <form onSubmit={bookslot.handleSubmit}>
                            <label  >Floor</label>

                            <select className='form-control mb-3' id="floor" onChange={bookslot.handleChange} value={bookslot.values.floor}>
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

                            <input id="slot" type="number" className='form-control mb-3' onChange={bookslot.handleChange} value={bookslot.values.slot}/>


                            <label>Vehicle No. </label>

                            <input id="vehicle" type="text" className='form-control mb-3' onChange={bookslot.handleChange} value={bookslot.values.vehicle}/>

                            <label>Time </label>
                            <input id="time" type="datetime-local" className='form-control mb-3' onChange={bookslot.handleChange} value={bookslot.values.time}/>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookSlot