'use client'

import Model from './model'
import Controller from './controller'

let counter = 0

function PostsPage({ params, searchParams }) {
  const model = Model(params, searchParams)
  const controller = Controller(model)

  if (!controller.posts) return <h1>Loading...</h1>

  console.log('counting re-renders', (counter += 1))

  return (
    <>
      <h2>Post ID: {controller.clickedPostId}</h2>
      <h2>Posts Page</h2>
      {controller.posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => controller.viewPostId(post.id)}>
            View ID
          </button>
          <button onClick={() => controller.removePost(post.id)}>Remove</button>
          <button onClick={() => controller.viewUser(post.userId)}>
            View User
          </button>
          <hr />
        </div>
      ))}
    </>
  )
}

export default PostsPage
