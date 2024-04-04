import React from 'react'






const Genrefilter = ({ movie, GenreSelect }) => {

    const genres = ['ALL', ...new Set(movie.map(movie => movie.genre))]

    return (

        <div className='genreFilter'>
            <div key={"heading"}>
                <h1>Filter By Genre</h1>
            </div>
            <div key={"button"} className='button'>
                {
                    genres.map((genre) => {
                        return (
                            <>
                                <button key={genre} onClick={() => GenreSelect(genre)} >{genre}</button>
                            </>
                        )
                    })
                }
            </div>
        </div>

    )

}

export default Genrefilter;