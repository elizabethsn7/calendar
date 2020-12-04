import React from "react";
import { Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { createBrowserHistory as createHistory } from "history";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const history = createHistory();

function App({ calendarStore }) {
  return (
    <div>
      <Router history={history}>
        <Navbar variant="dark" className="justify-content-center">
          <Navbar.Brand href="#home">Weekly Calendar</Navbar.Brand>
        </Navbar>
        <Route
          path="/"
          exact
          component={(props) => (
            <HomePage {...props} calendarStore={calendarStore} />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
