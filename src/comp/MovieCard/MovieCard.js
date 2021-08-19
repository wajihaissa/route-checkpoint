import React from 'react';
import{Card} from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating'
const MovieCard = ({movie}) => {
    return (
        <div>
            <Card style={{ width: '18rem',height:'470px',marginBottom:'20px',marginLeft:'20px' }}>
  <Card.Img variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <RatingView ratingValue={movie.rating}  />
    
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
