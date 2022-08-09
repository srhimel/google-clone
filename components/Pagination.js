import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"
const Pagination = ({ className }) => {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 1
  return (
    <div
      className={`flex justify-between max-w-xs pb-5 text-blue-700 select-none ${className}`}
    >
      {startIndex > 1 && (
        <Link
          href={`/search?terms=${router.query.terms}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="flex cursor-pointer flex-col items-center">
            <ChevronLeftIcon className="h-6" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?terms=${router.query.terms}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="flex cursor-pointer flex-col items-center">
            <ChevronRightIcon className="h-6" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Pagination
