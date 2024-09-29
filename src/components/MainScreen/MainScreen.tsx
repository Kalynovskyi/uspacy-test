import Button from "../Button/Button";
import Typewriter from "../Typewriter/Typewriter";
import styles from "./MainScreen.module.css";
import { Slide, Grow, useMediaQuery } from "@mui/material";

const MainScreen = () => {
    const typewriterArr = [
        "підприємництво",
        "мрію",
        "перемогу",
        "сенси",
        "майбутнє",
        "лідерство",
        "місію",
        "бізнес",
        "візію",
        "допомогу",
    ];

    const screenSm = useMediaQuery('(max-width:576px)');

    return (
        <div className={styles["main-screen"]}>
            <div className={styles.subtitle}>
                <span className={styles["subtitle-name"]}>
                    <Slide direction="right" in={true} timeout={500}>
                        <span>Онлайн-конференція</span>
                    </Slide>
                </span>
                <span className={styles["subtitle-date"]}>
                    <Slide direction={screenSm ? 'right' : 'left'} in={true} timeout={500}>
                        <span>30 квітня о 10:00</span>
                    </Slide>
                </span>
            </div>
            <h1 className={styles["main-title"]}>
                Ми віримо у <br /> <Typewriter stringsArr={typewriterArr} />
            </h1>
            <Grow in={true} timeout={500}>
                <div>
                    <Button className="button-done">Зареєструватися</Button>
                </div>
            </Grow>

            <div className={styles["description-block"]}>
                <Slide direction="right" in={true} timeout={500}>
                    <h2 className={styles["description-title"]}>
                        Про що ця <br /> онлайн-конференція
                    </h2>
                </Slide>
                <Slide direction="left" in={true} timeout={500}>
                    <p className={styles["description-subtitle"]}>
                        {" "}
                        Щодня ми ходимо на роботу, зустрічаємося з друзями,
                        донатимо на Перемогу, робимо рутинні речі. Але чи
                        замислюємося ми щодня навіщо це все? Чи є у цьому сенс?
                        Чи бачимо ми своє майбутнє? Чи мріємо ми?
                    </p>
                </Slide>
            </div>
            <div className={styles["undertext"]}>
                <svg
                    width="100vw"
                    height="363"
                    viewBox="0 0 1663 363"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.17"
                        d="M1438.11 362.44C1424.35 362.44 1410.43 360.2 1396.35 355.72C1382.59 351.56 1371.39 345.96 1362.75 338.92L1394.43 275.08C1399.87 279.88 1406.11 283.56 1413.15 286.12C1420.51 289 1427.71 290.44 1434.75 290.44C1444.67 290.44 1452.51 288.2 1458.27 283.72C1464.03 279.24 1468.99 272.2 1473.15 262.6L1485.15 232.36L1492.35 223.24L1580.67 4.83984H1667.55L1555.23 275.56C1546.27 297.96 1535.87 315.4 1524.03 327.88C1512.51 340.68 1499.55 349.64 1485.15 354.76C1471.07 359.88 1455.39 362.44 1438.11 362.44ZM1473.63 276.04L1358.91 4.83984H1452.51L1536.99 215.08L1473.63 276.04Z"
                        fill="url(#paint0_linear_4_57)"
                        fillOpacity="0.2"
                    />
                    <path
                        opacity="0.17"
                        d="M1265.9 269.32C1237.1 269.32 1211.34 263.56 1188.62 252.04C1166.22 240.52 1148.62 224.68 1135.82 204.52C1123.02 184.04 1116.62 160.68 1116.62 134.44C1116.62 108.2 1123.02 85 1135.82 64.84C1148.62 44.68 1166.22 29 1188.62 17.8C1211.34 6.28 1237.1 0.52002 1265.9 0.52002C1295.34 0.52002 1320.78 6.76001 1342.22 19.24C1363.66 31.72 1378.86 49.32 1387.82 72.04L1317.26 108.04C1311.18 95.88 1303.66 87.08 1294.7 81.64C1285.74 75.88 1275.98 73 1265.42 73C1254.86 73 1245.26 75.4 1236.62 80.2C1227.98 85 1221.1 92.04 1215.98 101.32C1211.18 110.28 1208.78 121.32 1208.78 134.44C1208.78 147.88 1211.18 159.24 1215.98 168.52C1221.1 177.8 1227.98 184.84 1236.62 189.64C1245.26 194.44 1254.86 196.84 1265.42 196.84C1275.98 196.84 1285.74 194.12 1294.7 188.68C1303.66 182.92 1311.18 173.96 1317.26 161.8L1387.82 197.8C1378.86 220.52 1363.66 238.12 1342.22 250.6C1320.78 263.08 1295.34 269.32 1265.9 269.32Z"
                        fill="url(#paint1_linear_4_57)"
                        fillOpacity="0.2"
                    />
                    <path
                        opacity="0.17"
                        d="M1011.13 265V216.52L1004.89 204.52V115.24C1004.89 100.84 1000.41 89.8 991.447 82.12C982.807 74.12 968.887 70.12 949.687 70.12C937.207 70.12 924.567 72.2 911.767 76.36C898.967 80.2 888.087 85.64 879.127 92.68L848.407 30.76C863.127 21.16 880.727 13.8 901.207 8.67999C922.007 3.24001 942.647 0.52002 963.127 0.52002C1005.37 0.52002 1038.01 10.28 1061.05 29.8C1084.41 49 1096.09 79.24 1096.09 120.52V265H1011.13ZM934.327 269.32C913.527 269.32 895.927 265.8 881.527 258.76C867.127 251.72 856.087 242.12 848.407 229.96C841.047 217.8 837.367 204.2 837.367 189.16C837.367 173.16 841.367 159.4 849.367 147.88C857.687 136.04 870.327 127.08 887.287 121C904.247 114.6 926.167 111.4 953.047 111.4H1014.49V158.92H965.527C950.807 158.92 940.407 161.32 934.327 166.12C928.567 170.92 925.687 177.32 925.687 185.32C925.687 193.32 928.727 199.72 934.807 204.52C940.887 209.32 949.207 211.72 959.767 211.72C969.687 211.72 978.647 209.32 986.647 204.52C994.967 199.4 1001.05 191.72 1004.89 181.48L1017.37 215.08C1012.57 233 1003.13 246.6 989.047 255.88C975.287 264.84 957.047 269.32 934.327 269.32Z"
                        fill="url(#paint2_linear_4_57)"
                        fillOpacity="0.2"
                    />
                    <path
                        opacity="0.17"
                        d="M711.805 269.32C689.725 269.32 670.845 264.52 655.165 254.92C639.485 245 627.485 230.28 619.165 210.76C611.165 190.92 607.165 165.64 607.165 134.92C607.165 103.88 611.005 78.6 618.685 59.08C626.365 39.24 637.885 24.52 653.245 14.92C668.925 5.32001 688.445 0.52002 711.805 0.52002C735.485 0.52002 756.925 6.12 776.125 17.32C795.645 28.2 811.005 43.72 822.205 63.88C833.725 83.72 839.485 107.4 839.485 134.92C839.485 162.44 833.725 186.28 822.205 206.44C811.005 226.6 795.645 242.12 776.125 253C756.925 263.88 735.485 269.32 711.805 269.32ZM548.125 358.12V4.83998H635.005V49L634.525 134.92L639.325 221.32V358.12H548.125ZM692.605 196.84C702.845 196.84 711.965 194.44 719.965 189.64C728.285 184.84 734.845 177.8 739.645 168.52C744.765 159.24 747.325 148.04 747.325 134.92C747.325 121.8 744.765 110.6 739.645 101.32C734.845 92.04 728.285 85 719.965 80.2C711.965 75.4 702.845 73 692.605 73C682.365 73 673.085 75.4 664.765 80.2C656.765 85 650.205 92.04 645.085 101.32C640.285 110.6 637.885 121.8 637.885 134.92C637.885 148.04 640.285 159.24 645.085 168.52C650.205 177.8 656.765 184.84 664.765 189.64C673.085 194.44 682.365 196.84 692.605 196.84Z"
                        fill="url(#paint3_linear_4_57)"
                        fillOpacity="0.2"
                    />
                    <path
                        opacity="0.17"
                        d="M404.184 269.32C382.104 269.32 360.504 266.76 339.384 261.64C318.584 256.52 301.784 250.12 288.984 242.44L316.344 180.04C328.504 187.4 342.744 193.32 359.064 197.8C375.384 201.96 391.384 204.04 407.064 204.04C422.424 204.04 432.984 202.44 438.744 199.24C444.824 196.04 447.864 191.72 447.864 186.28C447.864 181.16 444.984 177.48 439.224 175.24C433.784 172.68 426.424 170.76 417.144 169.48C408.184 168.2 398.264 166.76 387.384 165.16C376.504 163.56 365.464 161.48 354.264 158.92C343.384 156.04 333.304 151.88 324.024 146.44C315.064 140.68 307.864 133 302.424 123.4C296.984 113.8 294.264 101.64 294.264 86.92C294.264 70.28 299.064 55.56 308.664 42.76C318.584 29.64 332.984 19.4 351.864 12.04C370.744 4.36001 393.784 0.52002 420.984 0.52002C439.224 0.52002 457.624 2.44001 476.184 6.28C495.064 9.80001 510.904 15.24 523.704 22.6L496.344 84.52C483.544 77.16 470.744 72.2 457.944 69.64C445.144 66.76 432.984 65.32 421.464 65.32C406.104 65.32 395.224 67.08 388.824 70.6C382.744 74.12 379.704 78.44 379.704 83.56C379.704 88.68 382.424 92.68 387.864 95.56C393.304 98.12 400.504 100.2 409.464 101.8C418.744 103.08 428.824 104.52 439.704 106.12C450.584 107.4 461.464 109.48 472.344 112.36C483.544 115.24 493.624 119.56 502.584 125.32C511.864 130.76 519.224 138.28 524.664 147.88C530.104 157.16 532.824 169.16 532.824 183.88C532.824 199.88 527.864 214.28 517.944 227.08C508.344 239.88 493.944 250.12 474.744 257.8C455.864 265.48 432.344 269.32 404.184 269.32Z"
                        fill="url(#paint4_linear_4_57)"
                        fillOpacity="0.2"
                    />
                    <path
                        opacity="0.17"
                        d="M110.72 269.32C89.6003 269.32 70.5603 265.16 53.6003 256.84C36.9603 248.52 23.8403 235.56 14.2403 217.96C4.96031 200.04 0.320312 177.48 0.320312 150.28V4.83984H91.5203V135.4C91.5203 155.56 95.2003 169.96 102.56 178.6C110.24 187.24 120.96 191.56 134.72 191.56C143.68 191.56 151.84 189.48 159.2 185.32C166.56 181.16 172.48 174.6 176.96 165.64C181.44 156.36 183.68 144.52 183.68 130.12V4.83984H274.88V265H188V191.56L204.8 212.2C195.84 231.4 182.88 245.8 165.92 255.4C148.96 264.68 130.56 269.32 110.72 269.32Z"
                        fill="url(#paint5_linear_4_57)"
                        fillOpacity="0.2"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_4_57"
                            x1="606.999"
                            y1="-101.5"
                            x2="606.999"
                            y2="317.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_4_57"
                            x1="607.001"
                            y1="-101.5"
                            x2="607.001"
                            y2="317.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_4_57"
                            x1="606.998"
                            y1="-101.5"
                            x2="606.998"
                            y2="317.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_4_57"
                            x1="607.001"
                            y1="-101.5"
                            x2="607.001"
                            y2="317.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_4_57"
                            x1="607.001"
                            y1="-101.5"
                            x2="607.001"
                            y2="317.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_4_57"
                            x1="607"
                            y1="-101.5"
                            x2="607"
                            y2="317.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={styles["scroll-down"]}>
                <div className={styles["scroll-down-icon"]}></div>
            </div>
        </div>
    );
};

export default MainScreen;
