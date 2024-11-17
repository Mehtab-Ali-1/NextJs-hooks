// import UseState from "@/components/useState";

import Link from "next/link";

export default function Home () {
  return (
    <main className="mx-32 mt-7">
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      <div>
        <h1 className="font-5xl font-bold mb-6">useState</h1>
        <Link className="px-4 py-2 bg-orange-800 text-white " href="/useState">View</Link>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      <div className="mt-7">
        <h1 className="font-5xl font-bold mb-6">useState with Input Text</h1>
        <Link className="px-4 py-2 bg-orange-800 text-white " href="/useStateInput">View</Link>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      <div className="mt-7">
        <h1 className="font-5xl font-bold mb-6">useState  with Input Text (Object)</h1>
        <Link className="px-4 py-2 bg-orange-800 text-white " href="/useStateObject">View</Link>
      </div>


    </main>
  )
}