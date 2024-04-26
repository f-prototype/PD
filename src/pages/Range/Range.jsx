import React from 'react';
import cls from './Range.module.scss';
import { MainImage } from '../../components/MainImage/MainImage';
import image from '../../images/range.jpg';
import { ListItem } from '../../components/ListItem/ListItem';
import micro from '../../images/micro1.jpg';
import micro2 from '../../images/micro2.jpg';
import micro3 from '../../images/micro3.jpg';
import micro4 from '../../images/micro4.jpg';
import micro5 from '../../images/micro5.jpg';
import micro6 from '../../images/micro6.jpg';

export const Range = () => {
  const micros = [micro, micro2, micro3, micro4, micro5, micro6];
  return (
    <div className={cls.container}>
      <MainImage image={image} text={'Ассортимент'} />
      <div className={cls.mainInfo}>
        <p>
          Так как конечным результатом разработки является не только установка,
          но и регуляция режимов её работы, подобранных под разнообразные
          агрокультуры, на основе проведённых нами исследований и практики, мы
          можем назвать следующие категории растений и не только, для
          выращивания в нашей установке:
        </p>
        <ListItem text={'Овощные культуры: Болгарский перец, огурцы, Томаты'} />
        <ListItem
          text={'Микрозелень: Горчица, различные виды салата, горошек, клевер'}
        />
        <ListItem text={'Грибы: Вешенка пищевая и Опята'} />
        <ListItem
          text={
            'Декоративные культуры: Цветы — Бархатцы, настурция, Подсолнухи, Левкой'
          }
        />
        <p className={cls.p}>
          Все выше перечисленные категории, являются востребованными для
          потребителя, так как напрямую связаны с тематикой Здорового,
          Натурального питания, это относиться к микрозелени, овощным культурам
          и грибам. Однако так же наша установка может быть средой для
          выращивания и декоративных культур, помогая пользователю выращивать и
          желаемые комнатные растения.
        </p>
        <h2 className={cls.title}>Наша микрозелень</h2>
        <div className={cls.imageBox}>
          {micros.map((el) => {
            return (
              <div className={cls.imgContainer}>
                <img src={el} alt="micro" className={cls.microImg} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
