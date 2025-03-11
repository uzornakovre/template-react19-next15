import styles from "./_feedback.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloaderOverlay}>
      <div className={styles.preloader} />
    </div>
  );
};

export default Preloader;
