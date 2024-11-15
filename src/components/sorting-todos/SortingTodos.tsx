/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from 'react';
import { TodoType } from '../../types/todo';
import { useLocalStorage } from 'usehooks-ts';
import { nanoid } from 'nanoid';

export function SortingTodos() {
  const SortingTodos: ('All' | 'Active' | 'Completed')[] = [
    'All',
    'Active',
    'Completed',
  ];
  const [isActive, setIsActive] = useState<'All' | 'Active' | 'Completed'>('All');
  const [valueBasic] = useLocalStorage<TodoType[]>('todos-key-basic', []);
  const [_, setValueWorker, removeValueWorker] = useLocalStorage<TodoType[]>(
    'todos-key-worker',
    valueBasic,
  );

  useEffect(() => {
    setValueWorker(valueBasic);

    return () => {
      removeValueWorker();
    };
  }, []);

  useEffect(() => {
    if (isActive === 'Active') {
      setValueWorker(valueBasic.filter((todo) => !todo.completed));
    } else if (isActive === 'Completed') {
      setValueWorker(valueBasic.filter((todo) => todo.completed));
    } else {
      setValueWorker(valueBasic);
    }

    return () => {
      removeValueWorker();
    };
  }, [isActive, valueBasic]);

  return (
    <div className='flex gap-4'>
      {SortingTodos.map((sorting) => (
        <button
          className={`${isActive === sorting ? 'border-[#e0c2bf]' : 'border-transparent'} text-secondary rounded-md border px-2 py-1`}
          onClick={() => setIsActive(sorting)}
          key={nanoid()}
        >
          {sorting}
        </button>
      ))}
    </div>
  );
}
