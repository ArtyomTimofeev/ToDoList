import s from '../App.module.scss';
import listSvg from '../assets/img/list.svg';

const List = () => {
  return (
    <ul className={s.todo__list}>
      <li>
        <i>
          <img src={listSvg} alt="List icon" />
        </i>
        <span>Все задачи</span>
      </li>
      <li>Покупки</li>
      <li>Фронтенд</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default List;
