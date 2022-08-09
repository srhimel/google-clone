import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import { useRef } from "react"

export default function Home() {
  const router = useRouter()
  const searchInput = useRef()
  const handleSearch = (e) => {
    e.preventDefault()
    const terms = searchInput.current.value
    if (!terms.trim()) return
    router.push(`/search?terms=${terms.trim()}&searchType=`)
  }

  const randomSearch = async (e) => {
    e.preventDefault()
    const randomWord = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((res) => res.json())
    router.push(`/search?terms=${randomWord}&searchType=`)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <form className="flex flex-col items-center mt-40">
          <Image
            src={"/images/google.png"}
            height={100}
            width={300}
            objectFit="contain"
            alt=""
          />
          <div className="border w-full max-w-[80%] md:max-w-xl rounded-full flex mt-8 hover:shadow-lg focus-within:shadow-lg items-center px-5">
            <SearchIcon className="h-5 text-gray-400" />
            <input
              ref={searchInput}
              placeholder="Search Google or type a URL"
              type="text"
              className="flex-grow focus:outline-none py-3 px-2"
            />
            <MicrophoneIcon className="h-5 text-blue-500" />
          </div>
          <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="btn" onClick={handleSearch}>
              Google Search
            </button>
            <button onClick={randomSearch} className="btn">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
