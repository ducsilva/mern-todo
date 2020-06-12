import React, { Component } from "react";
import axios from "axios";
import { TinyPagination } from "react-pagination-custom";
import { Row, Col } from "antd";

import Todo from "./Todo";
import Loading from "./Loading";
import { connect } from "react-redux";
import { getTodos } from "../actions";
import Search from "./Search";

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], selectedPageId: 1, localStorage: false };
    this.changePage = this.changePage.bind(this);
    this.renderBtnNumber = this.renderBtnNumber.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem("user") !== null) {
      this.setState({ localStorage: !this.state.localStorage });
    } else {
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: " + nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: " + nextState.todos);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  todoList(listShow) {
    return listShow.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  changePage(id) {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        selectedPageId: id,
      };
    });
  }

  buttonPageClick(id) {
    let { selectedPageId } = this.state;
    switch (id) {
      case "PRE":
        this.changePage(selectedPageId - 1);
        break;
      case "NEXT":
        this.changePage(selectedPageId + 1);
        break;
      default:
        this.changePage(id);
        break;
    }
  }

  renderBtnNumber(id) {
    let { selectedPageId } = this.state;
    return (
      <button
        onClick={this.buttonPageClick.bind(this, id)}
        key={id}
        className={`page ${selectedPageId === id ? "selected-page" : ""}`}
      >
        {id}
      </button>
    );
  }

  render() {
    let { selectedPageId, todos } = this.state;
    const itemPerPage = 5;
    // const maxBtnNumbers = 6;
    let listShow = [...todos];
    listShow = listShow.splice((selectedPageId - 1) * itemPerPage, itemPerPage);
    return (
      <Row gutter={16}>
        <Loading />
        <div>
          <Search />
          <h3>Todos List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Responsible</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.todoList(listShow)}</tbody>
          </table>
          <TinyPagination
            total={todos.length}
            selectedPageId={this.state.selectedPageId}
            itemPerPage={itemPerPage}
            renderBtnNumber={this.renderBtnNumber}
            // maxBtnNumbers={maxBtnNumbers}
            preKey="Prev"
            nextKey="Next"
            wrapStyle={{ backgroundColor: "#ffffff" }}
            wrapClass="page-container"
            btnsClass="btns-container"
            counterClass="counter-container"
            counterStyle={{ color: "green" }}
            spreadClass="spread-container"
            spreadStyle={{ padding: "0 5px" }}
          />
        </div>
      </Row>
    );
  }
}

const mapDispatchToProps = {
  getTodos: getTodos,
};

export default connect(null, mapDispatchToProps)(TodosList);
