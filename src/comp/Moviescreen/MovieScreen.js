import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const MovieScreen = ({ movies }) => {
  const params = useParams();
  
  const moviee = movies.find((el) => el.id == params.id);
  return (
    <div style={{ marginTop: "15px" }}>
      <Container>
        <Row>
          <Col>
            <img style={{ width: "600px" }} src={movie.posterurl} alt='ffg' />
          </Col>
          <Col>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
