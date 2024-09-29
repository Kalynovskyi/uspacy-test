import styles from "./StickyBanner.module.css";

const StickyBanner = () => {
    return (
        <div className={styles["sticky-banner"]}>
            <p className={styles["sticky-banner-title"]}>
                Безкоштовна онлайн-конференція
            </p>
            
            <p className={styles["sticky-banner-date"]}>30 квітня о 10:00</p>
        </div>
    );
};

export default StickyBanner;
