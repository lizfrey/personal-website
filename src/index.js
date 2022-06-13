import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

function App() {
  return (
    <div>Home Page</div>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
