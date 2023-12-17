import EvolTitle from "../components/EvolTitle"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Evolutions = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-7 min-h-screen'>
      <Navbar endpoint="evolutions"/>
      <div className="w-full"><EvolTitle /></div>

      <Footer />
    </div>
  )
}

export default Evolutions