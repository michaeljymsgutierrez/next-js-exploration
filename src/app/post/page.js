"use client";

import Model from "./model";
import Controller from "./controller";

let counter = 0;

function PostsPage() {
  const model = Model();
  const controller = Controller(model);

  if (!controller.posts) return <h1>Loading...</h1>;

  console.log("counting re-renders", (counter += 1));

  return (
    <>
      <h2>Clicked Post: {controller.clickedPostId}</h2>
      <h1>Posts Page</h1>
      {controller.posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => controller.viewPostId(post.id)}>
            View ID
          </button>
          <button onClick={() => controller.removePost(post.id)}>
            Remove
          </button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default PostsPage;
