import React from 'react';
import Header from './index';
import './with-header.css';


class WithHeader extends React.Component {
  
  render() {
    return (
      <div className="with-header">
        <Header/>
      </div>
    );
  }
}

export default WithHeader;