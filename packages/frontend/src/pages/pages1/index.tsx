import Link from "next/link";
import React from "react";

const pages1 = () => {
  return (
    <div>
      pages1
      <Link href="/">Home Page</Link>
      <Link href="/pages2">Pages2</Link>
    </div>
  );
};

export default pages1;
