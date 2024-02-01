import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import TodoList from "./TodoList";
import CustomRoute from "./CustomRoute ";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <CustomRoute 
          path="/home"
          component={Home}
          isLoggedIn={isLoggedIn}
        />
        <CustomRoute 
          path="/signup"
          render={() => <Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/login" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/todo" component={TodoList} />
        <Route path="/" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Switch>
    </Router>
  );
}

export default App;
