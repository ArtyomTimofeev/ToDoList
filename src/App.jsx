import s from './App.module.scss';
import List from './components/List';

function App() {
  return (
    <div className={s.todo}>
      <div className={s.todo__sidebar}>
        <List />
      </div>
      <div className={s.todo__tasks}></div>
    </div>
  );
}

export default App;
