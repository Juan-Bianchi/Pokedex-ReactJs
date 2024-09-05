import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Description from "./pages/Description.tsx";
import Home from "./pages/Home.tsx";

export const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:pokemonId" element={<Description />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
);
