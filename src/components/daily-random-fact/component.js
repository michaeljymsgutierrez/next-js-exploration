import CatFacts from '../../services/cat-facts'

function Component() {
  const title = 'Fact for today!'
  const factForToday = CatFacts()

  return { title, factForToday }
}

export default Component
