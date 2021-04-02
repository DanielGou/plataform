import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Sigup from './pages/Sigup'
import Publications from './pages/Publications'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/sigup' component={ Sigup }/>
        <Route exact path='/publications' component={Publications}/>
      </Switch>
    </Router>
  );
}

export default App;
