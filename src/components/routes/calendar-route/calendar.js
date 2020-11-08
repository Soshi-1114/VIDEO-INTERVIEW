import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalendarPage from '../../pages/calendar/index';

import VideoRoute from '../video-route/video';
import AboutRoute from '../about-route/about';
import TodoRoute from '../todo-route/todo';
import Home from '../../pages/home/home';

class CalendarRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/calendar/' component={CalendarPage} />
          <Route path='/todo' component={TodoRoute} />
          <Route path='/about' component={AboutRoute} />
          <Route path='/video' component={VideoRoute} />
          <Route path='/' component={Home}/>
          <Route render={() => <p>ページが見つかりません</p>} />
        </Switch>
      </Router>
    );
  }
}

export default CalendarRoute;