import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home";
import Top from "../Top";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/top">Checkout</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/top" component={Top} />
    </main>
  </div>
);

export default App;
