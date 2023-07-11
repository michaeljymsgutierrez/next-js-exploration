import useSWR from 'swr'
import { fetcher } from '../../utils/services/fetcher'

function CatFacts() {
  const { data: fact } = useSWR('https://catfact.ninja/fact', fetcher)
  return fact
}

export default CatFacts
