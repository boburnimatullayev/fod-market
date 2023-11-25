import cls from "./Products.module.scss";
import { products } from "../../../mock/products";
import Container from "../../share-components/Container";
import ProductItem from "../ProductItem";

const Products = () => {
  return (
    <div className={cls.productsWrap}>
      <Container>
        {products.map((product) => (
          <section key={product.id} className={cls.product}>
            <h1 className={cls.productTitle}>{product.title}</h1>
            <div className={cls.productItemWrap}>
              {product.food.map((item) => (
                <div key={item.id} className={cls.productItem}>
                  <ProductItem item={item} cls={cls} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </div>
  );
};

export default Products;
