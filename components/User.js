/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
export default function User({ className }) {
  const { data: session } = useSession()
  if (session)
    return (
      <span
        className={`w-10 h-10 cursor-pointer ring-2 ring-red-200 rounded-full border-1 border-white ${className}`}
      >
        <Image
          src={session.user.image}
          alt=""
          onClick={signOut}
          height={40}
          width={40}
        />
      </span>
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
