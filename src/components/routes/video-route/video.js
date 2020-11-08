import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoPage from '../../pages/video/index';

import AboutRoute from '../about-route/about';
import CalendarRoute from '../calendar-route/calendar';
import TodoRoute from '../todo-route/todo';
import Home from '../../pages/home/home';

class VideoRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/video/' component={VideoPage} />
          <Route path='/todo' component={TodoRoute} />
          <Route path='/about' component={AboutRoute} />
          <Route path='/calendar' component={CalendarRoute} />
          <Route path='/' component={Home}/>
          <Route render={() => <p>ページが見つかりません</p>} />
        </Switch>
      </Router>
    );
  }
}

export default VideoRoute;