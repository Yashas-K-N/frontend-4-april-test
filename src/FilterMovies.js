import React from 'react';



const FilterMovies = ({ movie, GenreSelect }) => {

    const FilterMovies = GenreSelect === 'ALL' ? movie : movie.filter(movie => movie.genre === GenreSelect)

   

    return (
        <>
            <div className="tablefull">
                <table className="tabblelow">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        FilterMovies?.map(movie => (
                            <tr key={movie.title}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.year}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

        </>

    )
}


export default FilterMovies;