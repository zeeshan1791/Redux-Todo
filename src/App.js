import "./App.css";
import UserForm from "./mycomponents/UserForm";
import UserList from './mycomponents/UserList';
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <UserForm />
      <UserList />
    </Provider>
  );
}

export default App;
