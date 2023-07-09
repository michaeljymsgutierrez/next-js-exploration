import React, { useState } from 'react'

function useShopController(props) {
  const [clickedPostId, setClickedPostId] = useState(null)
  console.log(props);
  function viewPostId(postId) {
    setClickedPostId(postId)
  }

  return { clickedPostId, viewPostId }
}

export default useShopController
