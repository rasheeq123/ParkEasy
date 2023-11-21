import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const [currentuser, setcurrentuser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    if(currentuser!==null){
        return children;

    }
    else{
        Swal.fire({
            icon:'error',
            title:'OOPS!',
            text:'You need to Login first'
        });
        return <Navigate to="/login" />
    }
}

export default UserAuth