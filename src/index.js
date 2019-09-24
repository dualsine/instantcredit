import React from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import "./styles.scss";

import Home from "./components/Home";
// import Users from "./components/Users";
// import User from "./components/User";
import Questions from "./components/Questions";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Cookies from "./components/Cookies";

const routing = (
  <Router>
    <div id="top">
      <div className="container">
        <NavLink exact activeClassName="active" to="/" id="top-logo">
          IC.pl
        </NavLink>
        <ul id="top-ul">
          <li>
            <NavLink activeClassName="active" to="/pytania-i-odpowiedzi">
              Pytania i odpowiedzi
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/poznaj-nas">
              Poznaj nas
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/kontakt">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/zaloguj-sie">
              Zaloguj się
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div id="content">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pytania-i-odpowiedzi" component={Questions} />
          <Route path="/poznaj-nas" component={About} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/zaloguj-sie" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    {/* <Cookies /> */}
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
