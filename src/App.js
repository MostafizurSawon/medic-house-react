import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/LoginAndRegistration/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Register from './components/LoginAndRegistration/Register';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import swal from 'sweetalert';
import './App.css'
import Doctors from './components/Doctors/Doctors';
import About from './components/About/About';
import ServiceFull from './components/ServiceFull/ServiceFull';
import Hello from './components/Hello/Hello';

function App() {
  return (
    <div className="container-fluid custom-default">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/service">
            <ServiceFull></ServiceFull>
          </PrivateRoute>
          <Route path="/details/:serviceId">
              <Hello></Hello>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
