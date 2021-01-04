
//Importando archivos
import './styles.css';
import './css/componentes.css';
import { Todo, TodoList} from './classes' ; //Buscará el index.js
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log( 'todos', todoList.todos);

