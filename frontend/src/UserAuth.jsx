import React, { useState } from 'react'

const UserAuth = ({children}) => {

    const [currentuser, setcurrentuser] = useState(
        JSON.parse(sessionStorage.getItem('parkings'))
    )
  return (
    <div>UserAuth</div>
  )
}

export default UserAuth