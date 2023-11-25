import Container from "../../share-components/Container";
import cls from "./Banner.module.scss";
import banner from  "../../../assets/png/banner.png"

const Banner = () => {
  return (
    <div className={cls.bannerWrap}>
      <Container>
          <div className={cls.imgWrap}>
              <img src={banner} alt="" />
          </div>
      </Container>
    </div>
  );
};

export default Banner;
