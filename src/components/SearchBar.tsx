import { useState } from "react"
import { SearchBarProps } from "../types/PropsTypes"

const SearchBar = ({onSearch}: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="mb-4 flex items-stretch content-center w-full md:w-fit drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      <input
        type="search"
        className="relative w-[70%] m-0 -mr-0.5 block flex-auto rounded-s-lg border-solid  border-blue-500 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:text-black dark:text-black mt-3"
        placeholder="Find your Pokemon..."
        aria-label="Search"
        aria-describedby="button-search" 
        id='searc-input'
        value={searchInput}
        onChange={(e)=> setSearchInput(e.target.value)}/>

      <button
        className="relative z-[2] flex items-center rounded-r-lg bg-[#5db9ff] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg mt-3"
        type="button"
        id="button-search"
        onClick={()=> onSearch(searchInput)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar