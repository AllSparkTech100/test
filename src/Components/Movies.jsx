import { Container, Col, Row, Card } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";

function Movies() {
  const movies = [
    {
      id: 1,
      title: "Bad Boys For Life",
      category: "Sci-fi",
      img: "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      year: "2015",
      movieType: "HD",
      duration: 120,
    },
    {
      id: 2,
      title: "The Beekeper",
      rating: "3.5",
      img: "https://m.media-amazon.com/images/M/MV5BYjZmODc5YmQtNjA2Mi00OTIwLWI5OWMtMzgwNGI2NDczNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
    {
      id: 2,
      title: "The Beekeper",
      rating: "3.5",
      img: "https://m.media-amazon.com/images/M/MV5BYjZmODc5YmQtNjA2Mi00OTIwLWI5OWMtMzgwNGI2NDczNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
    {
      id: 2,
      title: "The Beekeper",
      rating: "3.5",
      img: "https://m.media-amazon.com/images/M/MV5BYjZmODc5YmQtNjA2Mi00OTIwLWI5OWMtMzgwNGI2NDczNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
    {
      id: 2,
      title: "The Beekeper",
      rating: "3.5",
      img: "https://m.media-amazon.com/images/M/MV5BYjZmODc5YmQtNjA2Mi00OTIwLWI5OWMtMzgwNGI2NDczNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
    {
      id: 2,
      title: "The Beekeper",
      rating: "3.5",
      img: "https://m.media-amazon.com/images/M/MV5BYjZmODc5YmQtNjA2Mi00OTIwLWI5OWMtMzgwNGI2NDczNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
    {
      id: 2,
      title: "The Beekeper",
      rating: "3.5",
      img: "https://m.media-amazon.com/images/M/MV5BYjZmODc5YmQtNjA2Mi00OTIwLWI5OWMtMzgwNGI2NDczNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
  ];

  return (
    <Container fluid className='mt-5'>
      <Row>
        {movies.map((movies) => {
          return (
            <Col md={3} lg={3} sm={12} key={movies.id}>
              <Card className="bg-transparent">
                <Card.Img
                  variant="top"
                  className="img-fluid h-75"
                  src={movies.img}
                />
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="text-white fw-bold">{movies.title}</h5>{" "}
                    <div className="float-end">
                      <p className="text-warning fw-semibold">{movies.year}</p>
                    </div>
                  </div>

                  <Card.Text className="text-white">
                    {" "}
                    <div className="medium_trans_btn">
                      {movies.movieType}
                    </div>{" "}
                    &nbsp;
                    <div className="float-end">
                      <p className="text-warning d-flex align-items-center">
                        <FaThumbsUp size={20} /> &nbsp; {movies.rating}
                      </p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Movies;
