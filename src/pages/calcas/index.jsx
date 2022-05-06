import { BannerNav } from "../../components/BannerNav";

import { RoupasNavs } from "../api/data";
import styles from "./styles.module.scss";

import { MdFavoriteBorder } from "react-icons/md";


export default function QueridinhosdaLudi() {
  return (
    <>
      <div>
        <BannerNav />
      </div>
      <div className={styles.name}>
        <h2>Calças</h2>
      </div>
      <div className={styles.containerRoupasNav}>
        {RoupasNavs.map((item, key) => (
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
      </div>
    </>
  );
}
