import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return (
        <div>
            <Router>
            <nav class="navbar header">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#">ORNETO</a>

                        <ul className='d-flex nav-items'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                </div>
            </nav>

            {/* <Switch>
                <Route path='/Home'>
                    <Home />
                </Route>
                <Route path='/About'>
                    <About />
                </Route>
                <Route path='/Blog'>
                    <Blog />
                </Route>
                <Route path='/Contact'>
                    <Contact />
                </Route>
            </Switch> */}
            </Router>
        </div>
    )
}

export default Header
