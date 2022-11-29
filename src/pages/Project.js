import React from 'react';

export default function Project() {
  return (
    <div id="project">
      <h1>Project Page</h1>
      <p>

      </p>
     
      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/natlParks.png"}className="card-img-top" alt="national parks"at/>
          <div className="card-body">
            <h5 className="card-title">Utah's National Parks</h5>
            <p className="card-text">Users can obtain all the activities within a park along with the current weather.</p>
            <a href = "https://github.com/dillonpatino/Project-1" className = "btn btn-primary">Github: </a>
            <a href="file:///Users/sejinki/Desktop/Coding%20Boot%20Camp/Project-1/index.html" className="btn btn-primary">Live: </a>
          </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/password.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Password Genereator</h5>
            <p className="card-text">HTML, JS,eventlist.</p>
            <a href="#" className="btn btn-primary">Github:</a>
            <a href="#" className="btn btn-primary">Live:</a>
          </div>
      </div>


      <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL+"/screenshot/password.png"}className="card-img-top" alt="..."at/>
          <div className="card-body">
            <h5 className="card-title">Password Genereator</h5>
            <p className="card-text">HTML, JS,eventlist.</p>
            <a href="#" className="btn btn-primary">Github:</a>
            <a href="#" className="btn btn-primary">Live:</a>
          </div>
      </div>


    </div>
  );
}
