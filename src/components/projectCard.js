import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

// eslint-disable-next-line react/function-component-definition
const ProjectCard = (props) => {
  const [flipped, setFlipped] = useState(false);
  const {
    image, name, color, description, link,
  } = props;

  if (flipped) {
    return (
      <div role="listitem" className="project-card" style={{ backgroundColor: color }} onClick={() => { setFlipped(!flipped); }}>
        {link ? <a href={link}><h4>{name}</h4></a> : <h4>{name}</h4>}
        <p>{description}</p>
      </div>
    );
  } else {
    return (
      <div role="listitem" className="project-card-flipped" style={{ backgroundColor: color }} onClick={() => { setFlipped(!flipped); }}>
        {image ? <div className="icon"><ReactSVG src={image} /></div> : <h3>{name}</h3>}
      </div>
    );
  }
};

export default ProjectCard;
