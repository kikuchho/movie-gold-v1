import React from 'react'
import './Hero.css'
import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { Link } from 'react-router-dom'

const Hero = ({movies}) => {
  return (

    <div>
        <Carousel>
            {
                //without ? you need to implement loading feature 
                movies?.map((movie)=>{
                    return(
                        <Paper>
                            <div className='movie-card-container' >
                                <div className='movie-card' style={{"--img":`url(${movie.backdrops[0]})`}} >
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt=''  />
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>

                                        <div className='movie-buttons-container' >
                                            <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <div className='movie-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon'  
                                                        icon = {faCirclePlay}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='movie-review-button-container'>
                                            <Link to={`/Reviews/${movie.imdbId}`}>
                                                <div>
                                                    button
                                                </div>
                                            </Link>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero