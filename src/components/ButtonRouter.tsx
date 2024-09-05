import { NavLink } from "react-router-dom";
import { ButtonRouterProps } from "../types/PropsTypes";

const ButtonRouter = ({ endpoint, spanText }: ButtonRouterProps) => {
  return (
    <div className="w-[60%] flex justify-center transition-all duration-500">
      <button className="btn transition-all duration-500">
        <NavLink to={endpoint}>{spanText}</NavLink>
      </button>
    </div>
  );
};

export default ButtonRouter;
