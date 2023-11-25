import cls from "./Menu.module.scss";
import { menu } from "../../../mock/menu";
import Container from "../../share-components/Container";

const Menu = () => {
  return (
    <div className={cls.menuWrap}>
      <Container>
        <div className={cls.menu}>
          {menu.map((menus) => (
            <p className={cls.menusTitle}>{menus.title}</p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
