import { useState } from 'react'
import CatFacts from '../../services/cat-facts'

function Component(props) {
  const [day, setDay] = useState('today')
  const title = 'Fact for'
  const factForToday = CatFacts()

  function updateDay() {
    setDay('tomorrow')
  }

  return { title, factForToday, day, updateDay }
}

export default Component
