import ButtonRouter from "./ButtonRouter"

const CardDescription = ()=> {
  return (
    <div className="w-[100%] flex justify-center">
        <div className="overflow-hidden flex flex-col justify-center items-center w-[90%] h-fit gap-7 bg-red-600 bg-opacity-50 rounded-2xl outline outline-slate-400 -outline-offset-8 p-1 py-4">
            <div className="w-[50%]">
                <img src="/Error.png" alt="name" className=" aspect-square w-fit" />
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="z-10 flex flex-wrap justify-center items-end gap-4 mb-3">
                    <p className="text-slate-400 text-4xl font-bold block">Name</p>
                    <p className="text-gray-50 block text-center">Name</p>
                </div>
            </div>
            <ButtonRouter endpoint="/evolutions" spanText="Evolutions" />
        </div>
    </div>
  )
}

export default CardDescription