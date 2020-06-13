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

const TodosList = (props) => {
  console.log("props==>>", props);
  const { todoList, fetching, error, fetchTodoList } = props;

  useEffect(() => {
    fetchTodoList();
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

      <Spin spinning={fetching}>
        <Table
          dataSource={todoList}
          columns={columns}
          bordered
          pagination={{ pageSize: 5 }}
        />
        {/* <Button onClick={fetchProducts}>fetchProducts</Button> */}
      </Spin>
    </TodoListContainer>
  );
};

export default TodosList;
// export default TodosList;
