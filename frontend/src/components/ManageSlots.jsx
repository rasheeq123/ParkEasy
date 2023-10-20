import React, { useEffect, useState } from 'react'

const ManageSlots = () => {

  const [userList, setuserList] = useState([])

  const fetchSlots = async ()=>{
    const res=await fetch('http://localhost:5000/user/getall')
    console.log(res.status);
    const data= await res.json(); // data fetch krne ke lie
    console.table(data);
    setuserList(data);
  }
    useEffect(() => {
    // when component opens
  
    fetchSlots();
    
  }, [])
  

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
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    userList.map((parkings, index)=>(
                      <tr>
                        <td>{index+1}</td>
                        <td>{parkings._id}</td>
                        <td>{parkings.floor}</td>
                        <td>{parkings.slot}</td>
                        <td>{parkings.vehicle}</td>
                        <td>{parkings.time}</td>
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