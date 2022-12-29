import React, { useEffect, useContext } from 'react'
import '../App.css'
import { getPopularList } from '../api'
import { GlobalContext } from '../context/GlobalContext';

const Popular = () => {

    const { state, handleFunction } = useContext(GlobalContext)
    const {
        setPopularMovie
    } = state

    const {
        PopularMovieList
    } = handleFunction

    useEffect(() => {
        getPopularList().then((result) => {
            setPopularMovie(result)
        })
    }, [PopularMovieList, setPopularMovie])


    return (
        <div>
            <div className='Movie-container'>
                <PopularMovieList />
            </div>
        </div>
    )
}

export default Popular