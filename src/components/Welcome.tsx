
const Welcome = () => {
  return (
    <div className="title text-amber-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex flex-wrap justify-center align-middle text-2xl sm:text-6xl lg:text-7xl h-full gap-5 lg:gap-10 origin-center cursor-default">
        <div className="origin-center rotate-[-25deg]"><span>W</span></div>
        <div className="origin-center rotate-[15deg] hover:text-[#ff1f1f] hover:rotate-[-15deg] hover:duration-300 ease-out transition-all duration-500"><span>E</span></div>
        <div className="hover:text-[#363b81] origin-center rotate-[-10deg]"><span>L</span></div>
        <div className="origin-center rotate-[25deg] hover:text-[#363b81] hover:rotate-[-180deg] hover:duration-500 ml-2 transition-all duration-800"><span>C</span></div>
        <div className="w-[3rem] md:w-[4rem] lg:w-[5rem] hover:rotate-[720deg] hover:duration-1000 transition-all duration-1000"><img className="w-full" src="/pokeball.png"/></div>
        <div className="hover:text-[#ff1f1f] origin-center rotate-[-15deg]"><span>M</span></div>
        <div className="origin-center rotate-[25deg] hover:text-[#ff1f1f] hover:rotate-[-90deg] transition-all duration-500"><span>E</span></div>
    </div>
  )
}

export default Welcome