import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-custom-gradient">
      <h1 className="text-2xl text-white">
        Click here to Redirect to Home Page
      </h1>
      <Link href="/">
        <button className="mt-4 rounded-full bg-fuchsia-700 px-10 py-2 text-white shadow-2xl">
          Click
        </button>
      </Link>
    </div>
  );
}

export default page;
