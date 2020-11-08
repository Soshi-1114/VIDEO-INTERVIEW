import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from '../../pages/about/index';

import CalendarRoute from '../calendar-route/calendar';
import TodoRoute from '../todo-route/todo';
import VideoRoute from '../video-route/video';
import Home from '../../pages/home/home';


class AboutRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/about/' component={AboutPage} />
          <Route path='/calendar' component={CalendarRoute} />
          <Route path='/todo' component={TodoRoute} />
          <Route path='/video' component={VideoRoute} />
          <Route path='/' component={Home}/>
          <Route render={() => <p>ページが見つかりません</p>} />
        </Switch>
      </Router>
    );
  }
}

export default AboutRoute;