import React, { useState } from 'react'

function useShopController() {
  const [clickedPostId, setClickedPostId] = useState(null)
  function viewPostId(postId) {
    // setClickedPostId(postId)
  }

  return { clickedPostId, viewPostId }
}

export default useShopController
