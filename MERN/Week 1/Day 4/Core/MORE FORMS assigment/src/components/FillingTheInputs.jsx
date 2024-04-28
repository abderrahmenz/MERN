import React, { useState } from 'react'

function FillingTheInputs (props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function fName(event){
        setFirstName(event.target.value);
    }
    function lName(event) {
        setLastName(event.target.value);
    }
    function checkEmail(event) {
        setEmail(event.target.value);
    }
    function cPassword(event) {
        setPassword(event.target.value);
    }
  return (
    <div>
        <p>First Name: <input type="text" onChange={fName}/></p>
        {firstName.length<2?<p style={{color:"red"}}>First Name must be at least 2 characters long</p>:<p style={{color:"green"}}>First Name Valid</p>}
        <p>Last Name: <input type="text" onChange={lName}/></p>
        {lastName.length<2?<p style={{color:"red"}}>Last Name must be at least 2 characters long</p>:<p style={{color:"green"}}>Last Name Valid</p>}
        <p>Email: <input type="email" onChange={checkEmail}/></p>
        {email.length<2?<p style={{color:"red"}}>Email must be at least 2 characters long</p>:<p style={{color:"green"}}>Email Valid</p>}
        <p>Password: <input type="password" onChange={cPassword}/></p>
        {password.length<8?<p style={{color:"red"}}>Password must be at least 8 characters long <br />Password must match</p>:<p style={{color:"green"}}>Password Valid</p>}
        <p>Confirm Password: <input type="password" /></p>
    </div>
  )
}

export default FillingTheInputs