import React, { createContext, useState } from "react";
import { searchMovie } from '../api'
import { Card, CardGroup } from 'react-bootstrap';

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [popularMovie, setPopularMovie] = useState([])

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q)
            setPopularMovie(query.results)
        }
    }

    const PopularMovieList = () => {
        return popularMovie.map((movie, i) => {
            return (
                <CardGroup key={i}>
                    <Card style={{ width: '15rem', height: '32rem' }}>
                        <Card.Img variant="top" src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title>
                                <small className='bold'>{movie.title}</small>
                            </Card.Title>
                            <Card.Text>{movie.release_date}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> Rating {movie.vote_average}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            )
        })
    }

    let state = {
        popularMovie, setPopularMovie
    }

    let handleFunction = {
        search,
        PopularMovieList
    }

    return (
        <GlobalContext.Provider value={
            {
                state,
                handleFunction
            }
        }>

            {props.children}
        </GlobalContext.Provider>
    )
}