import React, { useState } from 'react'

function useShopRoute() {
  const [posts, setPosts] = useState([])
  const isBrowser = () => typeof window !== 'undefined'

  if (isBrowser()) {
    // Listen on onreadystatechange
    document.onreadystatechange = async function () {
      // console.log('Load started')

      const postsResult = await queryPosts()
      setPosts(postsResult)
    }

    // Listen on onload
    window.onload = function () {
      // console.log('Load finished')
    }
  }

  function queryPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => response.json()
    )
  }

  return { posts }
}

export default useShopRoute
