import React, { useState } from "react";
import axios from "axios";
import { Row, Form, Input, Button, Radio } from "antd";
import { CreateTodoContainer } from "./style";

function CreateTodo() {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoResponsible, setTodoResponsible] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [todoCompleted, setTodoCompleted] = useState(false);

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
  };

  const onFinish = (values) => {
    const newTodo = {
      todo_description: values.todoDescription,
      todo_responsible: values.todoResponsible,
      todo_priority: todoPriority,
      todo_completed: todoCompleted,
    };
    axios
      .post("http://localhost:4000/todos/add/", newTodo)
      .then((res) => {
        console.log(res.data);
        setTodoCompleted(false);
        setTodoDescription("");
        setTodoResponsible("");
        setTodoPriority("");
        window.location.assign("/");
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setTodoPriority(e.target.value);
  };
  return (
    <Row gutter={[16, 16]}>
      <CreateTodoContainer>
        <h2> Create Todo </h2>
        <Row className="form">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="CreateTodo"
              name="todoDescription"
              rules={[{ required: true, message: "Please input todo!" }]}
              value={todoDescription}
            >
              <Input value={todoDescription} />
            </Form.Item>

            <Form.Item
              label="ToDoResponsible"
              name="todoResponsible"
              rules={[{ required: true, message: "Please input responsive!" }]}
              value={todoResponsible}
            >
              <Input value={todoResponsible} />
            </Form.Item>

            <Row className="radio">
              <Radio.Group
                onChange={onChange}
                value={todoPriority}
                label="todoPriority"
              >
                <Radio value="Low" checked={todoPriority === "Low"}>
                  Low
                </Radio>
                <Radio value="Medium" checked={todoPriority === "Medium"}>
                  Medium
                </Radio>
                <Radio value="High" checked={todoPriority === "High"}>
                  High
                </Radio>
              </Radio.Group>
            </Row>

            <Row className="button">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Row>
      </CreateTodoContainer>
    </Row>
  );
}

export default CreateTodo;
