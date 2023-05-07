import style from './journey.module.scss';
import vector from 'images/vector.png';
import cornerLeft from 'images/corner_left.png';
import cornerRight from 'images/corner_right.png';
import { FC } from 'react';

export const Journey: FC = () => {
  return(
    <div className={style.journey}>
      <h1 className={style.journey_h1}>ПУТЕШЕСТВИЕ</h1>
      <p className={style.journey_p}>на красную планету</p>
      <button className={style.journey_button}>
        <img className={style.journey_button_img1} src={cornerLeft} alt='cornerLeft'></img>
        Начать путешествие
        <img className={style.journey_button_img2} src={cornerRight} alt='cornerRight'></img>
      </button>
      <img className={style.journey_vector} src={vector} alt='vector'></img>
    </div>
  );
};