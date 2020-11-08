import React from 'react';
import WithHeader from '../../Header/with-header';
import Footer from '../../Footer/index';
import './styles.css';

class CalendarPage extends React.Component {
  
  render() {
    return (
      <div>
        <WithHeader/>
          <div className="page-title">
            <div className="text">
              <p>Calendar Page</p>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default CalendarPage;