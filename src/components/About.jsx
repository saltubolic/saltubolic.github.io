import React from "react";
import image from "../images/partner.jpg";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src= {image}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
                Michael and Harmon have been lifting for several years. Our main focus has been bodybuilding,
                however recently we've both been getting into powerlifting. Harmon is currently on the UW Powerlifting
                Team, and Michael will be joining the team this semester. We've tried multiple splits and have learned
                what works for us and others through helping friends along the way. We've come up with our current workout plans
                through the literature, but also through practice. We hope to bring you closer to any goals you may have!  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

  
export default About;