import React from 'react'
import { MovieContainer, MovieInfo, MoviePoster, MovieTitle, MovieRate } from './Movie.style';

const IMG_BASE_URL="https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }){
    
    return (
        <MovieContainer>
            <MoviePoster src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
            <MovieInfo>
                <MovieTitle>{title}</MovieTitle>
                <MovieRate>{vote_average}</MovieRate>
            </MovieInfo>
        </MovieContainer>
    )
}