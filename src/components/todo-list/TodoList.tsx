import { useLocalStorage } from 'usehooks-ts';
import { TodoType } from '../../types/todo';
import { TodoItem } from '../todo-item';

export function TodoList() {
  const [value] = useLocalStorage<TodoType[]>('todos-key-worker', []);

  return (
    <ul className=''>
      {value.map((todo) => (
        <TodoItem todo={todo} key={todo.key} />
      ))}
    </ul>
  );
}
