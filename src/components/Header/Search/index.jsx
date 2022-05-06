import styles from './styles.module.scss';

import { MdSearch } from "react-icons/md";
import { MdMic } from "react-icons/md";

export function Search() {
  return (
    <div className={styles.SearchContainer}>
      <div>
        <MdMic style={{ fontSize: "22px", cursor: "pointer" }} />
      </div>
      <input type="text" placeholder="Procure seu look..." />
      <div>
        <MdSearch style={{ fontSize: "22px", cursor: "pointer" }} />
      </div>
    </div>
  )
}