const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const PORT = 4000;
const dbConfig = require("./config/database.config");

let Todo = require("./models/todo.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

todoRoutes.route("/").get(function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Todo.findById(id, function (err, todo) {
    res.json(todo);
  });
});

todoRoutes.route("/update/:id").post(function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo) res.status(404).send("data is not found");
    else todo.todo_description = req.body.todo_description;
    todo.todo_responsible = req.body.todo_responsible;
    todo.todo_priority = req.body.todo_priority;
    todo.todo_completed = req.body.todo_completed;

    todo
      .save()
      .then((todo) => {
        res.json("Todo updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

todoRoutes.route("/add").post(function (req, res) {
  let todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      console.log(todo);

      res.status(200).json({ message: "todo added successfully", todo });
    })
    .catch((err) => {
      res.status(400).send("adding new todo failed");
    });
});

// todoRoutes.route('/delete/:id').postpost(function (req, res) {
//     Todo.findByIdAndDelete(req.params.id, function (err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//         todo.todo_responsible = req.body.todo_responsible;
//         todo.todo_priority = req.body.todo_priority;
//         todo.todo_completed = req.body.todo_completed;

//         todo.save().then(todo => {
//             res.json('Todo updated!');
//         })
//         .catch(err => {
//             res.status(400).send("Update not possible");
//         });
//     });
// });
todoRoutes.route("/delete/:id").delete(function (req, res) {
  Todo.findByIdAndRemove(req.params.id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: "Todo not found with id " + req.params.id,
        });
      }
      res.send({ message: "Todo deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Todo not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete todo with id " + req.params.id,
      });
    });
});

app.use("/todos", todoRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
