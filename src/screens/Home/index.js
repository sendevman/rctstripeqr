import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Home() {
  return (
    <div className="home">
      <Link to="/qrcode">QRCode</Link>
    </div>
  );
}

export default Home;
