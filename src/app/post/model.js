import useSWR from 'swr'
import { fetcher } from '../../utils/services/fetcher'

function Model() {
  const { data: posts } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  const { data: users } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  return { posts, users }
}

export default Model
