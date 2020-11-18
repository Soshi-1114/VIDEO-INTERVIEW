import React from 'react';
import WithHeader from '../../Header/with-header';
import Footer from '../../Footer/index';
import './styles.css'

class Home extends React.Component {
  
  render() {
    return (
      <div>
        <WithHeader/>
          <div className="home-contents">
            <div className="app-name">
              <div>THE VIDEO</div>
              <div>INTERVIEW</div>
            </div>
          </div>
          <div className="arrow-bottom"></div>
          <hr/>
          <div className="about-contents">
            <div className="howto-video">
              <h1>About This App</h1>
              <h2>Video</h2>
              <p>Let's practice!</p>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;