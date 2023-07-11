import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Controller(props) {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [clickedPostId, setClickedPostId] = useState(null)

  useEffect(() => {
    setPosts(props.posts)
    setUsers(props.users)
  }, [props.posts, props.users])

  function viewPostId(postId) {
    setClickedPostId(postId)
  }

  function removePost(postId) {
    const updatedPosts = posts.filter((post) => post.id !== postId)
    setPosts(updatedPosts)
  }

  function viewUser(userId) {
    router.push(`/post?user-id=${userId}`)
  }

  return { clickedPostId, posts, viewPostId, removePost, viewUser }
}

export default Controller
