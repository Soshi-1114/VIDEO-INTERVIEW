import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/video">Video</Link>
          <Link to="/todo">Todo</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;