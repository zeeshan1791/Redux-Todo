import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettodo,deletetodo,getOneodo }from "../redux/actions/userAction";
const UserList = () => {
  const { todos } = useSelector((state) => state.todo);
  const [userData, setUserData] = useState([]);


  const dispatch = useDispatch();
  useEffect(() => {
    gettodo(dispatch);
  }, []);
  useEffect(() => {
    setUserData(todos);
  }, [todos]);

 const  handleDelete = (id) => {
  deletetodo(id,function(res){
     if(res){
      gettodo(dispatch);
     }
  })

 }
const handleEdit = (id) => {
  getOneodo(id,function(res){
    if(res){
   
    }
 },dispatch)
}

  return (
    <>
      <div className="list-Container">
        <h4>List of Users</h4>
        <table border="2px">
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Discription</th>
              <th>Date</th>
              <th colSpan="2">action</th>
            </tr>
            {userData?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.des}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={() =>handleDelete(item.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
