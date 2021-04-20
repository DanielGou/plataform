import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Sigup from './pages/Sigup'
import VerifyEmail from './pages/VerifyEmail'
import CreatePost from './pages/CreatePost';
import RenderPages from './pages/RenderPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/sigup' component={ Sigup }/>
        <Route exact path='/chekedEmail' component={VerifyEmail}/>
        <Route exact path='/create' component={CreatePost}/>
        <Route exact path='/post/:id' component={RenderPages}/>
      </Switch>
    </Router>
  );
}

export default App;
