import { useFormik } from 'formik'
import React from 'react'

const BookSlot = () => {
    const bookslot = useFormik ({
        initialValues:{
            floor: '',
            slot:'',
            vehicle:'',
            time:''
        },
        onSubmit: async (values)=>{
            console.log(values);
        }

    })
    return (
        <div className="py-5 vh-100 bg-body-secondary">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3">Book Slot</h2>
                        <form>
                            <label  >Floor</label>

                            <select className='form-control mb-3' id="floor">
                                <option> 1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                            

                            <label>Slot</label>

                            <input id="slot" type="number" className='form-control mb-3' />


                            <label>Vehicle No. </label>

                            <input id="vehicle" type="text" className='form-control mb-3' />

                            <label>Time </label>
                            <input id="time" type="time" className='form-control mb-3' />

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookSlot