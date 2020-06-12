import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/Create-todo";
import EditTodo from "./components/Edit-todo";
import TodosList from "./components/Todos-list";
import DeleteTodo from "./components/Delete-todo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from './components/Header';
import Footer from './components/Footer';
import DetailProfile from "./components/DetailProfile";


function App(){
  const [localStore, setLocalStore] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setLocalStore(!localStorage)
    }
    else {
      setLocalStore(localStorage)
    }
  }, [localStore])
  return (
    <Router>
        <Header />
        <Route path="/" exact component={TodosList} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/delete/:id" component={DeleteTodo} />
        <Route path="/detail" component={DetailProfile} />
        <Footer />
    </Router>
  );
}

export default App;