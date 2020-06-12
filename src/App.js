import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import DeleteTodo from "./components/delete-todo.component";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Header from './components/Header';
import Footer from './components/Footer';
import DetailProfile from "./components/DetailProfile";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localStorage: false,
    }
  }
  componentWillMount() {
    if (localStorage.getItem('user') !== null) {
      this.setState({ localStorage: !this.state.localStorage })
    }
    else {
      this.setState({
        localStorage: this.state.localStorage
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={TodosList} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
          <Route path="/detail" component={DetailProfile} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;