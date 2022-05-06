import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import image1 from "../../../../public/images/queridinhos/vestidos.jpeg";
import image2 from "../../../../public/images/queridinhos/conjunto.jpeg";
import image3 from "../../../../public/images/queridinhos/conjuntoBlack.jpeg";

export function Queridinhos() {
  return (
    <>
      <div className={styles.top}>
        <h2>Queridinhos</h2>
      </div>
      <div className={styles.imagesContainer}>
        <Link href="/vestidos" passHref>
          <div className={styles.images}>
            <Image src={image1} alt="image1" />
            <h2>Vestidos</h2>
            <button>confira</button>
          </div>
        </Link>
        <Link href="/calcas" passHref>
          <div className={styles.images}>
            <Image src={image3} alt="image3" />
            <h2>Saias</h2>
            <button>confira</button>
          </div>
        </Link>
        <Link href="/conjuntos" passHref>
          <div className={styles.images}>
            <Image src={image2} alt="image2" />
            <h2>Conjuntos</h2>
            <button>confira</button>
          </div>
        </Link>
      </div>
    </>
  );
}
