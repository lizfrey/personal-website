import React from 'react';
import { ReactSVG } from 'react-svg';

import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import resume from '../assets/icons/resume.svg';
import source from '../assets/icons/source.svg';
import resumepdf from '../assets/resume.pdf';
import './style.scss';

function Contact(props) {
  return (
    <ul className="contact">
      {/* eslint-disable-next-line no-restricted-globals */}
      <a label="linkedin link" href="https://www.linkedin.com/in/elizabethwfrey/" target="_blank" rel="noopener noreferrer">
        <li>
          <ReactSVG src={linkedin} />
        </li>
      </a>
      <a label="github link" href="https://github.com/lizfrey" target="_blank" rel="noopener noreferrer">
        <li>
          <ReactSVG src={github} />
        </li>
      </a>
      <a label="resume link" href={resumepdf} target="_blank" rel="noopener noreferrer">
        <li>
          <ReactSVG src={resume} />
        </li>
      </a>

      <a label="source code link" href="https://github.com/lizfrey/personal-website" target="_blank" rel="noopener noreferrer">
        <li>
          <ReactSVG src={source} />
        </li>
      </a>
    </ul>
  );
}

export default Contact;
