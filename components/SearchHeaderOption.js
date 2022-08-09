import { useRouter } from "next/router"
import React from "react"

const SearchHeaderOption = ({ title, Icon, selected }) => {
  const router = useRouter()
  const searchTab = (title) => {
    router.push(
      `/search?terms=${router.query.terms}&searchType=${
        title === "Images" ? "image" : ""
      }`
    )
  }
  return (
    <div
      onClick={() => searchTab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500 pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  )
}

export default SearchHeaderOption
