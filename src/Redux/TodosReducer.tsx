// TodosReducer - Gestisce una lista di todos con azioni di aggiunta, rimozione e modifica

// Tipo per un singolo todo
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Tipo dello stato
export interface TodosState {
  todos: Todo[];
}

// Action types
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const RESET_TODOS = "RESET_TODOS";

// Action creators
export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: { title },
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const resetTodos = () => ({
  type: RESET_TODOS,
});

// Stato iniziale
const initialState: TodosState = {
  todos: [],
};

// Reducer
export default function todosReducer(
  state: TodosState = initialState,
  action: any,
): TodosState {
  switch (action.type) {
    case ADD_TODO: {
      const newId =
        state.todos.length > 0
          ? Math.max(...state.todos.map((t) => t.id)) + 1
          : 1;
      return {
        todos: [
          ...state.todos,
          {
            id: newId,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    }

    case REMOVE_TODO: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    case TOGGLE_TODO: {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    }

    case RESET_TODOS: {
      return initialState;
    }

    default:
      return state;
  }
}
