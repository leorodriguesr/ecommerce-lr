import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import styles from "./styles.module.scss";

import { maisVistos } from "../../../../pages/api/data";
import { MdFavoriteBorder } from "react-icons/md";

import image1 from "/public/images/maisVistos/image1.jpeg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "#ccc" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ccc" }}
      onClick={onClick}
    />
  );
}

export function MaisVistos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2>Mais Vistos</h2>
      <Slider {...settings}>
        {maisVistos.map((item, key) => (
          <div className={styles.card} key={key}>
            <div className={styles.image}>
              {/* <Image src={image1} alt='image' width={322} height={410} /> */}
              <span>{item.image}</span>
            </div>
            <div className={styles.title}>
              <p className={styles.p1}>{item.title}</p>
              <MdFavoriteBorder style={{ color: "red" }} />
            </div>
            <div>
              <p className={styles.p2}>6x {item.onTerm}</p>
              <p className={styles.p2}>ou {item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
