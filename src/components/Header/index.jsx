import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { Search } from "./Search";
import { Login } from "./Login";

import { BsGift } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <p>1ª TROCA GRÁTIS | FRETE GRÁTIS ACIMA DE R$500 | ACEITAMOS PIX</p>
      </div>
      <div className={styles.headerContent}>
        <nav>
          <a>
            <BsGift style={{ marginRight: "5px", fontSize: "18px" }} /> Cartão
            Presente
          </a>
          <a>
            <MdOutlineLocationOn style={{ fontSize: "20px" }} /> Nossa Loja
          </a>
          <a>Quem Somos</a>
        </nav>

        <span>
          <Link href="/">LUDIMILA REIS</Link>
        </span>

        <div className={styles.headerSearch}>
          <Search />
        </div>

        <section>
          <div>
            <Link href="/login">
              <MdPersonOutline
                style={{ fontSize: "23px", cursor: "pointer" }} />
            </Link>
            {/* <Login /> */}
          </div>

          <div>
            <MdFavoriteBorder style={{ fontSize: "23px", cursor: "pointer" }} />
          </div>
          <div>
            <MdOutlineShoppingBag
              style={{ fontSize: "23px", cursor: "pointer" }}
            />
          </div>
        </section>
      </div>
      <div className={styles.headerNav}>
        <nav>
          <Link href="/queridinhosdaludi">
            <a className={styles.a1}>QUERIDINHOS DA LUDI</a>
          </Link>
          <Link href="/vestidos">
            <a className={styles.a2}>VESTIDOS</a>
          </Link>
          <Link href="/conjuntos">
            <a className={styles.a3}>CONJUNTOS</a>
          </Link>
          <Link href="/blazers">
            <a className={styles.a4}>BLAZERS</a>
          </Link>
          <Link href="/croppets">
            <a className={styles.a5}>CROPPETS</a>
          </Link>
          <Link href="/calcas">
            <a className={styles.a6}>CALÇAS</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
