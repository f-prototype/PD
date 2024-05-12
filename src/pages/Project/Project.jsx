import React from 'react';
import cls from './Project.module.scss';
import idea from '../../images/lightbulb.png';
import truck from '../../images/truck.png';
import target from '../../images/target.png';
import flask from '../../images/flask.png';
import image from '../../images/project.jpeg';
import { MainImage } from '../../components/MainImage/MainImage';

export const Project = () => {
  return (
    <div className={cls.container}>
      <MainImage image={image} text={'Наш Проект'} />
      {/* <h2 className={cls.title}>Тезисы</h2> */}
      <div className={cls.mainInfo}>
        <div className={cls.info}>
          <img src={idea} className={cls.icon} alt="img" />
          <p>
            Идея создания проекта пришла к нам на основе рассмотрения актуальных
            запросов общества, так как в последнее время мы можем заметить рост
            интереса у потребителя к таким темам как: Здоровое Питание, и
            сити-фермерству как таковому.
          </p>
        </div>
        <div className={cls.info}>
          <img src={truck} className={cls.icon} alt="img" />
          <p>
            Это вызвано тем, что Логистика доставки свежих продуктов более
            привычным способом становиться всё сложнее, из-за растущей
            численности населения, и растущего спроса, что сказывается на цене и
            качестве продуктов питания.
          </p>
        </div>
        <div className={cls.info}>
          <img src={target} className={cls.icon} alt="img" />
          <p>
            Наш проект ставит свой целью решить данные проблемы, за счёт
            предложения потребителю универсального и простого способа
            самостоятельно выращивать растительные культуры, получая здоровые и
            натуральные продукты гораздо дешевле и эффективнее, чем при обычном
            способе.
          </p>
        </div>
        <div className={cls.info}>
          <img src={flask} className={cls.icon} alt="img" />
          <p>
            Для этого мы проводим различные испытания и исследования, по
            оптимизации условий выращивания, вместе с этим разрабатывая и
            улучшая механическую часть нашей установки.
          </p>
        </div>
      </div>
    </div>
  );
};
