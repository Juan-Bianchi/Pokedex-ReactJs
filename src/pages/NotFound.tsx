import { NavLink } from "react-router-dom"


const NotFound = () => {
  return (
    <div className=" flex flex-col justify-center flex-wrap content-center w-[100vw] h-[100vh]">
      <img className="w-[50 vw]" src="/notFound.png" alt="notFound" />
      <div className="w-50 flex justify-center">
        <button className="btn"><NavLink to={'/'}>Go Back Home</NavLink></button>
      </div>
    </div>
  )
}

export default NotFound