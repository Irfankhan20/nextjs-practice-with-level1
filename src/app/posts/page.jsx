import Link from "next/link";
import style from "./post.module.css";
const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div>
      <h1>all posts : {posts.length}</h1>
      <div className="grid grid-cols-5 gap-5">
        {posts.map((post) => (
          <div
            className="p-4 border-2 rounded-xl border-green-500  shadow-xl flex flex-col h-full"
            key={post.id}
          >
            <p
              className={`text-green-600 flex flex-col flex-grow ${style["post-title"]}`}
            >
              <span className="font-bold underline text-black">Post tile:</span>{" "}
              {post.title}
            </p>
            <p className="pt-1 text-green-600 testing-purpose-css-class">
              <span className="font-bold underline text-black">
                Post Description:
              </span>
              {post.body}
            </p>
            <Link href={`/posts/${post.id}`}>
              <button className="btn btn-accent mt-3">Post Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
