import './List.scss';
import classNames from 'classnames';

const List = (props) => {
  return (
    <ul className="list">
      {props.items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>
            {item.icon ? (
              item.icon
            ) : (
              <i className={`badge badge--${item.color}`}></i>
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
