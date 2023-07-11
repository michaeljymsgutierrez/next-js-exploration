'use client'

import Model from './model'
import Controller from './controller'
import DailyRandomFact from '../../components/daily-random-fact'

let counter = 0

function PostsPage() {
  const model = Model()
  const controller = Controller(model)

  if (!controller.posts) return <h1>Loading...</h1>

  console.log('counting re-renders', (counter += 1))

  return (
    <>
      <DailyRandomFact />
      <hr />
      <h2>Selected Post ID: {controller.clickedPostId}</h2>
      <hr />
      <h2>Posts Page</h2>
      {controller.posts.map((post, index) => (
        <div key={index}>
          <p>
            <b>ID: </b>
            {post.id}
          </p>
          <p>
            <b>TITLE: </b>
            {post.title}
          </p>
          <p>
            <b>BODY: </b>
            {post.body}
          </p>
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
