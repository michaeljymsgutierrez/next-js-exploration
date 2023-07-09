import React, { useState } from 'react'

function useShopRoute() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const isBrowser = () => typeof window !== 'undefined'

  if (isBrowser()) {
    // Listen onreadystatechange
    document.onreadystatechange = async function () {
      console.log('Load started')

      const postsResult = await queryPosts()
      setPosts(postsResult)
    }

    // Listen onload
    window.onload = async function () {
      console.log('Load finished')

      const usersResult = await queryUsers()
      setUsers(usersResult)
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
