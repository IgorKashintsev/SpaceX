import logoImg from 'images/SpaceX-Logo-PNG-as-Smart-Object-3.png';
import cornerLogo_topLeft from 'images/cornerLogo_topLeft.png';
import cornerLogo_topRight from 'images/cornerLogo_topRight.png';
import cornerLogo_bottomLeft from 'images/cornerLogo_bottomLeft.png';
import cornerLogo_bottomRight from 'images/cornerLogo_bottomRight.png';
import style from './header.module.scss';
import styleTemplate from '../../template.module.scss';
import { FC } from 'react';

export const Header: FC = () => {
  const handleClick = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    ev.preventDefault();
    return false;
  };

  return(
    <header className={style.header_wrap}>
      <div className={`${styleTemplate.container} ${style.header}`}>
        <div className={style.header_logoWrap}>
          <img className={style.header_logoWrap_imgTopLeft} src={cornerLogo_topLeft} alt="" />
          <img className={style.header_logoWrap_imgTopRight} src={cornerLogo_topRight} alt="" />
          <img className={style.header_logoWrap_imgBottomLeft} src={cornerLogo_bottomLeft} alt="" />
          <img className={style.header_logoWrap_imgBottomRight} src={cornerLogo_bottomRight} alt="" />
          <img src={logoImg} alt='logo'></img>
        </div>
        <nav className={style.header_nav}>
          <a onClick={(ev) => handleClick(ev)} href="#">Главная</a>
          <a onClick={(ev) => handleClick(ev)} href="#">Технология</a>
          <a onClick={(ev) => handleClick(ev)} href="#">График полетов</a>
          <a onClick={(ev) => handleClick(ev)} href="#">Гарантии</a>
          <a onClick={(ev) => handleClick(ev)} href="#">О компании</a>
          <a onClick={(ev) => handleClick(ev)} href="#">Контакты</a>
        </nav>
      </div>
    </header>
  );
};