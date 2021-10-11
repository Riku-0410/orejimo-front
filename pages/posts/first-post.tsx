import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1 className = "text-9xl">First Post</h1>
      <h2 className = "bg-red-500 p-6">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}