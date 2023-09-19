import './index.module.css';
import styles from './index.module.css';

function Explain() {
  return (
    <div className={styles.explaincontainer}>
      <div className={styles.h1}>どのような聞き方をすればよいのか</div>
      <div className={styles.p}>使い方の説明</div>
      <a href="/detail">
        <button className={styles.btn}>もっと詳しく</button>
      </a>
    </div>
  );
}

export default Explain;
