import React, { useRef, useState } from "react"
import { UseAdvancedFilters } from "../hooks/useAdvancedFilters"
import { useGetFilterChecks } from "../hooks/useGetFilterChecks"
import { SearchPanelProps } from "../types/PropsTypes"

const SearchPanel = ({onFilter, handleAccordion}: SearchPanelProps) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const {checks} = useGetFilterChecks()
  const { color, maxWeight, minWeight, types, isABaby, handleAgeChange, handleMaxWeigth, handleColorChange, handleMinWeigth, handleAddType, handleRemoveType } = UseAdvancedFilters()
  const panelRef = useRef<HTMLFormElement>(null)
  
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newColor: string | null, newTypes: string[], wgte: number | null, wlte: number | null, newIsABaby: boolean | null)=> {
    event.preventDefault()
    onFilter(newColor, newTypes, wgte, wlte, newIsABaby)
    handleAccordion()
  }

  const onMaxWeightChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    (minWeight && e.target.value && minWeight > Number(e.target.value))? setIsEnabled(false): setIsEnabled(true)
    e.target.value === ''? handleMaxWeigth(null): handleMaxWeigth(Number(e.target.value))
  }

  const onMinWeightChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    (maxWeight && e.target.value && Number(e.target.value) > maxWeight)? setIsEnabled(false): setIsEnabled(true)
    e.target.value === ''? handleMinWeigth(null): handleMinWeigth(Number(e.target.value))
  }
 

  const resetFilters = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
    event.preventDefault();
    handleAgeChange(null)
    handleColorChange(null);
    handleAgeChange(null);
    handleMaxWeigth(null);
    handleMinWeigth(null);
    handleRemoveType('all');
    onFilter(null, [], null, null, null)
    panelRef.current?.reset();
    setIsEnabled(true);
  }

  return (
    <form ref={panelRef} className="w-full flex flex-col justify-center content-around pragmatica g-3 text-[#363b81]">
      <div className="w-full mb-4 gap-3 flex flex-col">
        <div className="pragmatica-bold"><h2>By Color</h2></div>
        <div className="flex flex-wrap justify-normal content-center gap-2 w-full border-b-[3px] border-slate-400">
          {checks?.pokemon_v2_pokemoncolor && checks.pokemon_v2_pokemoncolor.map(color =>
            <div className="flex justify-stretch " key={color.id}>
              <input className="bg-gray-50 checked:after:bg-[#363b81] border-[#363b81] focus:ring-3 focus:ring-[#363b81] h-4 w-4 rounded relative top-1 hover:cursor-pointer"
              type="radio" 
              name={'colors'}
              id={color.id.toString().concat('color')}
              value={color.name} 
              onChange={()=>handleColorChange(color.name)}/>
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
              value={type.name}
              onChange={(e)=> e.target.checked? handleAddType(type.name): handleRemoveType(type.name)}  />
              <label htmlFor={type.id.toString().concat('type')} className="inline-block pl-[0.15rem]  hover:cursor-pointer pb-5">{type.name.charAt(0).toUpperCase().concat(type.name.slice(1))}</label>
            </div>)
          }
        </div>
      </div>

      <div className="w-full mb-4 gap-3 flex flex-col">
        <div className="pragmatica-bold"><h2>By Age</h2></div>
        <div className="flex flex-wrap justify-normal content-center gap-3 border-b-[3px] border-slate-400">
          <div>
              <input className="relative top-1 float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#363b81] outline-none checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-[#363b81] checked:after:text-[#363b81] checked:after:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:cursor-pointer bg-white"
              type="checkbox" 
              id='isBaby'
              name='isBaby'
              onChange={(e)=> handleAgeChange(e.target.checked)}  />
              <label htmlFor='isBaby' className="inline-block pl-[0.15rem]  hover:cursor-pointer pb-5">Is a Baby</label>
          </div>
        </div>
      </div>
      <div className="w-full mb-4 gap-3 flex flex-col">
        <div className="pragmatica-bold"><h2>By Weight</h2></div>
        <div className="flex flex-wrap justify-normal content-center gap-3 border-b-[3px] border-slate-400">
          <div className="mb-4 flex flex-wrap md:flex-nowrap items-stretch content-center w-full md:w-fit gap-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <input
              type="number"
              className="relative w-[70%] md:w-[20%] m-0 -mr-0.5 block flex-auto rounded-lg border-solid  border-blue-500 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:text-black dark:text-black mt-3"
              placeholder="Min weight (Grs)"
              aria-label="Text"
              aria-describedby="min-weight" 
              id='min-weight'
              value={minWeight === null? '': minWeight}
              onChange={(e)=>onMinWeightChange(e)}
            />
            <span className="relative text-center top-3"> to </span>
            <input
              type="number"
              className="relative w-[70%] md:w-[20%] m-0 -mr-0.5 block flex-auto rounded-lg border-solid  border-blue-500 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-500 focus:text-black dark:text-black mt-3"
              placeholder="Max weight (Grs)"
              aria-label="Text2"
              aria-describedby="max-weight" 
              id='max-weight'
              value={maxWeight === null? '': maxWeight}
              onChange={(e)=> onMaxWeightChange(e)}
            />
            {!isEnabled && <span className="text-red-600 relative top-3">First value must be lower!!</span>}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-end gap-4">
        <button className={`btn-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`} onClick={(e)=>resetFilters(e)}>Reset Filters</button>
        <button disabled={!isEnabled} className={`${isEnabled? 'btn-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]': 'btn-disabled'}`} onClick={(e)=>handleSubmit(e, color, types, minWeight, maxWeight, isABaby)}>Apply Filters</button>
      </div>
    </form>
  )
}

export default SearchPanel