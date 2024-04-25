import React from 'react';
import cls from './MyFooter.module.scss';

export const MyFooter = () => {
  return (
    <footer className={cls.container}>
      <div>
        <p>© Created by Alex Sazonov 2024</p>
      </div>
      <div className={cls.contactsContainer}>
        <div>
          <h5>Контакты</h5>
          <div className={cls.contacts}>
            <a href="https://mospolytech.ru/">Московский политех</a>
            <a href="mailto:cpd@mospolytech.ru">
              Кафедра проектной деятельности
            </a>
            <a href="mailto:him.bio.tech@mospolytech.ru">Кафедра Биотехники</a>
            <a href="mailto:isu@mospolytech.ru">
              Кафедра Информационных технологий
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
