import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./components.scss";
// import { Col, Row } from "react-bootstrap";

function Feedback() {
  const Feeds = [
    {
      name: "Family Therapy Client",
      testify:
        "Our family dynamic has improved so much since working with Alexander Comfort. They helped us resolve long-standing conflicts and improve our communication.",
    },
    {
      name: "Parent of a teen therapy client",
      testify:
        "My teenage daughter was initially resistant to therapy, but Alexander Comfort built a trusting bond with her. She’s now more open and emotionally resilient.",
    },
    {
      name: "Counseling Therapy Client",
      testify:
        "Before counseling, I was overwhelmed by stress. Thanks to Alexander Comfort, I’ve learned coping mechanisms that allow me to thrive, even in challenging times.",
    },
    {
      name: "Individual Therapy Client",
      testify:
        "I’ve been to many therapists before, but Alexnader Comfort is the first to truly connect with me. Their insight and care have helped me heal from past trauma.",
    },
    {
      name: "Group Therapy Participant",
      testify:
        "The group therapy sessions were a turning point for me. Hearing others’ experiences and sharing my own helped me feel less alone in my struggles.",
    },
    {
      name: "Career Therapy Client",
      testify:
        "I came to Alexander Comfort feeling completely lost in my career. Now, I have a clear vision of my goals and the courage to pursue them.",
    },
    {
      name: "Parent of a Child Therapy Client",
      testify:
        "My child loves going to therapy sessions with Alexander Comfort. Their patience and creative methods have helped us manage his tantrums and build his confidence",
    },
    {
      name: "Couples Therapy Client",
      testify:
        "After our sessions, I’ve been able to reconnect with my spouse on a deeper level. We now communicate better and truly understand each other’s needs",
    },
    {
      name: "Client Struggling with Anxiety",
      testify:
        "Working with Alexander Comfort changed my life. I finally feel heard and understood, and I’ve gained tools to manage my anxiety effectively.",
    },
  ];
  return (
    <>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            480: {
              perPage: 1,
            },
            640: {
              perPage: 1,
            },
            320: {
              perPage: 1,
            },
            360: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
          },
          arrows: true,
          type: "loop",
          gap: "10px",
          rewind: true,
          focus: "center",
          drag: "free",
          pagination: false,
          lazyLoading: "sequential",
        }}
      >
        {Feeds.map((items, index) => {
          return (
            <SplideSlide key={index}>
              <div className="feed-carrier">
                <div className="card h-100  p-4 border-2 rounded-3 text-center justify-content-center align-items-center">
                  <div className="card-body">
                    <p className="card-text">{items.testify}</p>
                    <h5 className="card-title fw-normal fst-italic">
                      {items.name}
                    </h5>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

export default Feedback;
