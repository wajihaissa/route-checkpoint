import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { Container } from 'react-bootstrap'

export const MovieList = ({movies,search,selecterating}) => {
    return (

        <Container style={{display:'flex',flexWrap:'wrap',marginBottom:'25%'}}>
        {movies.filter((movie)=>movie.name.includes(search) && movie.rating>=selecterating)
        .map((movie)=>(
            <MovieCard movie={movie} />
        ))} 
        </Container>
    )
}
