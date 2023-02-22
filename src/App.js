import { createContext, useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/Search";
import { movieReducer } from "./components/Stata/Reducer/Movie";
import { movieStata } from "./components/Stata/Stata/Movie";

export const StoreContextMovie = createContext({})

function App() {

  const [stataMovie, dispachMovie] = useReducer(movieReducer, movieStata)

  useEffect(() => {
    console.log(stataMovie);
  }, [stataMovie.movies.length])

  return (
    <StoreContextMovie.Provider value={{ stataMovie, dispachMovie }}>
     <div className="wrapper">
       <Header/>
       <SearchForm/>
     </div>
    </StoreContextMovie.Provider>
  )
}

export default App;
