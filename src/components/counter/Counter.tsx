import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { TodoType } from '../../types/todo';

export function Counter() {
  const [valueBasic] = useLocalStorage<TodoType[]>('todos-key-basic', []);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(valueBasic.filter((todo) => !todo.completed).length);
  }, [valueBasic]);

  return <span className='text-secondary'>{value} items left</span>;
}
