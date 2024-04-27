import React from 'react'

function PeopleCard() {
  return (
    <div>
        <form>
            <p>First Name: <input type="text" /></p><br />
            <p>Last Name: <input type="text" /></p><br />
            <p>Email: <input type="email" /></p><br />
            <p>Password: <input type="password" /></p><br />
            <p>Confirm Password: <input type="password" /></p>
            <hr />
            
        </form>
    </div>
  )
}

export default PeopleCard