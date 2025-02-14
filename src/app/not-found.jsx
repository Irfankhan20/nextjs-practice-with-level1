import Link from "next/link";
import React from "react";

const NotFoundPage404 = () => {
  return (
    <div className="place-items-center place-content-center h-full">
      <h1>404 Not Found</h1>
      <Link href="/">
        <button className="btn btn-error">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage404;
