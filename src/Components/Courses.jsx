import { Container, Row, Col, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./button.scss";

function Courses() {
  const courseList = [
    {
      title: "Basic science",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://www.uopeople.edu/wp-content/uploads/bb-plugin/cache/13-Types-of-Students-You-See-in-Every-Classroom-UoPeople-copy-landscape-e0cdd3cfbb002593609da37303bbf19c-n5mwvo4a7kez.jpg",
    },
    {
      title: "Reading Culture",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://www.uopeople.edu/wp-content/uploads/bb-plugin/cache/13-Types-of-Students-You-See-in-Every-Classroom-UoPeople-copy-landscape-e0cdd3cfbb002593609da37303bbf19c-n5mwvo4a7kez.jpg",
    },
    {
      title: "Basic science",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://www.gettingsmart.com/wp-content/uploads/2017/01/Teacher-Helping-Young-Students-at-Table-Feature-Image.jpg",
    },
    {
      title: "Home Economics",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://study.com/cimages/multimages/16/ad9fd542-407c-4582-bd88-60e3ccfddb01_adobestock_97724364.jpeg",
    },
    {
      title: "Social Studies",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://www.rootsofaction.com/wp-content/uploads/2019/01/How-Children-Learn.jpg",
    },
  ];
  return (
    <Container>
      <Row className="g-2">
        {courseList.map((course) => {
          return (
            <Col key={course.id} md={4} lg={4} sm={12}>
              <Card id="course_card">
                <Card.Img variant="top" className="h-50" src={course.imgurl} />

                <Card.Body>
                  <Card.Title className="fw-medium fs-2">
                    {course.title}
                  </Card.Title>
                  <Card.Text>
                    <p className="fw-bold text-primary">{course.lesson}</p>
                    <p className="fw-bold text-primary">{course.duration}</p>
                  </Card.Text>
                  <button className="course_btn float-end">
                    <a href="">
                      <FaArrowRight size={20} />
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Courses;
