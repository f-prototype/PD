import React from 'react';
import { MainImage } from '../../components/MainImage/MainImage';
import contacts from '../../images/contacts.jpg';
import cls from './Contacts.module.scss';
import image from '../../images/politehIcon.png';

export const Contacts = () => {
  return (
    <div className={cls.container}>
      <MainImage image={contacts} text={'Контакты'} />

      <div className={cls.contacts}>
        <h2 className={cls.title}>Контакты</h2>
        <div className={cls.listsContainer}>
          <div className={cls.list}>
            <div className={cls.listElem}>
              <img src={image} alt="img" className={cls.icon} />
              <a href="https://mospolytech.ru/">Московский политех</a>
            </div>
            <div className={cls.listElem}>
              <img src={image} alt="img" className={cls.icon} />
              <a href="mailto:cpd@mospolytech.ru">
                Кафедра проектной деятельности
              </a>
            </div>
          </div>
          <div className={cls.list}>
            <div className={cls.listElem}>
              <img src={image} alt="img" className={cls.icon} />
              <a href="mailto:him.bio.tech@mospolytech.ru">
                Кафедра Биотехники
              </a>
            </div>
            <div className={cls.listElem}>
              <img src={image} alt="img" className={cls.icon} />
              <a href="mailto:isu@mospolytech.ru">
                Кафедра Информационных технологий
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.map}>
        <h2 className={cls.title}>Мы на карте</h2>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '0px',
            }}
          >
            Московский политехнический университет
          </a>
          <a
            href="https://yandex.ru/maps/213/moscow/category/university/184106140/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px',
            }}
          >
            ВУЗ в Москве
          </a>
          <a
            href="https://yandex.ru/maps/213/moscow/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '28px',
            }}
          >
            Дополнительное образование в Москве
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.715217%2C55.780852&mode=search&oid=1113152789&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJ4nMn2H8d9z8Ro5V7gVmh3j8iBgABAgMEBSgKOABA1QFIAWJGcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9NZWRpYUZsb3cvU3Rvcmllc0NvbnRlbnRUeXBlPW5vbl9kaXNjb3Zlcnlfb3Jnc2oCcnWdAc3MTD2gAQCoAQC9AVAsiIXCAYsBlbrlkgSk542rBvOIo78G%2Bc7Qrr4GiOTLjcICr8Obj6AEwsObr58G98Tiy9ME0emg3AScyfKJBbSY%2FcEEjdCI7ZYE2cSskgf11dWC8gKMudTbBJnv0aTxBJ6m%2BY5wiszD6IAEnozRm3fml8etvAGvt5jesAOb2tDqA6CdlMHhAuW6qsj4AviblPDdA4ICI9C80L7RgdC60L7QstGB0LrQuNC5INC%2F0L7Qu9C40YLQtdGFigIAkgIAmgIMZGVza3RvcC1tYXBzqgIvODk4ODU5Njc1ODAsMjM0MDQwMTQyODA2LDE4ODI1ODY4MTc2NSw4MDIxOTc3OTGwAgE%3D&sll=37.715217%2C55.780852&sspn=0.007471%2C0.003895&text=%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85&z=16.94"
            width="960"
            height="400"
            frameBorder="1"
            allowFullScreen={true}
            style={{ position: 'relative' }}
            className={cls.iframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
