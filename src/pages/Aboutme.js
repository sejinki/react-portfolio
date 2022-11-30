import React from 'react';
import profile from '../screenshot/pic.jpeg'

export default function About() {
  return (
    <div id="about" className="container" >
     
      <div className='d-flex align-items-center'>
        <img src={profile} alt="..." width={350} className='rounded-circle'/>
        <p className='px-3'>
          I am a full-stack web developer graduate from the university of utah. I live in Utah and currently work full time. I have a degree in English.
        </p>
      </div>
    </div>
  );
}
