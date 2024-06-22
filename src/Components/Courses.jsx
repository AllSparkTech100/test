import { Container, Row, Col, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./button.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Courses() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
    });
  });
  const courseList = [
    {
      title: "Extra Curricular Activities",
      lesson: "12 Lessons",
      duration: "12 Weeks",
      imgurl:
        "https://www.lumierechild.com/wp-content/uploads/2020/01/PlayingTogetherEncouragingChildrentoEngageinCooperativePlay-1.jpg",
    },
    {
      title: "Reading Culture",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://npr.brightspotcdn.com/dims4/default/4ceafe0/2147483647/strip/true/crop/749x500+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fstateofopp%2Ffiles%2F201605%2F5549756649_8a9825a3ec_o.jpg",
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
      title: "Basic Technology",
      lesson: "12 Lesons",
      duration: "12 weeks",
      imgurl:
        "https://bondartech.com/wp-content/uploads/modernTechnology_620977929_400-1.jpg",
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
    <Container className="mt-5">
      <Row className="g-2">
        {courseList.map((course) => {
          return (
            <Col key={course.id} md={4} lg={4} sm={12} data-aos="fade-up"
          data-aos-duration="500">
              <Card id="course_card"  className="bg-white my-3 mx-1 h-100">
                <Card.Img variant="top" className="h-50" src={course.imgurl} />

                <Card.Body>
                  <Card.Title className="fw-medium fs-2">
                    {course.title}
                  </Card.Title>
                  <Card.Text>
                    <p className="fw-bold mt-4 text-primary">{course.lesson}</p>
                    <p className="fw-bold mt-4 text-primary">{course.duration}</p>
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
