import React, { useState } from 'react'

function DisplayPeople({people}) {
    const [firstName, setFirstName] = useState()
  return (
    <div>
        <p>Your Form Data</p>
        <p>First Name: </p>
        <p>Last Name: </p>
        <p>Email: </p>
        <p>Password: </p>
        <p>Confirm Password: </p>
    </div>
  )
}

export default DisplayPeople