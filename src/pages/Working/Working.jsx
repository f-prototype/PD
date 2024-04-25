import React from 'react';
import { MainImage } from '../../components/MainImage/MainImage';
import oops from '../../images/oops.avif';

export const Working = () => {
  return (
    <div>
      <MainImage image={oops} text={'В данный момент ведется разработка'} />
    </div>
  );
};
