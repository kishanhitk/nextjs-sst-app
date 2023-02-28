import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();

  return data.map((todo: any) => ({
    id: todo.id.toString(),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await res.json();
  return (
    <>
      <Link href="/">Back</Link>
      <h1>My {params.id}</h1>
      <p>{data.title}</p>
    </>
  );
}
