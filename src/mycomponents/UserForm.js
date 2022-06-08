import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, gettodo,updatetodo } from "../redux/actions/userAction";

const UserForm = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");
  const [recordId,setRecordId] =useState('')
  const dispatch = useDispatch();
  const {todos,todo} = useSelector((state) => state.todo);

  useEffect(()=>{
    setRecordId(todo.id)
      setName(todo.name)
      setDes(todo.des)
      setDate(todo.date)
  },[todo])
//hello
  function handlesubmit(e) {
    e.preventDefault();
    if(recordId && recordId.length){
      updatetodo(recordId,{ name, des, date }, function () {
        setRecordId('')
        setName('')
        setDes('')
        setDate('')
        gettodo(dispatch);
      });

    }else {
      addtodo(dispatch, { name, des, date }, function () {
        gettodo(dispatch);
      });
    }
 
  }

  return (
    <>
      <div className="Input-container">
        <h1>Todo List</h1>
        <Formik>
          <Form onSubmit={handlesubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name here"
            />
            <br />
            <br />
            <input
              type="text"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Enter Description here"
            />
            <br />
            <br />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter Date"
            />
            <br />
            <br />
            <button className="btn btn-dark ml-3" type="submit">
              {recordId ?  
               'Update User'
               :
              ' Add User'
              
            }
            
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default UserForm;

//onClick={()=> dispatch(gettodo(setName, setDes, setDate))}
