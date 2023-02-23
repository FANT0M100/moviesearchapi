

const MovieInfo = () => {
    return(
        <div className="container">
            <div className="resul-container">
                <div className="result-grid" id="result-grid">

                  <div className="movie-poster">
                       <img src="img.jpeg" alt="img"/>
                    </div>
                    <div className="movie-info">
                        <h3 className="movie-title">Guardians of the galaxy vol. 2</h3>
                        <ul className="movie-misc-info">
                            <li className="year">Year: 2017</li>
                            <li className="rate">Ratings: PG-13</li>
                            <li className="released">released: 05 May 2017</li>
                        </ul>
                        <p className="genre"><b>Genre:</b> action, advenure, comedy</p>
                        <p className="writer"><b>Writer:</b> gio, tiko, ana</p>
                        <p className="actors"><b>Actors:</b> gio, tiko, ana</p>
                        <p className="plot"><b>Plot:</b> Lorem ipsum dolor sit amet.</p>
                        <p className="language"><b>Language:</b> english</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;