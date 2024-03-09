import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";

function Lunch() {
    const menu = [
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://embed.widencdn.net/img/beef/hkosgtta5l/1120x560px/Beef_230118_0436.tif?keep=c&u=7fueml",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 2,
          title: "Grilled Beef with Potatoes",
          img: "https://www.foodandwine.com/thmb/CqyQH1MrXLynH3iZ0PEEfZ4Ki6Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steak-au-poivre-red-wine-pan-sauce-hero-01-FT-RECIPE1222-c9e1da15f33f4076986b6ce37ae5bbb0.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
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
        <Category/>
        </section>
      </main>
    <Container>
    <Row className="breakfast">
          {menu.map((items) => {
            return (
              <Col key={items.id} md={3} sm={12} className="mt-4">
                <Card className="border-0 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={items.img}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex fs-6 align-items-center justify-content-between">
                      {items.title} &nbsp;{" "}
                      <span className="fw-bold" style={{ color: "#898989" }}>
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
    </div>
  )
}

export default Lunch