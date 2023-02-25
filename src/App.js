import { createContext, useEffect, useReducer } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import Header from "./components/Header/Header";
import MovieInfo from "./components/Movieinfo/MovieInfo";
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
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <StoreContextMovie.Provider value={{ stataMovie, dispachMovie }}>
     <div className="wrapper">
       <Header />
       <SearchForm />
       <MovieInfo />
     </div>
    </StoreContextMovie.Provider>
    </SkeletonTheme>
  )
}

export default App;
