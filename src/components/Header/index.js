import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Header extends React.Component {
  
  render() {
    return (
      <header className="header">
        <div className="left-side">
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/video">Video</Link>
            <Link to="/todo">Todo</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;