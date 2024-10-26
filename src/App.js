import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './component/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import axios from 'axios';
import Reviews from './component/reviews/Reviews';


function App() {

  const [movies, setMovies] = useState(); 
  const [isLoading, setLoading] = useState(true);
  // for single movie 
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovieData = async (movieId)=>{
    try{
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);

      console.log(singleMovie.reviewIds)

    }catch(err){
      console.error(err)
    }
  }


  useEffect(()=>{
    const getMovies = async () => {
      try{
        
      const response = await api.get("api/v1/movies");


      console.log(response.data)


      setMovies(response.data);
      setLoading(false)
      

      } catch(err) {
        console.log(err);
      }

    }
    getMovies();
    


  }, [])


  // if(isLoading) {
  //   return <div>loading</div>
  // }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}  >



          <Route path='/'  element={<Home  movies={movies} />}   ></Route>

          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}  > </Route>

          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}   />}> </Route>

        </Route>
      </Routes>


    </div>
  );
}

export default App;
