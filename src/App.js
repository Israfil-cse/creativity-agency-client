import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PlacedOrder from './Components/PlacedOrder/PlacedOrder';
import ServiceList from './Components/ServiceList/ServiceList';
import Review from './Components/Review/Review';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import ServicesUser from './Components/ServicesUser/ServicesUser';
import AddService from './Components/AddService/AddService';
import MekeAdmin from './Components/MekeAdmin/MekeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/OrderInfo/:OrderInfo_id">
            <PlacedOrder></PlacedOrder>
          </Route>
          <Route path="/ServiceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/Review">
            <Review></Review>
          </Route>
          <Route path="/ServicesUser">
            <ServicesUser></ServicesUser>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MekeAdmin></MekeAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
