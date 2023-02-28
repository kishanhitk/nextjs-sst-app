import React from "react";

const Index = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: {
      revalidate: 1000,
    },
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      App dir
      {data.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Index;
