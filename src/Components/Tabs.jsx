import Tab from "react-bootstrap/Tab";
import {useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Movies from "./Movies";
import './button.scss';

function Tablets() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Tv Shows" title="TV Shows">
        <Movies/>
      </Tab>
      <Tab eventKey="Documentary"  title="Documentary">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Movies" title="Movies" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="Sport"  title="Sports" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Tablets;
