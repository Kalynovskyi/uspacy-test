import Button from "../Button/Button";
import styles from "./MainScreen.module.css";

const MainScreen = () => {
    return (
        <div className={styles['main-screen']}>
            <div className={styles.subtitle}>
                <span className={styles.subtitleName}>Онлайн-конференція</span>{" "}
                <span className={styles.subtitleDate}>30 квітня о 10:00</span>
            </div>
            <h1 className={styles.mainTitle}>Ми віримо у підприємництво</h1>

            <Button>Зареєструватися</Button>

            <div className={styles.descriptionBlock}>
                <h2 className={styles.descriptionTitle}>
                    Про що ця онлайн-конференція
                </h2>
                <p className={styles.descriptionSubtitle}>
                    {" "}
                    Щодня ми ходимо на роботу, зустрічаємося з друзями, донатимо
                    на Перемогу, робимо рутинні речі. Але чи замислюємося ми
                    щодня навіщо це все? Чи є у цьому сенс? Чи бачимо ми своє
                    майбутнє? Чи мріємо ми?
                </p>
            </div>
            <div className={styles.undertext}></div>
        </div>
    );
};

export default MainScreen;
