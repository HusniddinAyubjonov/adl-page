import { Link } from "react-router-dom";
import { Post } from "../../constants";
import styles from "./Posts.module.css";

export default function Posts() {
  return (
      <div className={`${styles.posts} ${styles.container}`}>
        <span className={styles.postHead}>
          <h1 className={styles.postHeadTitle}>Latest Posts</h1>
          <div className={styles.postBtns}>
            <button className={styles.postButton}>All</button>
            <button className={styles.postButton}>Apps</button>
            <button className={styles.postButton}>Products</button>
            <button className={styles.postButton}>Tutorial</button>
          </div>
        </span>

        <div className={styles.postCards}>
          {Post.map((info, index) => (
            <Link to={info.link}>
              <div key={index} className={styles.postCard}>
                <img className={styles.postCardImg} src={info.img} alt="image" />
                <button className={styles.postCardButton}>{info.btnText}</button>
                <h3 className={styles.postCardTitle}>{info.title}</h3>
                <p className={styles.postCardDescription}>{info.description}</p>
                <hr className={styles.postCardLine}/>
                <div className={styles.user}>
                  <img className={styles.avatarIcon} src={info.avatar} alt="avatar" />
                  <span className={styles.userInfo}>
                    <h4 className={styles.userFullName}>{info.full_name}</h4>
                    <h5 className={styles.aboutUser}>{info.about_user}</h5>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
}
