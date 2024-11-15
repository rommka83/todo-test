import { ClearComplited } from './components/clear-complited';
import { Counter } from './components/counter';
import { CustomSelect } from './components/custom-select';
import { SortingTodos } from './components/sorting-todos';
import { TodoList } from './components/todo-list';
function App() {
  return (
    <main className='h-screen w-screen bg-gray-200'>
      <h1 className='text-center text-9xl font-thin text-[#e0c2bf]'>todos</h1>
      <div className='mx-auto w-4/5'>
        <div className='w-full bg-white drop-shadow-lg'>
          <CustomSelect>
            <TodoList />
          </CustomSelect>
          <div className='flex items-center justify-between p-4'>
            <Counter />
            <SortingTodos />
            <ClearComplited />
          </div>
        </div>
        <div className='mx-auto h-2 w-[99%] border border-gray-300 bg-gray-200 drop-shadow-lg'></div>
        <div className='mx-auto h-2 w-[98%] border border-gray-300 bg-gray-200 drop-shadow-lg'></div>
      </div>
    </main>
  );
}

export default App;
