import axios from "axios";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { StoreContextMovie } from "../../App";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


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

    if(isLoading) {
        return(
            <div className='loader'>
                <svg>
                  <use href="img/icons.svg#icon-cw"/>
                </svg>
            </div> 
        )
    }

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
                        <h3 className="movie-title">{data?.Title || <Skeleton/>}</h3>
                        <ul className="movie-misc-info">
                            <li className="year">Year: {data?.Year || <Skeleton/>}</li>
                            <li className="rate">Ratings: {data?.Rated || <Skeleton/>}</li>
                            <li className="released">released: {data?.Released || <Skeleton/>}</li>
                        </ul>
                        <p className="genre"><b>Genre:</b> {data?.Genre || <Skeleton/>}</p>
                        <p className="writer"><b>Writer:</b> {data?.Writer || <Skeleton/>}</p>
                        <p className="actors"><b>Actors:</b> {data?.Actors || <Skeleton/>}</p>
                        <p className="plot"><b>Plot:</b> {data?.Plot || <Skeleton/>}</p>
                        <p className="language"><b>Language:</b> {data?.Language || <Skeleton/>}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;