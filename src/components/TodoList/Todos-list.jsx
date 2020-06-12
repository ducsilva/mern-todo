import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Table,
  Checkbox,
  Button,
  Spin,
  AutoComplete,
  Input,
} from "antd";
import Todo from "../Todo";
import Loading from "../Loading";
import { connect } from "react-redux";
import { getTodos } from "../../actions";
import { TodoListContainer, CheckboxButton, SearchComplete } from "./style";

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
      <Row>
        <Col span={6}>
          <CheckboxButton>
            <Checkbox checked>Todos List</Checkbox>
          </CheckboxButton>
        </Col>
        <Col span={18}>
          <SearchComplete>
            <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{ width: "50%" }}
              options={todoList}
              filterOption={(inputValue, option) => console.log(inputValue)}
              // onSelect={onSelect}
              // onSearch={handleSearch}
            >
              <Input.Search placeholder="Search todo here" enterButton />
            </AutoComplete>
          </SearchComplete>
        </Col>
      </Row>

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
