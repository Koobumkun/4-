import styled from 'styled-components';

export const MovieContainer = styled.div`
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: filter 0.3s ease;
`

export const MoviePoster = styled.img`
    max-width: 100%;
`

export const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

export const MovieTitle = styled.h4`
    margin: 0;
`

export const MovieRate = styled.span`
    margin: 3px;
`
  