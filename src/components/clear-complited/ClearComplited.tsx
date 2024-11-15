import { useLocalStorage } from 'usehooks-ts';
import { TodoType } from '../../types/todo';

export function ClearComplited() {
  const [valueBasic, setValueBasic] = useLocalStorage<TodoType[]>(
    'todos-key-basic',
    [],
  );

  const handleClearComplited = () => {
    setValueBasic(valueBasic.filter((todo) => !todo.completed));
  };

  return (
    <button
      className='text-secondary'
      onClick={handleClearComplited}
      data-testid='clear'
    >
      Clear completed
    </button>
  );
}
