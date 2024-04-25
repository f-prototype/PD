import React from 'react';
import politehIcon from '../../images/politehIcon.png';
import rassada from '../../images/rassada.jpg';
import code from '../../images/code.jpg';
import automation from '../../images/automation.jpg';
import cls from './Homepage.module.scss';
import image from '../../images/1.jpg';
import { MainImage } from '../../components/MainImage/MainImage';

export const Homepage = () => {
  return (
    <div className={cls.container}>
      <MainImage image={image} text={'СИТИ-ФЕРМА'} />
      <div className={cls.mainInfoBox}>
        <h2 className={cls.title}>ПРОЕКТ</h2>
        <div className={cls.infoBox}>
          <img src={politehIcon} alt="img" className={cls.frstImg} />
          <p>
            На нашем проекте мы применяем навыки и знания студентов разных
            направлений подготовки, с различных факультетов Московского
            Политеха, для создания установки, сити-фермы нового типа. В нашей
            команде сочетаются знания и компетенции: факультета Биотехнологии,
            Техносферной Безопасности, а также факультета Информационных
            Технологий.
          </p>
        </div>
        <h2 className={cls.title}>АСПЕКТЫ</h2>
        <div className={cls.infoBox}>
          <div className={cls.imageBox}>
            <div className={cls.asideImage}>
              <img src={rassada} alt="img" />
            </div>
            <div className={cls.bsideImage}>
              <img src={code} alt="img" />
              <img src={automation} alt="img" />
            </div>
          </div>
          <p>
            Благодаря этому мы ведём комплексную и полную разработку нашего
            проекта, начиная с аспектов связанных с подбором наиболее
            оптимальных условий для выращивания растений, и других полезных
            пищевых культур, заканчивая написанием программного кода для
            автоматизации нашей установки и обеспечения её сборки.
          </p>
        </div>
      </div>
    </div>
  );
};
