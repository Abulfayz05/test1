import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import useSound from "use-sound";


function Navbar({ data }) {
  const router = useRouter();
  const [play] = useSound("sound.wav");

  return (
    <div className={styles.nav_container}>
      <div className={styles.catalog_nav}>
        <Link href="/">
          <a
            className={router.pathname == "/" ? "item active" : "item"}
            onClick={play}
          >
            Bosh sahifa{" "}
          </a>
        </Link>
        <Link href="/about">
          <a
            className={router.pathname == "/about" ? "item active" : "item"}
            onClick={play}
          >
            Biz haqimizda
          </a>
        </Link>
        <Link href="/service">
          <a
            className={router.pathname == "/service" ? "item active" : "item"}
            onClick={play}
          >
            Xizmatlar
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={router.pathname == "/contact" ? "item active" : "item"}
            onClick={play}
          >
            Bog'lanish
          </a>
        </Link>
        <Link href="/server">
          <a
            className={router.pathname == "/server" ? "item active" : "item"}
            onClick={play}
          >
            api color
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
