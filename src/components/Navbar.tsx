import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type NavlinkProps = {
  isActive: boolean
}

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  const returnActiveStyle = ({isActive}: NavlinkProps) => {
    return isActive? {color: '#363b81', }: {color: 'white'}
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-start md:justify-around bg-red-600 pr-2 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className=" w-[8rem]">
            <button className="sm:inline md:hidden" ><img src="/test.gif" alt="menu" onClick={()=> setShowMenu(!showMenu)}/></button>
            <img className="hidden md:inline md:scale-150" src="/menu1.gif" alt="pokeball"></img>
        </div>
        <h1 className="title text-amber-400 text-3xl">POKEMON</h1>
      </div>
      <div className={`flex flex-col md:flex-row flex-wrap justify-start md:justify-around content-center overflow-hidden  ${showMenu || windowWidth > 768? 'block': 'hidden'}`}>
        <NavLink className={(isActive)=> isActive? 'hidden': 'inline w-[50%]'} style={returnActiveStyle} to={'/'} >Home</NavLink>
        <input type="text" className=" rounded-3xl py-2 px-2 my-2" placeholder="Search.."></input>
      </div>
    </div>
  )
}

export default Navbar