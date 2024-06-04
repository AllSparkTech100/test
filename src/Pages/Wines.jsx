import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import "./pages.scss";

function Wines() {
  const menu = [
    {
      id: 1,
      title: "Riesling",
      img: "https://static01.nyt.com/images/2022/07/28/dining/28next1/merlin_209950512_bcc2dedd-7ea1-4a67-834d-76360bf9c0a2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      ingredients: "Great taste for value",
      price: "$40",
    },
    {
      id: 2,
      title: "Pinot Grigio",
      img: "https://asset1.cxnmarksandspencer.com/is/image/mands/Pinot-Grigio-Case-of-6/SD_FD_F23A_29116928_NC_X_EC_4?%24PDP_IMAGEGRID%24=&wid=768&qlt=80",
      ingredients: "Awesome Taste",
      price: "$50",
    },
    {
      id: 3,
      title: "Merlot",
      img: "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/D/D/200312_1664116678.jpg",
      ingredients: "Very Nice with awesome quality",
      price: "$32",
    },
    {
      id: 4,
      title: "Zinfandel",
      img: "https://www.seghesio.com/wp-content/uploads/2020/10/SFV-Hero-OldVineZin2019_1000x1000.jpg",
      ingredients: "You will always want it",
      price: "$40",
    },
    {
      id: 5,
      title: "Pinot Noir",
      img: "https://www.foodandwine.com/thmb/-InvzQnqmyP0kuiffsbMApmF3Rs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Guide-Pinot-Noir-FT-BLOG0822-2000-511cd043044e4fcfa9e932bd433472da.jpg",
      ingredients: "Known for quality",
      price: "$90",
    },
    {
      id: 6,
      title: "Syrah",
      img: "https://www.novelwines.co.uk/cdn/shop/files/markvart-red-wine-markvart-syrah-2020-hungary-30926220656707.png?v=1686662871&width=2048",
      ingredients: "Syrah's Authentic",
      price: "$220",
    },
    {
      id: 7,
      title: "Prosecco",
      img: "https://asset1.cxnmarksandspencer.com/is/image/mands/Prosecco-Ros%C3%A9-Case-of-6/SD_FD_F23A_29118199_NC_X_EC_3?%24PDP_IMAGEGRID%24=&wid=768&qlt=80",
      ingredients: "Prosecco Rose",
      price: "$300",
    },
    {
      id: 8,
      title: "Grenache",
      img: "https://www.meadowsestatewinery.com/wp-content/uploads/2016/03/Grenache-02.jpg",
      ingredients: "2016 Grenache",
      price: "$200",
    },
  ];
  return (
    <div>
      <main className="">
        <div className="bg-image menu_intro">
          <div className="about_text">
            <h3 className="text-white text-center">Specialties</h3>
            <p className="text-center">
              <a href="/" className="text-white fw-normal">
                Home
              </a>
            </p>
          </div>
        </div>
        <section>
          <Category />
          <Container>
            <Row className="wines">
              {menu.map((items) => {
                return (
                  <Col data-aos="fade-up" key={items.id} md={4} lg={3} sm={12} className="mt-4">
                    <Card className="border-0 h-100">
                      <Card.Img
                        variant="top"
                        className="img-fluid h-75"
                        src={items.img}
                      />
                      <Card.Body>
                        <Card.Title className="d-flex fs-6 align-items-center justify-content-between">
                          {items.title} &nbsp;{" "}
                          <span
                            className="fw-bold"
                            style={{ color: "#898989" }}
                          >
                            {items.price}
                          </span>
                        </Card.Title>
                        <Card.Text style={{ color: "#787878" }}>
                          {items.ingredients}
                        </Card.Text>
                      </Card.Body>
                      <Button className="w-100 btn order_btn">Order Now</Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default Wines;
