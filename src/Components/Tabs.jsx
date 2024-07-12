import Tab from "react-bootstrap/Tab";
import {useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Movies from "./Movies";

function Tablets() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
    >
      <Tab eventKey="home" title="Home">
        <Movies/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Tablets;
