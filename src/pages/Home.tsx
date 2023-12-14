import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div className='flex flex-wrap flex-col justify-between h-screen'>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Home