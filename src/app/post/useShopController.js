import { useState } from "react";

function useShopController(props) {
  const [posts, setPosts] = useState(props.posts || [])
  const [clickedPostId, setClickedPostId] = useState(null);

  setPosts(props.posts)

  console.log(props.posts)
  console.log(posts)

  function viewPostId(postId) {
    setClickedPostId(postId);
  }

  function removePost() {
    props.posts.pop()
    // const updatePosts = posts.pop()
    // posts = updatedPosts
  }

  return { clickedPostId, viewPostId, posts };
}

export default useShopController;
