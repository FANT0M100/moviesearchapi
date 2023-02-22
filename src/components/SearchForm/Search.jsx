import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { StoreContextMovie } from '../../App'
import axios from 'axios'


const schema = yup.object().shape({
    movie: yup.string().required('Required')
})

const SearchForm = () => {

    const { stataMovie, dispachMovie } = useContext(StoreContextMovie)

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const axiosData = async (query) => {
        const result = await axios(`http://www.omdbapi.com/?s=${query}&page=1&apikey=e7802e60`)
        dispachMovie({
            type: 'changePrimitiveType',
            propertyId: 'movies',
            value: result.data.Search
        })
    }

    const onSubmit = (data) => {
        axiosData(data.movie)
        dispachMovie({
            type: 'changePrimitiveType',
            propertyId: 'query',
            value: ''
           })
    }

    const onFormError = (error) => {
        console.log(error);
    }

    return(
        <div className="search-container">
            <div className="search-element">
                <h3>Search movie:</h3>
                <form onSubmit={handleSubmit(onSubmit, onFormError)}>
                 <input 
                   {...register("movie", {
                    onChange: (e) => {
                       dispachMovie({
                        type: 'changePrimitiveType',
                        propertyId: 'query',
                        value: e.target.value
                       })
                    }
                   })}
                   value={stataMovie?.query || ""}
                   name="movie"
                   type="text" 
                   id="movie-search-box" 
                   className="form-control" 
                   placeholder="Search movie title..."/>
                 </form>

                <div className="search-list" id="search-list">
                    
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
            </div>
        </div>
    )
}

export default SearchForm;