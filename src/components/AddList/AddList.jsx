import List from '../List/List';
import React, { useState } from 'react';
import './AddList.scss';
import Badge from '../Badge/Badge';
import closeSvg from '../../assets/img/close.svg';

const AddList = (props) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(props.colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const addListItem = () => {
    if (!inputValue) {
      alert('Введите название списка!');
      return;
    }
    const color = props.colors.filter((c) => c.id === selectedColor)[0].name;
    props.onAdd({
      id: Math.random(),
      name: inputValue,
      color,
    });
    onClose();
  };

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setVisiblePopup(false);
    selectColor(props.colors[0].id);
  };

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: 'list__add-btn',
            icon: (
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: 'Добавить список',
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={onClose}
            src={closeSvg}
            alt="Close button"
            className="add-list__popup-close-btn"
          />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название списка"
          ></input>
          <div className="add-list__popup-colors">
            {props.colors.map((color) => (
              <Badge
                onClick={() => selectColor(color.id)}
                color={color.name}
                key={color.id}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button onClick={addListItem} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};
export default AddList;
