import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'


const schema = yup.object().shape({
    movie: yup.string().required('Required')
})

const SearchForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    return(
        <div className="search-container">
            <div className="search-element">
                <h3>Search movie:</h3>
                <form>
                 <input 
                   {...register("movie", {
                    onChange: (e) => {
                        console.log(e.target.value);
                    }
                   })}
                   name="movie"
                   type="text" 
                   id="movie-search-box" 
                   className="form-control" 
                   /* onkeyup="findMovie()"  */
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