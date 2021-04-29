import Mail from "./form";
import NavigationBar from "./Navbar/Navbar";

function Register() {
  return (
    <div>
      <NavigationBar />
      <div className="d-flex justify-content-center mb-4">
        <Mail />
      </div>
    </div>
  );
}

export default Register;
