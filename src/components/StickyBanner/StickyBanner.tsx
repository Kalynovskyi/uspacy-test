import styles from "./StickyBanner.module.css";
import { Slide } from "@mui/material";

const StickyBanner = ( props: pageIsLoadedInterface ) => {

    return (
        <Slide direction="up" in={props.pageIsLoaded} timeout={500}>
            <div className={styles["sticky-banner"]}>
                <p className={styles["sticky-banner-title"]}>
                    Безкоштовна онлайн-конференція
                </p>

                <p className={styles["sticky-banner-date"]}>
                    30 квітня о 10:00
                </p>
            </div>
        </Slide>
    );
};

export default StickyBanner;
