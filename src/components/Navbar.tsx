import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { NavbarProps } from "../types/PropsTypes";



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
    <div className="flex flex-col flex-wrap content-evenly justify-start md:flex-row lg:flex-nowrap gap-3 md:justify-around md:items-center bg-red-600 p-2 overflow-hidden pragmatica-bold w-full">
      <div className="flex items-center justify-between w-[90vw] md:w-auto">
        <div className=" w-[8rem] float-left">
            <button className="sm:inline md:hidden" ><img src="/test.gif" alt="menu" onClick={()=> setShowMenu(!showMenu)}/></button>
            <img className="hidden md:inline md:scale-150" src="/menu1.gif" alt="pokeball"></img>
        </div>
        <h1 className="title text-amber-400 text-3xl md:hidden drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">POKEDEX</h1>
      </div>
      <ul className={`${showMenu || windowWidth >= 768 ? 'flex flex-col' : 'hidden'} text-white w-[80%] flex-wrap justify-start items-start overflow-hidden text-2xl px-3 md:w-[40%] md:justify-around md:flex-row md:items-center md:gap-4 lg:flex-nowrap`}>
        <li><NavLink className={({isActive})=> handleActiveStyle(isActive, endpoint, '/')} to={'/'} >Home</NavLink></li>
        <li><NavLink className={({isActive})=> handleActiveStyle(isActive, endpoint, '/evolutions')} to={'/evolutions'} >Evolutions</NavLink></li>
        
      </ul>
      <h1 className="mb-3 title text-amber-400 hidden text-3xl lg:text-5xl md:inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">POKEDEX</h1>
    </div>
  )
}

export default Navbar