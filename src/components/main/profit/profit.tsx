import { FC } from 'react';
import style from './profit.module.scss';

export const Profit: FC = () => {
  return(
    <div className={style.profit}>
      <div className={style.profit_gridTop_left}>
        <p>мы</p>
        <h1 className={style.profit_gridTop_left_h1}>1</h1>
        <p>на рынке</p>
      </div>
      <div className={style.profit_gridTop_right}>
        <p>гарантируем</p>
        <h1 className={style.profit_gridTop_right_h1}>50%</h1>
        <p>безопасность</p>
      </div>
      <div className={style.profit_gridBottom_left}>
        <p>календарик за</p>
        <h1 className={style.profit_gridBottom_left_h1Сalendar}>2001<span>г.</span></h1>
        <p>в подарок</p>
      </div>
      <div className={style.profit_gridBottom_right}>
        <p>путешествие</p>
        <h1 className={style.profit_gridBottom_right_h1}>597</h1>
        <p>дней</p>
      </div>
    </div>
  );
};