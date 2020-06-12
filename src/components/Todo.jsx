import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import "@reach/dialog/styles.css";
import "../index.css";
import { Button, Popconfirm, Row, Col, message } from "antd";

function Todo(props) {
  const handleSubmit = () => {
    axios
      .delete("http://localhost:4000/todos/delete/" + props.todo._id)
      .then((res) => message.success("Delete todo success!"));
    // window.location.assign("/");
  };

  return (
    <Row>
      <Col span={12}>
        <Link to={"/edit/" + props.todo._id}>
          <Button>Edit</Button>
        </Link>
      </Col>
      <Popconfirm
        title={`"Are you sure delete ${props.todo.todo_description}?"`}
        okText="Yes"
        cancelText="No"
        onConfirm={handleSubmit}
      >
        <Button className="btn btn-danger">delete</Button>
      </Popconfirm>
    </Row>
  );
}

export default Todo;
