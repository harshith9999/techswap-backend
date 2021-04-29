import React, { Component } from "react";
import "./Pages.css";
import axios from "axios";
const BASE_URL = `http://localhost:8080`
class App extends Component {
  async postData() {
    try {
      const headers = { "Content-Type": "application/json" };
      let result = await axios.post(
        `${BASE_URL}/users/register`,
        this.state,
        headers
      );

      console.log("result is posted", result);
    } catch (error) {
      console.log(error);
    }
  }
  constructor() {
    super();
    this.state = {
      Institute: "",
      Name: "",
      Mobile: "",
      Department: "",
      Date: "",
      State: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeInstituteName = this.changeInstituteName.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.changeDepartment = this.changeDepartment.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeInstituteName(event) {
    this.setState({
      Institute: event.target.value,
    });
  }
  changeFullName(event) {
    this.setState({
      Name: event.target.value,
    });
  }
  changeContact(event) {
    this.setState({
      Mobile: event.target.value,
    });
  }
  changeDepartment(event) {
    this.setState({
      Department: event.target.value,
    });
  }
  changeDate(event) {
    this.setState({
      Date: event.target.value,
    });
  }
  changeState(event) {
    this.setState({
      State: event.target.value,
    });
  }

  render() {
    return (
      <div className="border border-color-white p-5 form">
        <h2>Registration Form</h2>

        <form class6Name="w-75">
          <div class="form-group mt-5">
            <label for="college_name_id" class="control-label">
              Name of your Institute
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="college_name_id"
              name="Institute_name"
              placeholder=""
              onChange={this.changeInstituteName}
              value={this.state.instituteName}
            />
          </div>
          <div class="form-group">
            <label for="full_name_id" class="control-label">
              Full Name
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="full_name_id"
              name="full_name"
              placeholder=""
              onChange={this.changeFullName}
              value={this.state.fullName}
            />
          </div>
          <div class="form-group">
            <label for="contact_number_id" class="control-label">
              Contact Number
            </label>
            <input
              required
              type="Number"
              class="form-control"
              id="contact_number_id"
              name="contact_number"
              placeholder=""
              onChange={this.changeContact}
              value={this.state.contact}
            />
          </div>
          <div class="form-group">
            <label for="department_id" class="control-label">
              Department
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="department_id"
              name="department"
              placeholder=""
              onChange={this.changeDepartment}
              value={this.state.department}
            />
          </div>
          <div class="form-group">
            <label for="date_id" class="control-label">
              Delighted date of Seminar/Workshop
            </label>
            <input
              required
              type="date"
              class="form-control"
              id="date_id"
              name="date"
              placeholder=""
              onChange={this.changeDate}
              value={this.state.date}
            />
          </div>

          <div class="form-group">
            <label for="state_id" class="control-label">
              State
            </label>
            <select
              class="form-control"
              id="state_id"
              onChange={this.changeState}
              value={this.state.state}
            >
              <option value="AL">Andhra Pradesh</option>
              <option value="AK">Arunachal Pradesh</option>
              <option value="AZ">Assam</option>
              <option value="AR">Bihar</option>
              <option value="CA">Chhattisgarh</option>
              <option value="CO">Goa</option>
              <option value="CT">Gujarat</option>
              <option value="DE">Haryana</option>
              <option value="DC">Himachal Pradesh</option>
              <option value="FL">Jammu and Kashmir</option>
              <option value="GA">Jharkhand</option>
              <option value="HI">Karnataka</option>
              <option value="ID"> Kerala</option>
              <option value="IL">Madhya Pradesh</option>
              <option value="IN">Maharashtra</option>
              <option value="IA"> Manipur</option>
              <option value="KS">Meghalaya </option>
              <option value="KY">Mizoram</option>
              <option value="LA">Nagaland</option>
              <option value="ME">Odisha</option>
              <option value="MD">Punjab</option>
              <option value="MA">Rajasthan</option>
              <option value="MI">Sikkim</option>
              <option value="MN">Tamil Nadu</option>
              <option value="MS">Telangana</option>
              <option value="MO">Tripura</option>
              <option value="MT">Uttar Pradesh</option>
              <option value="NE">Uttarakhand</option>
              <option value="NV"> West Bengal</option>
            </select>
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(event) => {
                event.preventDefault()
                this.postData();
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
