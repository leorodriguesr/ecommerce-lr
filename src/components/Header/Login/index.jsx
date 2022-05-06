import styles from "./styles.module.scss";

import { MdPersonOutline } from "react-icons/md";



import { signIn, signOut, useSession } from "next-auth/client";

export function Login() {
  
  const [session] = useSession();

  return session ? (
    <button
      className={styles.logged}
      type="button"
      onClick={() => signOut()}
    >
      <p>LR</p>
    </button>
  ) : (
    <button
      className={styles.loggedOut}
      type="button"
      onClick={() => signIn("github")}
    >
      <MdPersonOutline style={{ fontSize: "23px", cursor: "pointer" }} />
    </button>
  );
}
