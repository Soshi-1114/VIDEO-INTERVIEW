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
        <Footer/>
      </div>
    );
  }
}

export default Home;