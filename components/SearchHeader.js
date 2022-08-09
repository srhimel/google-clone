import Image from "next/image"
import { useRouter } from "next/router"
import React, { useRef } from "react"

import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid"
import User from "./User"
import SearchHeaderOptions from "./SearchHeaderOptions"

const SearchHeader = () => {
  const router = useRouter()
  const { terms } = router.query
  const searchInput = useRef()
  const handleSearch = (e) => {
    e.preventDefault()
    const terms = searchInput.current.value
    if (!terms.trim()) return
    router.push(`/search?terms=${terms.trim()}&searchType=`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          onClick={() => router.push("/")}
          src={"/images/google.png"}
          height={50}
          width={120}
          objectFit="contain"
          alt=""
        />
        <form className="flex border border-gray-200 shadow-md rounded-full px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={terms}
            ref={searchInput}
            className="w-full focus:outline-none"
          />
          <XIcon
            className="h-6 sm:mr-3 text-gray-500 cursor-pointer "
            onClick={() => {
              searchInput.current.value = ""
              searchInput.current.focus()
            }}
          />
          <MicrophoneIcon className="h-5 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-2 cursor-pointer" />
          <SearchIcon className="h-5 hidden sm:inline-flex text-blue-500 cursor-pointer" />
          <button type="submit" onClick={handleSearch}></button>
        </form>
        <User className="ml-auto" />
      </div>
      <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader
