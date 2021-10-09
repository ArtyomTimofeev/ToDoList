import List from '../List/List';
import React, { Fragment } from 'react';
import './AddList.scss';

const AddList = () => {
  return (
    <div className="add-list">
      <List
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
      <div className="add-list__popup"></div>
    </div>
  );
};
export default AddList;
