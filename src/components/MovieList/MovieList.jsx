import axios from "axios";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { StoreContextMovie } from "../../App";


export const MovieList = () => {

    const { stataMovie, dispachMovie } = useContext(StoreContextMovie)

    const {isLoading, isError, data, error, refetch} = useQuery(stataMovie?.query, axiosData, {
        variable: stataMovie?.query,
        skip: !stataMovie?.query
    })

    async function axiosData({ queryKey }) {
        const [query] = queryKey
        if(!query) return []
        const result = await axios(`http://www.omdbapi.com/?s=${query}&page=1&apikey=e7802e60`)
        return result.data.Search
    }

    useEffect(() => {
        stataMovie?.query && refetch()
    }, [stataMovie?.query])

    const redirectHandler = (id) => {
        dispachMovie({
            type: 'changePrimitiveType',
            propertyId: 'movieId',
            value: id
        })
        
        dispachMovie({
            type: 'changePrimitiveType',
            propertyId: 'query',
            value: ""
           })
    }

    if(isError) {
        return(
            <span>Error: {error.message}</span>
        )
    }

    return(
        <div className="search-list" id="search-list">
            {
                !!data?.length && data?.map((el, index) => (
                    <a className="search-list-item" href="#" onClick={() => redirectHandler(el?.imdbID)} key={index}>
                        <div className="search-item-thumbnail">
                            <img src={el.Poster} alt={el.Title}/>
                        </div>
                        <div className="search-item-info">
                            <h4>{el.Title}</h4>
                            <p>{el.Year}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default MovieList;

// http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=e7802e60