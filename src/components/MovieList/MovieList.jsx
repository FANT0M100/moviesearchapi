import { useContext } from "react";
import { StoreContextMovie } from "../../App";


export const MovieList = () => {

    const { stataMovie, dispachMovie } = useContext(StoreContextMovie)

    return(
        <div className="search-list" id="search-list">
            {
                stataMovie?.movies && stataMovie?.movies.map((el, index) => (
                    <div className="search-list-item" key={index}>
                        <div className="search-item-thumbnail">
                            <img src={el.Poster} alt={el.Title}/>
                        </div>
                        <div className="search-item-info">
                            <h4>{el.Title}</h4>
                            <p>{el.Year}</p>
                        </div>
                    </div>
                ))
            }
                    
               {/* <div className="search-list-item">
                        <div className="search-item-thumbnail">
                            <img src="img.jpeg" alt="img"/>
                        </div>
                        <div className="search-item-info">
                            <h4>Guardians of the galaxy vol. 2</h4>
                            <p>2017</p>
                        </div>
                    </div> */}
        </div>
    )
}

export default MovieList;