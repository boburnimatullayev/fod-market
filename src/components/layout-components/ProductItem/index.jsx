import Container from "../../share-components/Container";
import img from "../../../assets/png/kombo1.png";

const ProductItem = ({ item, cls }) => {
  return (
    <aside>
      <img src={img} alt={item.title} />
      <div className={cls.productItemBody}>
        <h4 className={cls.productItemTitle}>{item.title}</h4>
        <p className={cls.productItemDec}>{item.dec}</p>
        <div className={cls.productItemFooter}>
          <p className={cls.productPrice}>
            {item.price} <span>сум</span>
          </p>

          <button className={cls.addBtn}>Добавить</button>
        </div>
      </div>
    </aside>
  );
};

export default ProductItem;
