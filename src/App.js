import React from 'react';
import './App.css';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import Blog from './pages/Blog';
import Error from './pages/Error';
import BlogDetails from './pages/blog-details';
import { BrowserRouter, Route,Switch } from "react-router-dom";

import './assets/css/style.css';
import './assets/css/responsive.css';

function App() {
  return (
    <BrowserRouter basename={'/'}>
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
            <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={HomeTwo}/>
            <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
            <Route exact path={`${process.env.PUBLIC_URL}/blog/0`} component={BlogDetails}/>
            <Route  path={`${process.env.PUBLIC_URL}/blog/:number`} component={BlogDetails}/>
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
