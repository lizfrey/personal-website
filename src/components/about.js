import React from 'react';
import lobster from '../assets/lobster.png';

// eslint-disable-next-line react/function-component-definition
const About = (props) => {
  return (
    <div id="about">
      <h2>Hey! It&apos;s nice to meet you.</h2>
      <div>
        <img alt="lobster" src={lobster} />
        <p>
          My name is Elizabeth Frey. I was born in the Bay Area,
          but I grew up in Singapore and attended an international school. I
          am currently a rising junior at Dartmouth College majoring in Computer Science and
          minoring in Neuroscience and Math.
          <br />
          <br />
          I&apos;m passionate about the intersection of technology and innovation, about mental health awareness,
          and empowering women in STEM.
          <br />
          <br />
          I am always open to meeting new people and learning new things. Feel free to
          contact me using one of the links on the right or through email at
          <br />
          <br />
          <strong>ewillowfrey ( at ) gmail ( dot ) com</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
