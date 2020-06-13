import axios from "axios";
import { handleError } from "./util";

export const getAllTodo = () =>
  axios
    .get("http://localhost:4000/todos/")
    .then((response) => {
      debugger;
      console.log("response===>>", response.data);
    })
    .catch(handleError);
