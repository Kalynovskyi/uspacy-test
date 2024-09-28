import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    const className = props.className ? props.className : "";
    const buttonType = props.type ? props.type : "button";
    
    return (
        <button
            onClick={props.onClick}
            type={buttonType}
            className={`${styles.button} ${className ? styles.buttonDone : ''}`}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
