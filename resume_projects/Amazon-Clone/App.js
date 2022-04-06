import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";


function App() {
    
    // BEM
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    
                
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
