import Link from "next/link";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(null);

  function onClick() {
    fetch("/api/count", { method: "POST" })
      .then((response) => response.text())
      // @ts-ignore
      .then(setCount);
  }

  return (
    <div className="App">
      <Link href="/"> Home</Link>
      {count && <p>You clicked me {count} times.</p>}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}
