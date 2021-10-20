
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home';
import LoginSignUp from './pages/LoginSignup/LoginSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/destinationsHome">
            <Home></Home>
          </Route>
          <Route path="/booking/:destinationId">
            <Booking></Booking>
          </Route>
          <Route path="/news">

          </Route>
          <Route path="/blogs">

          </Route>
          <Route path="/contacts">

          </Route>
          <Route path="/loginSignup">
            <LoginSignUp></LoginSignUp>
          </Route>
          <Route path="*">

          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
