import React from 'react';
import cls from './MainImage.module.scss';

export const MainImage = ({ text, image }) => {
  return (
    <div
      className={cls.headerImage}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className={cls.headerText}>{text}</p>
    </div>
  );
};
