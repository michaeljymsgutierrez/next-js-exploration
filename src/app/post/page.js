"use client";

import useShopRoute from "./useShopRoute";
import useShopController from "./useShopController";

let counter = 0;

function PostsPage() {
  const model = useShopRoute();
  const controller = useShopController(model);

  if (!controller.posts) return <h1>Loading...</h1>;

  console.log("counting re-renders", (counter += 1));

  return (
    <>
      <span>{controller.posts.length}</span>
      <h2>Clicked Post: {controller.clickedPostId}</h2>
      <button onClick={controller.removePost}>Remove Post</button>
      <h1>Posts Page</h1>
      {controller.posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => controller.viewPostId(post.id)}>
            View ID
          </button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default PostsPage;
