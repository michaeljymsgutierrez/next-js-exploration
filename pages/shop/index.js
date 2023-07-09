import useShopRoute from './useShopRouteModel'

function ShopPage() {
  const model = useShopRoute()
  const posts = model.posts

  return (
    <>
      <h1>Shop Page Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h3> {post.title}</h3>
          <p>{post.body}</p>
          <button>View ID</button>
          <hr />
        </div>
      ))}
    </>
  )
}

export default ShopPage
