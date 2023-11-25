import Container from "../../share-components/Container";
import cls from "./Footer.module.scss";
import {
  FaceBookIcon,
  InstagramIcon,
  TelegramIcon,
} from "../../share-components/icon";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Container>
        <div className={cls.footerTop}>
          <h3 className={cls.logo}>Logo</h3>
          <nav className={cls.nav}>
            <ul className={cls.navigation}>
              <li>
                <a href="#">Филиалы</a>
              </li>
              <li>
                <a href="#">О нас </a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={cls.footerBottom}>
          <p className={cls.text}>©Udevs 2020 - 2022 All rights reserved</p>
          <div className={cls.socials}>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <FaceBookIcon />
            </a>
            <a href="#">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
