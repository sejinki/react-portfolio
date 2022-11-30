import React from 'react';
import nationalParks from '../screenshot/natlParks.png'

export default function Project() {
  return (
    <div id="project">
      <h1>Portfolio Page</h1>
      <p>

      </p>
     
      <div className="card" style={{width: "18rem"}}>
        <img src={nationalParks}className="card-img-top" alt="national parks"at/>
          <div className="card-body">
            <h5 className="card-title">Utah's National Parks</h5>
            <p className="card-text">Users can obtain all the activities within a park along with the current weather.</p>
            <a href = "https://github.com/dillonpatino/Project-1" className = "btn btn-primary">Github: </a>
            <a href="file:///Users/sejinki/Desktop/Coding%20Boot%20Camp/Project-1/index.html" className="btn btn-primary">Live: </a>
          </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/passwordgen.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">Generate a password that meets the requirements set by the user.</p>
            <a href="https://github.com/sejinki/password-generator" className="btn btn-primary">Github:</a>
            <a href="https://github.com/sejinki/password-generator" className="btn btn-primary">Live:</a>
          </div>
      </div>


      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/productivityApp.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Productivity App</h5>
            <p className="card-text">The user can make a to-do list for daily, weekly, and monthly tasks. They can also cross them off as they go.</p>
            <a href="https://github.com/lcsantana1/Productivity-App" className="btn btn-primary">Github:</a>
            <a href="https://github.com/lcsantana1/Productivity-App" className="btn btn-primary">Live:</a>
          </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/codingquiz.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Coding Quiz </h5>
            <p className="card-text">Created a quiz with a timer with multiple choice answers.</p>
            <a href="https://github.com/sejinki/coding-quiz-challenge" className="btn btn-primary">Github:</a>
            <a href="https://github.com/sejinki/coding-quiz-challenge" className="btn btn-primary">Live:</a>
          </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/PWA.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Progressive Web App</h5>
            <p className="card-text">Social Media</p>
            <a href="https://github.com/sejinki/Progressive-Web-App" className="btn btn-primary">Github:</a>
            <a href="https://github.com/sejinki/Progressive-Web-App" className="btn btn-primary">Live:</a>
          </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/weatherapp.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">The user can search a city and get the daily weather as well as a five day forecast.</p>
            <a href="https://github.com/sejinki/weather-app" className="btn btn-primary">Github:</a>
            <a href="https://github.com/sejinki/weather-app" className="btn btn-primary">Live:</a>
          </div>
      </div>


    </div>
  );
}
