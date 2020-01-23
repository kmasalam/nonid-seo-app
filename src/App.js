import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import Blog from './pages/Blog';
import BlogDetails from './pages/blog-details';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import {BlogData} from './components/blog/BlogApi'

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
        </Switch>
    </BrowserRouter>
  );
}

export default App;
