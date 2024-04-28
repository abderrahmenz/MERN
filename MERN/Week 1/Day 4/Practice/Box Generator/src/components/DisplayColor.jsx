import React from 'react'

function DisplayColor(props) {
    return (
        <fieldset style={{backgroundColor:props.person}}>
            <legend>PersonCard</legend>
        </fieldset>
    )
}

export default DisplayColor