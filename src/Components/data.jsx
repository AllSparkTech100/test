import { Col, Row, Button } from "react-bootstrap";
import "./button.scss";

function Data() {
  const menu = [
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
  ];
  return (
    <div>
      <Row>
        {menu.map((items) => {
          return (
            <Col md={4} sm={12} key={items.id} className='p-3' >
              <div className="big_carrier">
                <div className="img_cont">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="img-fluid"
                  />
                </div>

                <div className="write">
                  <h3 className="d-flex">
                    {items.title} &nbsp;<span>{items.price}</span>
                  </h3>
                  <p>{items.ingredients}</p>
                  <Button className="shadow-none border-0 ">Order Now</Button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Data;
