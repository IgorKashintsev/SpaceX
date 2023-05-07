import { Journey } from './journey/journey';
import { Profit } from './profit/profit';
import style from './main.module.scss';
import styleTemplate from '../../template.module.scss';
import { FC } from 'react';

export const Main: FC = () => {
  return(
    <main className={`${styleTemplate.container} ${style.main}`}>
      <Journey/>
      <Profit/>
    </main>
  );
};