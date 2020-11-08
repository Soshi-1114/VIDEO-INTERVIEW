import React from 'react';
import WithHeader from '../../Header/with-header';
import Footer from '../../Footer/index';
import './styles.css';

class AboutPage extends React.Component {
  
  render() {
    return (
      <div>
        <WithHeader/>
          <div className="page-title">
            <div className="text">
              <p>About Page</p>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;