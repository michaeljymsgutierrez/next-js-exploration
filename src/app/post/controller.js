import { useState, useEffect } from 'react'

function Controller(props) {
  const [posts, setPosts] = useState([])
  const [clickedPostId, setClickedPostId] = useState(null)

  useEffect(() => {
    setPosts(props.posts)
  }, [props.posts])

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
