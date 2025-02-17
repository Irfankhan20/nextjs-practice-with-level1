import React from "react";

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const product = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return {
    title: product.title,
    description: product.body,
  };
}

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
