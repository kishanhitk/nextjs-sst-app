import Link from "next/link";
import React from "react";

const Index = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: {
      revalidate: 1000,
    },
  });
  const data = await res.json();
  return (
    <div>
      App dir
      <Link href="/click">Count Example</Link>
      <Link href="/pages1">Page Example</Link>
      <Link href="/static-page">Static Page</Link>
      {data.map((item: any) => (
        <Link href={`/todos/${item.id}`} key={item.id}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Index;
