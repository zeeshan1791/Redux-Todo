import { GET_TODO, ADD_TODO, DELETE_TODO, GET_ONE_TODO } from "../types";
import axios from "axios";

export const gettodo = async (dispatch) => {
  const res = await axios.get(
    `https://627f79fdb1cc1b12625623d9.mockapi.io/todolist`
  );
  console.log(res);
  dispatch({
    type: GET_TODO,
    payload: res.data,
  });
};

export const addtodo = async (dispatch, data, callback) => {
  const res = await axios.post(
    `https://627f79fdb1cc1b12625623d9.mockapi.io/todolist`,
    data
  );
  callback(res);
};

export const deletetodo = async (id, callback) => {
  const res = await axios.delete(
    `https://627f79fdb1cc1b12625623d9.mockapi.io/todolist/${id}`
  );

  callback("deleted");
};

export const getOneodo = async (id, callback, dispatch) => {
  const res = await axios.get(
    `https://627f79fdb1cc1b12625623d9.mockapi.io/todolist/${id}`
  );
  dispatch({
    type: GET_ONE_TODO,
    payload: res.data,
  });
  callback(res.data);
};
export const updatetodo = async (id, data, callback) => {
  const res = await axios.put(
    `https://627f79fdb1cc1b12625623d9.mockapi.io/todolist/${id}`,
    data
  );

  callback(res.data);
};
