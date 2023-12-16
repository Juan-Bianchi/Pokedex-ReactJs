import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { NavbarProps } from "../types/NavBarProps";


const Navbar = ({endpoint}: NavbarProps) => {

  const [showMenu, setShowMenu] = useState(true);
  const { windowWidth } = useWindowSize()

  const handleActiveStyle = (isActive: boolean, endpoint: string, dest: string)=> {
    if(isActive)
      return 'hidden'

    if(endpoint !== 'description' && dest === '/evolutions')
      return 'hidden'

    return 'inline lg:mr-16';
  }

  return (
    <div className="flex flex-col flex-wrap md:flex-row lg:flex-nowrap gap-3 items-center justify-start md:justify-around bg-red-600 p-2 overflow-hidden pragmatica-bold w-full">
      <div className="flex items-center justify-between w-[90vw] md:w-auto">
        <div className=" w-[8rem] float-left">
            <button className="sm:inline md:hidden" ><img src="/test.gif" alt="menu" onClick={()=> setShowMenu(!showMenu)}/></button>
            <img className="hidden md:inline md:scale-150" src="/menu1.gif" alt="pokeball"></img>
        </div>
        <h1 className="title text-amber-400 text-3xl lg:hidden drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">POKEDEX</h1>
      </div>
      <ul className={`${showMenu || windowWidth >= 768 ? 'flex flex-col' : 'hidden'} text-white flex-wrap justify-start items-start overflow-hidden text-2xl px-3 md:justify-around md:flex-row md:items-center md:gap-4 lg:flex-nowrap`}>
        <li><NavLink className={({isActive})=> handleActiveStyle(isActive, endpoint, '/')} to={'/'} >Home</NavLink></li>
        <li><NavLink className={({isActive})=> handleActiveStyle(isActive, endpoint, '/evolutions')} to={'/evolutions'} >Evolutions</NavLink></li>
        <div className="mb-4 flex items-stretch content-center w-full md:w-fit">
          <input
            type="search"
            className="relative w-[70%] m-0 -mr-0.5 block flex-auto rounded-s-lg border-solid  border-blue-500 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:text-black dark:text-black mt-3"
            placeholder="Find your Pokemon..."
            aria-label="Search"
            aria-describedby="button-search" 
            id='searc-input'/>

          <button
            className="relative z-[2] flex items-center rounded-r-lg bg-amber-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg mt-3"
            type="button"
            id="button-search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </ul>
      <h1 className="mb-3 title text-amber-400 text-3xl lg:text-5xl hidden lg:inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">POKEDEX</h1>
    </div>
  )
}

export default Navbar