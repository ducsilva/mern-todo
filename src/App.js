import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "./style";
import CreateTodo from "./components/CreateTodo/Create-todo";
import EditTodo from "./components/Edit-todo";
import TodosList from "./components/TodoList/Todos-list";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import DetailProfile from "./components/DetailProfile";

function App() {
  const [localStore, setLocalStore] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setLocalStore(!localStorage);
    } else {
      setLocalStore(localStorage);
    }
  }, [localStore]);
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" exact component={TodosList} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/detail" component={DetailProfile} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
