import React from 'react';
import { Link } from 'react-router-dom';
import cls from './MyHeader.module.scss';

export const MyHeader = () => {
  return (
    <header className={cls.container}>
      <Link to="/">Главная</Link>
      <Link to="/project">О проекте</Link>
      <Link to="/range">Ассортимент</Link>
      <Link to="/working">Работа с установкой</Link>
      <Link to="/contacts">Контакты</Link>
    </header>
  );
};
