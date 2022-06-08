const initialValue = {
  todos: [],
  todo:{}
};

const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "DELETE_TODO":
      return {
        // todos: action.payload,
        // todos: state.filter(({id}) => id !== action.payload.id)
      };
      case "GET_ONE_TODO":
        return {
          ...state,
          // todos: action.payload,
          todo: action.payload
        };
    default:
      return state;
  }
};
export default todoReducer;
