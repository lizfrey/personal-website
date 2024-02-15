import React from 'react';
import '../style.scss';
import professional from '../assets/professional.jpg';

// eslint-disable-next-line react/function-component-definition
const Home = (props) => {
  return (
    <div id="home">
      <img id="professional" src={professional} alt="business dress" />
      <div id="name">
        <h1>Elizabeth Frey</h1>
        <h2>Software Engineer</h2>
      </div>
    </div>
  );
};

export default Home;
