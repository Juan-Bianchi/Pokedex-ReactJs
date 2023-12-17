import Accordion from "./Accordion"

const AdvancedSearch = () => {

  return (
    <div className="w-[85%] lg:w-[70%] flex flex-col justify-stretch items-center my-5 pragmatica bg-amber-500 rounded-md p-3 text-[#363b81] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      <h2 className="pragmatica-bold border-b-[3px] border-slate-400 w-full text-xl text-center pb-2">LETS CATCH 'EM ALL !!!</h2>
      <Accordion />
    </div>
    
  )
}

export default AdvancedSearch