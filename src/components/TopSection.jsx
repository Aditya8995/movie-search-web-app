import React from 'react'

function TopSection({content}) {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2">
          <img 
            src={content.backdrop_path} 
            alt={content.title} 
            className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-200"
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-10 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {content.title}
          </h1>
          <p className="text-gray-600 mt-4 text-xl">
            Release Date: <span className="text-gray-800 font-semibold">{content.release_date}</span>
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {content.overview}
          </p>
        </div>
      </div>
    </div>

  )
}

export default TopSection
