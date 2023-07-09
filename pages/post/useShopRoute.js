import React, { useState, useEffect } from 'react'

function useShopRoute() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const postsResult = await queryPosts()
      const usersResult = await queryUsers()
      setPosts(postsResult)
      setUsers(usersResult)
    }
    fetchData()
  }, [])

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
