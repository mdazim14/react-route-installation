import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Friend from './components/Friend/Friend';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  
  return (
    <div className="">
      
      <Router>
        <Switch>
          <Route path="/home"> 
            <Home></Home>
          </Route>

          <Route path="/friend/:friendId"> 
            <FriendDetail></FriendDetail>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
