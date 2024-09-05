import { useState } from "react";
import { AccordionProps } from "../types/PropsTypes";
import SearchPanel from "./SearchPanel";

const Accordion = ({ onFilter }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleActiveAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto rounded-b-md overflow-hidden bg-amber-500 flex flex-col gap-[1px] justify-between items-center">
      <div className="item w-full">
        <div
          className="header flex justify-between items-center p-5 bg-amber-500 font-bold cursor-pointer"
          onClick={() => handleActiveAccordion()}
        >
          <div>
            <div className="pragmatica-bold">
              <h2>Advanced Search</h2>
            </div>
            <div>
              <span className="pragmatica">
                Click to {isActive ? "close" : "open"} search options{" "}
              </span>
            </div>
          </div>
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
        <div
          className={`content text-xl text-gray-300 duration-500 transition-all px-3 overflow-hidden ${isActive ? "py-8 h-full" : "py-0 h-0"}`}
        >
          <div
            className={`duration-2500 transition-all ease-linear text-black ${isActive ? "h-full" : "h-0"}`}
          >
            <SearchPanel
              onFilter={onFilter}
              handleAccordion={handleActiveAccordion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
