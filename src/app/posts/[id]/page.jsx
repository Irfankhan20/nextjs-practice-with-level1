import React from "react";

const SinglePost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return (
    <div>
      <h1>Signle Post of : {params?.id}</h1>
      <p className="text-3xl font-bold">Post Title: {post?.title}</p>
      <p className="text-green-500 text-lg font-medium">
        Post Description: {post?.body}
      </p>
    </div>
  );
};

export default SinglePost;
