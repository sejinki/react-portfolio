import React from 'react';

export default function About() {
  return (
    <div id="about" className="container" >
      <h1 className=''>About Me</h1>
      <p>
      <img src={process.env.PUBLIC_URL+"/screenshot/pic.png"}className="card-img-top" alt="..."at/>
       I am a full-stack web developer graduate from the university of utah. I live in Utah and currently work full time. I have a degree in English.
      </p>
    </div>
  );
}
