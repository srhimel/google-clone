import React from "react"
import Header from "../../components/Header"
import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"

export default function Signin({ providers }) {
  return (
    <div>
      <Header />
      <div>
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <div className="w-80 mx-auto mt-24">
                <Image
                  src={"/images/google.png"}
                  height={30}
                  width={100}
                  alt={""}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="text-center mt-4">
                <p className="italic mb-8 font-light text-xs text-red-600">
                  Note: This is not a legit google site but you can login
                </p>
                <button
                  className="px-8 py-2 bg-red-400 hover:bg-red-500 rounded-lg text-white transition"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}
