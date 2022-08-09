import React from "react"

const SearchResults = ({ results }) => {
  return (
    <div className="ml-5 mr-5 md:ml-20  md:mr-20 lg:ml-52 lg:mr-52">
      <p className="text-sm font-light text-gray-500 mt-3 ">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds){" "}
      </p>
    </div>
  )
}

export default SearchResults
