import { useState, useEffect } from 'react'

function Controller(props) {
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

  return { clickedPostId, viewPostId, posts, removePost }
}

export default Controller
