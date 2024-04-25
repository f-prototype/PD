import React from 'react';
import cls from './ListItem.module.scss';
import plant from '../../images/plant.png';

export const ListItem = ({ text }) => {
  return (
    <div className={cls.container}>
      <img src={plant} alt="rhombus" className={cls.icon} />
      <span>{text}</span>
    </div>
  );
};
