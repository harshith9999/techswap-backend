import Footer from "./Footer";
import NavigationBar from "./Navbar/Navbar";

function Contact() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <NavigationBar />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
