import React from 'react';
import { BrowserRouter as Router,Redirect, Switch,Route } from "react-router-dom"

import HomeScreen from "../container/HomePage"
import ProfileScreen from "../container/ProfilePage"
import MainNavigation from "../components/navigation/mainNavigation"

const MyRouter = props =>{
return(
    <Router>
        <MainNavigation  />
      <main>
      <Switch>
            <Route path="/" exact  component ={HomeScreen} />
            <Route path="/profile"   component ={ProfileScreen} />
        </Switch>
      </main>
    </Router>
)
}

export default MyRouter