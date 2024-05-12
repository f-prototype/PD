import React from 'react';
import { MainImage } from '../../components/MainImage/MainImage';
import oops from '../../images/oops.avif';
import work from '../../images/ustanovka.jpg';
import cls from './Working.module.scss';
import flier from '../../images/flier.pdf';

export const Working = () => {
  return (
    <div>
      <MainImage image={work} text={'Прототип ситифермы'} />
      <h2 className={cls.title}>Наш буклет</h2>
      <div className={cls.flierContainer}>
        <embed
          src={flier}
          type="application/pdf"
          width="100%"
          height="100%"
        ></embed>
      </div>
    </div>
  );
};
