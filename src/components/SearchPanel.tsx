import { useState } from "react"
import { SearchPanelProps } from "../types/PropsTypes"

const SearchPanel = ({onFilter, checks}: SearchPanelProps) => {
  const [colors, _setColors] = useState([])
  const [types, _setTypes] = useState([])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    onFilter()
  }

  return (
    <div className="w-full flex flex-col justify-center content-around pragmatica g-3 text-[#363b81]">
      <div className="w-full mb-4 gap-3 flex flex-col">
        <div className="pragmatica-bold"><h2>By Color</h2></div>
        <div className="flex flex-wrap justify-normal content-center gap-2 w-full border-b-[3px] border-slate-400">
          {checks?.pokemon_v2_pokemoncolor && checks.pokemon_v2_pokemoncolor.map(color =>
            <div className="flex justify-stretch " key={color.id}>
              <input className="bg-gray-50 checked:after:bg-[#363b81] border-[#363b81] focus:ring-3 focus:ring-[#363b81] h-4 w-4 rounded relative top-1 hover:cursor-pointer"
              type="radio" 
              name={'colors'}
              id={color.id.toString().concat('color')}
              value=""  />
              <label className="inline-block pl-[0.15rem]  hover:cursor-pointer pb-5" htmlFor={color.id.toString().concat('color')}>{color.name.charAt(0).toUpperCase().concat(color.name.slice(1))}</label>
            </div>)
          }
        </div>
      </div>

      <div className="w-full mb-4 gap-3 flex flex-col">
        <div className="pragmatica-bold"><h2>By Type</h2></div>
        <div className="flex flex-wrap justify-normal content-center gap-3 border-b-[3px] border-slate-400">
          {checks?.pokemon_v2_type && checks.pokemon_v2_type.map(type =>
            <div key={type.id}>
              <input className="relative top-1 float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#363b81] outline-none checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-[#363b81] checked:after:text-[#363b81] checked:after:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:cursor-pointer bg-white"
              type="checkbox" 
              id={type.id.toString().concat('type')}
              name={type.name}
              value=""  />
              <label htmlFor={type.id.toString().concat('type')} className="inline-block pl-[0.15rem]  hover:cursor-pointer pb-5">{type.name.charAt(0).toUpperCase().concat(type.name.slice(1))}</label>
            </div>)
          }
        </div>
      </div>
      <div>
        <button onClick={()=>handleSubmit}></button>
      </div>
    </div>
  )
}

export default SearchPanel