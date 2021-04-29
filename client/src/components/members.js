import React from "react";
import Surendra from "../Surendra.JPG";
import Venkatesh from "../Venkatesh.JPG";
import Ankit from "../Ankit Raut.jpg";
import person from "../member.jpg";

const Members = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img
                  src={Venkatesh}
                  alt="Member Name"
                  width="325"
                  height="350"
                />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
                B Venkatesh{" "}
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  Ph.D.
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>Civil Engineering</p>
              <small>(CEO and Founder)</small>
            </h3>
          </div>
        </div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img
                  src={Surendra}
                  alt="Member Name"
                  width="325"
                  height="350"
                />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
                Surendra Errepalli{" "}
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  M.tech
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>Civil Engineering</p>
              <small>(COO)</small>
            </h3>
          </div>
        </div>

        <div class="clearfix visible-xs visible-sm"></div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img src={Ankit} alt="Member Name" width="325" height="350" />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
                Ankit Raut{" "}
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  Ph.D.
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>Mechanical Engineering</p>
              <small>(Member)</small>
            </h3>
          </div>
        </div>

        <div class="col-md-3 col-xs-6 col-xss-12">
          <div class="member text-center">
            <div class="member-top">
              <figure>
                <img src={person} alt="Member Name" width="325" height="350" />
              </figure>
            </div>
            <h3 class="member-title">
              <p style={{ color: "aquamarine", fontWeight: "bold" }}>
                Harsha{" "}
                <sub style={{ color: "white", fontWeight: "normal" }}>
                  Ph.D.
                </sub>
              </p>
              <p style={{ paddingTop: "1px" }}>
                Computer Science and Engineering
              </p>
              <small>(Member)</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
