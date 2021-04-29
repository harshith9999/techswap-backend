import Footer from "./Footer";
import NavigationBar from "./Navbar/Navbar";
import banner from "../banner2.png";

function About() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <NavigationBar />
        <div className="about">
          <img src={banner} />
          <div className="body2">
            <h1>About us</h1>
            TechSWAP is a start-up company initiated by a group of enthusiastic
            IIT Madras.
            <h1 className="pt-5">Vision</h1>TechSWAP main aim is “To develop
            decent knowledge and improve technical skills on engineering stream
            subjects by conducting Seminars & Workshops. TechSWAP open the
            knowledge doors of the students’ which is constrain only for the
            classrooms to the field/practical. Further it also deals the
            students undergraduate (i.e. B.Tech/B.E.) and postgraduate
            (M.Tech/M.E.) projects which are useful for the society along their
            bright future”.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
