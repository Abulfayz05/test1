import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
//Layout qismi
function Layout({ children }) {
  return (
    <div>
     
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>

  
    </div>
  );
}

export default Layout;
