import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/App.scss";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useStateValue } from "./provider/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
