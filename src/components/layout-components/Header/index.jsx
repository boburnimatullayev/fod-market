import { Link } from "react-router-dom";
import Container from "../../share-components/Container";
import cls from "./Header.module.scss";
import Navbar from "../Navbar";
import {
  BacketIcon,
  ExpandIcon,
  LocationIcon,
  RuIcon,
} from "../../share-components/icon";

const Header = () => {
  return (
    <header>
      <Container>
        <div className={cls.header}>
          <div className={cls.headerLeftBox}>
            <a className={cls.desctopLogo}>Logo</a>
            <div className={cls.navbar}>
              <Navbar />
            </div>
          </div>
          <div className={cls.headerRightBox}>
            <div className={cls.locationWrap}>
              <button className={cls.address}>
                <LocationIcon />
              </button>
              <p className={cls.locationTitle}>
                Достафка или Заказ с собой <br />
                <span> Выберите способ получения</span>
              </p>
            </div>
            <div className={cls.actionWrap}>
              <button className={cls.basketBnt}>
                <BacketIcon />
              </button>

              <div className={cls.lang}>
                <RuIcon />
                <div className={cls.expandIcon}>
                  <ExpandIcon />
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.langList}>
                    <h3 className={cls.listItem}>O’zbekcha</h3>
                    <h3 className={cls.listItem}>Русский</h3>
                    <h3 className={cls.listItem}>English</h3>
                  </div>
                </div>
              </div>
              <button className={cls.loin}>
                 Войти
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
