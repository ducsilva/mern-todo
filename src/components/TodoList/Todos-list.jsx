import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Row, Col, Table, Checkbox, Button, Spin } from "antd";
import Todo from "../Todo";
import Loading from "../Loading";
import { connect } from "react-redux";
import { getTodos } from "../../actions";
import Search from "../Search";
import { TodoListContainer, CheckboxButton } from "./style";

function TodosList() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        console.log("response===>>", response.data);
        setTodoList(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "Description",
      dataIndex: "todo_description",
      key: "todo_description",
    },
    {
      title: "Responsible",
      dataIndex: "todo_responsible",
      key: "todo_responsible",
    },
    {
      title: "Priority",
      dataIndex: "todo_priority",
      key: "todo_priority",
    },
    {
      title: "Action",
      render: (currentTodo, i) => {
        return (
          <>
            <Todo todo={currentTodo} key={i} />
          </>
        );
      },
      key: "Action",
      width: 200,
    },
  ];

  return (
    <TodoListContainer>
      <Search />
      <CheckboxButton>
        <Checkbox checked>Todos List</Checkbox>
      </CheckboxButton>
      <Spin spinning={loading}>
        <Table
          dataSource={todoList}
          columns={columns}
          bordered
          pagination={{ pageSize: 5 }}
        />
      </Spin>
    </TodoListContainer>
  );
}

// export default connect(null, mapDispatchToProps)(TodosList);
export default TodosList;
