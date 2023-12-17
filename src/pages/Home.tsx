import { useState } from "react"
import Display from "../components/Display"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import Loader from "../components/Loader"


const Home = () => {
  const [loading, setLoading] = useState(true);
  const handleLoading = ()=> {
    setLoading(false)
  }

  return (
    <div className="w-full">
      <div className={`flex-col justify-between items-center gap-7 min-h-screen ${loading? 'hidden': 'flex'}`}>
        <Navbar endpoint="home"/>
        <div className="w-[90%]"><Welcome /></div>
        <Display handleLoading={()=>handleLoading()}/>
        <Footer />
      </div>
      {loading && <Loader />}
    </div>   
  )
}

export default Home