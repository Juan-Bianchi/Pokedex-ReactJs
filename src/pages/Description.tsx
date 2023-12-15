import CardDescription from "../components/CardDescription"
import DescrTitle from "../components/DescrTitle"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Description = () => {
  return (
    <div className='flex flex-col justify-center content-center min-h-screen gap-5 w-full'>
      <Navbar endpoint="description"/>
      <div className="w-full"><DescrTitle /></div>
      <CardDescription />
      <Footer />
    </div>
  )
}

export default Description