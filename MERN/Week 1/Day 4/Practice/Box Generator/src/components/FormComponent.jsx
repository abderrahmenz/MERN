// FormComponent.jsx
import React, { useState } from 'react';
import DisplayColor from './DisplayColor';

function FormComponent(props) {
    const [people, setPeople] = useState(['red', 'green', 'blue']); // Corrected array

    return (
        <fieldset>
            <legend>FormComponent</legend>
            {people.map((person, index) => (
                <DisplayColor key={index} person={person} />
            ))}
        </fieldset>
    );
}

export default FormComponent;