import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import AboutRoute from './components/routes/about-route/about';
import CalendarRoute from './components/routes/calendar-route/calendar';
import VideoRoute from './components/routes/video-route/video';
import TodoRoute from './components/routes/todo-route/todo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={AboutRoute}/>
          <Route path='/calendar' component={CalendarRoute} />
          <Route path='/video' component={VideoRoute} />
          <Route path='/todo' component={TodoRoute} />
          <Route render={() => <p>ページが見つかりません</p>} />
        </Switch>
      </Router>
    );
  }
}

export default App;