import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoPage from '../../pages/todo/index';

import CalendarRoute from '../calendar-route/calendar';
import VideoRoute from '../video-route/video';
import AboutRoute from '../about-route/about';
import Home from '../../pages/home/home';

class TodoRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/todo/' component={TodoPage} />
          <Route path='/about' component={AboutRoute} />
          <Route path='/calendar' component={CalendarRoute} />
          <Route path='/video' component={VideoRoute} />
          <Route path='/' component={Home}/>
          <Route render={() => <p>ページが見つかりません</p>} />
        </Switch>
      </Router>
    );
  }
}

export default TodoRoute;