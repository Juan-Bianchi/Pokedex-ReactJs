import Display from "../components/Display"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"


const Home = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-7 min-h-screen'>
      <Navbar endpoint="home"/>
      <div className="w-[90%]"><Welcome /></div>
      <Display />
      <Footer />
    </div>
  )
}

export default Home