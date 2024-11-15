import { useState } from 'react';
import { ICustomSelect } from './CustomSelect.types';
import { RiArrowDownWideLine, RiArrowUpWideFill } from 'react-icons/ri';
import { useLocalStorage } from 'usehooks-ts';
import { nanoid } from 'nanoid';
import { TodoType } from '../../types/todo';

export function CustomSelect({ children }: ICustomSelect) {
  const [open, isOpen] = useState(true);
  const [value, setValue] = useLocalStorage<TodoType[]>('todos-key-basic', []);
  const [inputValue, setInputValue] = useState('');

  const toggleDropdown = () => {
    isOpen(!open);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    setValue([
      ...value,
      { key: nanoid(), value: inputValue.trim(), completed: false },
    ]);
    setInputValue('');
  };

  return (
    <div className=''>
      <div className='flex items-center border-b border-b-gray-300 p-4'>
        {open ? (
          <RiArrowDownWideLine
            className='h-8 w-8 cursor-pointer text-gray-300'
            onClick={toggleDropdown}
          />
        ) : (
          <RiArrowUpWideFill
            className='h-8 w-8 cursor-pointer text-gray-300'
            onClick={toggleDropdown}
          />
        )}
        <form onSubmit={(e) => handleSubmit(e)} data-testid='form'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type='text'
            className='w-full px-4 text-3xl font-thin outline-none placeholder:italic'
            placeholder='What needs to be done'
            data-testid='input'
          />
        </form>
      </div>
      <div className={`${open ? 'h-auto' : 'h-0'} overflow-hidden`}>{children}</div>
    </div>
  );
}
