import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import SearchHeader from "../components/SearchHeader"

const Search = () => {
  const router = useRouter()
  const { terms } = router.query
  return (
    <div>
      <Head>
        <title>{terms} - Google Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchHeader />
    </div>
  )
}

export default Search
