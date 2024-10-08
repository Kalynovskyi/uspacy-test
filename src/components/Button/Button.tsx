import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    isMobileIcon?: boolean;
}

const Button = (props: ButtonProps) => {
    const className = props.className ? props.className : "";
    const buttonType = props.type ? props.type : "button";

    return (
        <button
            onClick={props.onClick}
            type={buttonType}
            className={`${styles['button']} ${className ? styles['button-done'] : ""}`}
            disabled={props.disabled}
        >
            <span className={props.isMobileIcon ? styles['button-with-icon'] : ""} >{props.children}</span>
            {props.isMobileIcon && (
                <span className={styles["mobile-icon"]}>
                    <svg
                        fill="#000000"
                        height="20px"
                        width="30px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330"
                    >
                        <g>
                            <path
                                d="M305,149.998H121.215l44.392-44.392c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-69.998,69.998
            c-5.858,5.857-5.858,15.355,0,21.213l69.998,70.002c2.929,2.929,6.767,4.394,10.606,4.394c3.838-0.001,7.678-1.465,10.606-4.393
            c5.857-5.858,5.858-15.355,0-21.213l-44.394-44.396H305c8.284,0,15-6.716,15-15C320,156.714,313.284,149.998,305,149.998z"
                            />
                            <path
                                d="M155,300H40V30h115c8.284,0,15-6.716,15-15s-6.716-15-15-15H25c-8.284,0-15,6.716-15,15v300c0,8.284,6.716,15,15,15h130
            c8.284,0,15-6.716,15-15S163.284,300,155,300z"
                            />
                        </g>
                    </svg>
                </span>
            )}
        </button>
    );
};

export default Button;
