import React, {useState} from "react";
import image from "../images/logo.png"
import {TextField} from '@mui/material';

const Home = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="home">
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
            <h1 class="font-weight-light">Home</h1>
            <p>
                Welcome to Saltubolic Coaching Services where we change your life through fitness. Whether you're trying to lose, gain, or maintain weight,
                we've got you covered. Feel free to contact us to learn more about our services. 
            </p>

            <TextField
                label = "Enter email"
                variant = 'standard'
                value = {email}
                onChangeText = {(newValue) => setEmail(newValue)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;