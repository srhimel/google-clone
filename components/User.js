/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react"
export default function User({ className }) {
  const { data: session } = useSession()
  if (session)
    return (
      <>
        <img
          src={session.user.image}
          alt=""
          className={`h-10 w-10 cursor-pointer ring-2 ring-red-200 rounded-full border-1 border-white ${className}`}
          onClick={signOut}
        />
      </>
    )
  return (
    <button
      onClick={signIn}
      className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md whitespace-nowrap ${className} `}
    >
      Sign In
    </button>
  )
}
