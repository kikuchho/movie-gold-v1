import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from 'react'

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText =  useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=> {
        getMovieData(movieId);
        console.log(movieId);
    }, {})


    const addReview = async (e) => {

        //send the review to the db and update 
        e.preventDefault();

        const rev = revText.current;


        try{
            
        const response = await api.post("/api/v1/reviews" ,{reviewBody:rev.value, imdbId:movieId } )

        console.log(response);

        const updateReviews = [...reviews, {body:rev.value}];


        // clear the textarea 
        rev.value = '';
        
        //update the state passed as a prop from app.js 
        setReviews(updateReviews);


        }catch(err){
            console.error(err)
        }


        
    }

  return (
    <Container>
        <Row>
            <Col></Col>
        </Row>
        <Row>
            <Col>
                <img src={movie?.poster} alt=""    />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="write a review here" defaultValue=" review here "/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                <div> test </div>
                {
                    
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col> {r.body} </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews