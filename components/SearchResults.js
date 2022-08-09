import React from "react"
import Pagination from "./Pagination"

const SearchResults = ({ results }) => {
  return (
    <div className="ml-5 mr-5 md:ml-20  md:mr-20 lg:ml-52 lg:mr-52">
      <p className="text-sm font-light text-gray-500 mt-3 ">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds){" "}
      </p>
      <div className="max-w-xl">
        {results.items.map((result) => (
          <div key={result.link} className="my-7">
            <a
              href={result.formattedUrl}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <p className="block mb-1 text-sm truncate font-light">
                {result.formattedUrl}
              </p>
              <h2 className="group-hover:underline decoration-blue-800 text-lg text-blue-800 font-medium truncate hover:underline">
                {result.title}
              </h2>
            </a>

            <span
              className="text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}
            ></span>
          </div>
        ))}
        <Pagination />
      </div>
    </div>
  )
}

export default SearchResults
