import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const ManageSlots = () => {

  const [userList, setuserList] = useState([])

  const fetchSlots = async () => {
    const res = await fetch('http://localhost:5000/parkings/getall')
    console.log(res.status);
    const data = await res.json(); // data fetch krne ke lie
    console.table(data);
    setuserList(data);
  }
  useEffect(() => {
    // when component opens

    fetchSlots();

  }, [])

  const deleteparkings=async (id)=>{
    console.log(id);
    //fetch
    const res=await fetch('http://localhost:5000/parkings/delete/'+ id, { 
        method: 'DELETE',
        
 });
 console.log(res.status);
 if(res.status===200){
  fetchSlots();
    toast.success('Slot Deleted Successfully');


 }
};


  return (
    <div className="vh-100 bg-body-secondary">
      <div className="container py-4">
        <h1 className="text-center"> Manage Slot </h1>
        <table className='table table-dark'>
          <thead>
            <tr>

              <th>S.no</th>
              <th>ID</th>
              <th>Floor</th>
              <th>Slot</th>
              <th>Vehicle No.</th>
              <th>Date</th>
              <th>Time</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map((parkings, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{parkings._id}</td>
                  <td>{parkings.floor}</td>
                  <td>{parkings.slot}</td>
                  <td>{parkings.vehicle}</td>
                  <td>{new Date(parkings.time).toLocaleDateString()}</td>
                  <td>{new Date(parkings.time).toLocaleTimeString()}</td>
                  <td>
                    <Link to={"/updateparkings/" + parkings._id} className="btn btn-primary">Edit</Link>
                  </td>
                  <td>
                    <button
                      onClick={() => { deleteparkings(parkings._id) }}
                      className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageSlots;