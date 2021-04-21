import React from "react"
import { useState } from 'react';

const Search = ({ props }) => {
  // other constants
  const [search, setSearch] = useState('')

  // Filter Games option to filter 5 games
  const filteredGames = props.wrapper.filter(product => {
    return product.fields.jsonObject.value.toLowerCase().includes(search.toLowerCase())
  }).slice(0, 5)

  // Input Searchbar
  const inputSearchbar = <form action="/" method="get">
    <input id="header-search"
      onChange={e => setSearch(e.target.value)}
      type="text" className="form-control" placeholder="Search for Games , Users and more.." autoComplete="off" />
    <i className="uil-search-alt"></i>
  </form>

  // Results in the searchbar
  const resultsSearchbar = filteredGames.map((results) =>
    <li key={results.fields.jsonObject.value}>
       <a href={'/'} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
        <img src={results.fields.jsonObject.data.image_url} alt="" className="border mr-3 rounded-full shadow-sm w-8 h-8" />
        <span className="console">
            <span className="mr-2">{results.fields.jsonObject.value}</span>
            {results.metadata.tags.length
            ?
            <span className="info-radius absolute font-semibold px-2 py-0.5 rounded-full tiny margin-2px">{results.metadata.tags[0].sys.id}</span>
            :
            <></>
            }
          </span>
      </a>
    </li>
  );


  return (
    <>
    <div
    className="header_search">
    {inputSearchbar}
  </div>
  <div uk-drop="mode: click" className="hidden md:w-1/3 w-11/12 shadow-lg rounded-md -mt-2 bg-white">
    <div className="-mt-2 p-3">
      <h4 className="font-semibold mb-1 mt-2 px-2.5 text-lg"> Results  </h4>
      <ul>

        {resultsSearchbar}

        
      </ul>
    </div>
  </div>
  </>
  )
}


export default Search
