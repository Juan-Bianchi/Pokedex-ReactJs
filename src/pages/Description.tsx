import { useParams } from "react-router";
import CardDescription from "../components/CardDescription";
import DescrTitle from "../components/DescrTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Description = () => {
  const { pokemonId } = useParams();
  return (
    <div className="flex flex-col justify-between items-center min-h-screen gap-5">
      <Navbar endpoint="description" />
      <div className="w-full">
        <DescrTitle />
      </div>
      <CardDescription pokemonId={pokemonId} />
      <Footer />
    </div>
  );
};

export default Description;
