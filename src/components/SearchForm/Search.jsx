import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { StoreContextMovie } from '../../App'
import MovieList from '../MovieList/MovieList'


const schema = yup.object().shape({
    movie: yup.string().required('Required')
})

const SearchForm = () => {

    const { stataMovie, dispachMovie } = useContext(StoreContextMovie)

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispachMovie({
            type: 'changePrimitiveType',
            propertyId: 'query',
            value: data?.movie
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
                        propertyId: 'inputQuery',
                        value: e.target.value
                       })
                    }
                   })}
                   value={stataMovie?.inputQuery || ""}
                   name="movie"
                   type="text" 
                   id="movie-search-box" 
                   className="form-control" 
                   placeholder="Search movie title..."/>
                 </form>
                 <MovieList/>
            </div>
        </div>
    )
}

export default SearchForm;