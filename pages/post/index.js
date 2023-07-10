import useShopRoute from './useShopRoute'
import useShopController from './useShopController'

let counter = 0

function PostsPage() {
  const routeModel = useShopRoute()
  const controllerModel = useShopController()
  const posts = routeModel.posts

  console.log('counting re-renders', (counter += 1))

  return (
    <>
      <h2>Clicked Post: {controllerModel.clickedPostId}</h2>
      <h1>Posts Page</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => controllerModel.viewPostId(post.id)}>
            View ID
          </button>
          <hr />
        </div>
      ))}
    </>
  )
}

export default PostsPage
