import { Col, Row, Card } from "react-bootstrap";

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
      img: "",
      year: "2023",
      movieType: "HD",
      duration: 120,
    },
  ];

  return (
    <Row>
      {movies.map((movies) => {
        return (
          <Col key={movies.id}>
            <Card className="bg-transparent">
              <Card.Img variant="top" src={movies.img} />
              <Card.Body>
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="text-white">{movies.title}</h5>{" "}
                  <div className="float-end">
                    <p className="text-warning fw-bold">{movies.year}</p>
                  </div>
                </div>
                {/* <Card.Title className>{movies.title}</Card.Title> */}
                <Card.Text>
                  {" "}
                  <div className="trans_btn">
                    {movies.movieType}
                  </div> &nbsp; {movies.rating}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Movies;
