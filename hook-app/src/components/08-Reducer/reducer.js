

const initialState = [{
  id: 1,
  todo: 'Hola',
  donde: true
}]

const todoReducer = (state = initialState, action)=>{

  switch (action?.type) {
    case 'add':
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}

const newTodo = {
  id: 1,
  todo: 'Holsasasaa',
  donde: false
}

const addTodo = {
  type: 'add',
  payload: newTodo
};


let todos = todoReducer();

todos = todoReducer(todos, addTodo)

console.log(todos);