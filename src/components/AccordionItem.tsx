import { useState } from "react"

const AccordionItem = () => {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <div className="item" onClick={()=>setIsActive(!isActive)}>
      <div className="header flex justify-between items-center p-5 bg-amber-500 font-bold cursor-pointer">
        <div>
          <div className="pragmatica-bold"><h2>Advanced Search</h2></div>
          <div>
            <span>Click to {isActive? 'close': 'open'} search options </span>
          </div>
        </div>
        {isActive ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg> : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>}
      </div>
      <div className="content text-xl text-gray-300 h-0 overflow-hidden">
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, inventore sint molestias beatae nam, libero recusandae maiores, distinctio natus dolorem maxime doloribus cum laborum sed est ducimus repellendus error exercitationem?</p>
      </div>
    </div>
  )
}

export default AccordionItem