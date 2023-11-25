// import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cls.navbarWrap}>
      <div className={cls.navbarBox}>
        <ul className={cls.navbarList}>
          <li className={cls.listLink}>
            <a href="/">Меню</a>
          </li>
          <li className={cls.listLink}>
            <a href="/" >Филиалы</a>
          </li>
          <li className={cls.listLink}>
            <a href="/">О нас</a>
          </li>
          <li className={cls.listLink}>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
