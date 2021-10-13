import classNames from 'classnames';
import React from 'react';
import './Badge.scss';
const Badge = (props) => (
  <i
    onClick={props.onClick}
    className={classNames(
      'badge',
      { [`badge--${props.color}`]: props.color },
      props.className
    )}
  ></i>
);

export default Badge;
