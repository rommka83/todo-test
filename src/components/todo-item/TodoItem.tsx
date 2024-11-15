/* eslint-disable @typescript-eslint/no-unused-vars */
import { ITodoItem } from './TodoItem.types';
import { useLocalStorage } from 'usehooks-ts';
import { TodoType } from '../../types/todo';
import { FaCheck } from 'react-icons/fa';

export function TodoItem({ todo }: ITodoItem) {
  const [_, setValue] = useLocalStorage<TodoType[]>('todos-key-basic', []);

  const toggleTodo = (key: string) => {
    setValue((prevTodos) =>
      prevTodos.map((t) => (t.key === key ? { ...t, completed: !t.completed } : t)),
    );
  };

  return (
    <li
      className='flex items-center gap-4 border-b border-b-gray-300 p-4'
      data-testid='todo-item'
    >
      <div
        className='flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-300'
        onClick={() => toggleTodo(todo.key)}
        data-testid='ring'
      >
        {todo.completed && (
          <FaCheck className='h-6 w-6' color='#1cd60b' data-testid='check' />
        )}
      </div>
      <span
        className={`${todo.completed && 'text-secondary line-through'} text-3xl font-thin`}
      >
        {todo.value}
      </span>
    </li>
  );
}
