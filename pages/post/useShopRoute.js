import React, { useState } from 'react'

function useShopRoute() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const isBrowser = () => typeof document !== 'undefined'

  if (isBrowser()) {
    document.onreadystatechange = async function () {
      if (document.readyState === 'loading') {
        // Do something here
      }
      if (document.readyState === 'interactive') {
        // Do something here
      }
      if (document.readyState === 'complete') {
        const postsResult = await queryPosts()
        const usersResult = await queryUsers()
        setPosts(postsResult)
        setUsers(usersResult)
      }
    }
  }

  function queryPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => response.json()
    )
  }

  function queryUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(
      (response) => response.json()
    )
  }

  return { posts, users }
}

export default useShopRoute
