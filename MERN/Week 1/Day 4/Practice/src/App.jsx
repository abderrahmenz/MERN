import { useState } from 'react'
import './App.css'
import DisplayPeople from './components/DisplayPeople'
import PeopleCard from './components/PeopleCard'

function App() {
  const [people, setPeople] = useState()
  return (
    <fieldset>
      <PeopleCard />
      <DisplayPeople people={people}/>
    </fieldset>
  )
}

export default App
