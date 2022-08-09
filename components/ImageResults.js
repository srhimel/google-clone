/* eslint-disable @next/next/no-img-element */
import React from "react"
import Pagination from "./Pagination"

const ImageResults = ({ results }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {results.items.map((result) => (
          <div key={result.link} className="">
            <div className="group ">
              <a href={result.image.contextLink}>
                <img
                  className="w-full h-60 object-contain p-2 bg-white hover:shadow-lg"
                  src={result.link}
                  alt={result.title}
                />
                <div className="p-2">
                  <h2 className="text-sm group-hover:underline">
                    {result.title}
                  </h2>
                  <p className="text-xs group-hover:underline text-gray-500">
                    {result.displayLink}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Pagination className="mt-5" />
    </div>
  )
}

export default ImageResults
