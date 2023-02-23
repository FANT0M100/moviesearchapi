import axios from "axios";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { StoreContextMovie } from "../../App";


const MovieInfo = () => {

    const { stataMovie, dispachMovie } = useContext(StoreContextMovie)

    const {isLoading, isError, data, error, refetch} = useQuery(stataMovie?.movieId, axiosData, {
        variable: stataMovie?.movieId,
        skip: !stataMovie?.movieId
    })

    async function axiosData({ queryKey }) {
        const [query] = queryKey
        if(!query) return []
        const result = await axios(`http://www.omdbapi.com/?i=${query}&apikey=e7802e60`)
        return result.data
    }


    useEffect(() => {
        stataMovie?.movieId && refetch()
    }, [stataMovie?.movieId])

    if(isError) {
        return(
            <span>Error: {error.message}</span>
        )
    }

    return(
        <div className="container">
            <div className="resul-container">
                <div className="result-grid" id="result-grid">

                  <div className="movie-poster">
                       <img src={data?.Poster} alt={data?.Title}/>
                    </div>
                    <div className="movie-info">
                        <h3 className="movie-title">{data?.Title}</h3>
                        <ul className="movie-misc-info">
                            <li className="year">Year: {data?.Year}</li>
                            <li className="rate">Ratings: {data?.Rated}</li>
                            <li className="released">released: {data?.Released}</li>
                        </ul>
                        <p className="genre"><b>Genre:</b> {data?.Genre}</p>
                        <p className="writer"><b>Writer:</b> {data?.Writer}</p>
                        <p className="actors"><b>Actors:</b> {data?.Actors}</p>
                        <p className="plot"><b>Plot:</b> {data?.Plot}</p>
                        <p className="language"><b>Language:</b> {data?.Language}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;