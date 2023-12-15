import { NavLink } from "react-router-dom"

type RouterButtonProps = {
    endpoint: string,
    spanText: string
}

const ButtonRouter = ({endpoint, spanText}: RouterButtonProps) => {
  return (
    <div className="w-[60%] flex justify-center">
        <button className="btn"><NavLink to={endpoint}>{spanText}</NavLink></button>
    </div>
  )
}

export default ButtonRouter