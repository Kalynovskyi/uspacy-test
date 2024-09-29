import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useForm, SubmitHandler } from "react-hook-form";

const CustomCheckedIcon: React.FC = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.05" />
        <path d="M5 12L11 17L19 7" stroke="white" strokeWidth="3" />
    </svg>
);

const CustomUncheckedIcon: React.FC = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.05" />
    </svg>
);

interface IFormInput {
    name: string;
    surname: string;
    company: string;
    phone: string;
    email: string;
    question: string;
    checkbox: string;
}

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormInput>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className={styles["form-container"]}>
            <h2 className={`${styles.formTitle}`}>
                Відвідати <br /> онлайн-конференцію
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${styles.form}`}
            >
                <div
                    className={`${styles.inputContainer} ${
                        errors.name ? styles.invalid : ""
                    }`}
                    data-field-name="Імʼя *"
                >
                    <input
                        type="text"
                        placeholder="Імʼя *"
                        {...register("name", {
                            required: "Це поле обов'язкове",
                            minLength: {
                                value: 2,
                                message:
                                    "Name must be at least 2 characters long",
                            },
                        })}
                    />

                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div
                    className={`${styles.inputContainer} ${
                        errors.surname ? styles.invalid : ""
                    }`}
                    data-field-name="Прізвище *"
                >
                    <input
                        type="text"
                        placeholder="Прізвище *"
                        {...register("surname", {
                            required: "Це поле обов'язкове",
                            minLength: {
                                value: 2,
                                message:
                                    "Surname must be at least 2 characters long",
                            },
                        })}
                    />
                    {errors.surname && <p>{errors.surname.message}</p>}
                </div>

                <div
                    className={`${styles.inputContainer} ${
                        errors.company ? styles.invalid : ""
                    }`}
                    data-field-name="Компанія *"
                >
                    <input
                        type="text"
                        placeholder="Компанія *"
                        {...register("company", {
                            required: "Це поле обов'язкове",
                        })}
                    />
                    {errors.company && <p>{errors.company.message}</p>}
                </div>

                <div
                    className={`${styles.inputContainer} ${
                        errors.phone ? styles.invalid : ""
                    }`}
                    data-field-name="Номер мобільного телефону *"
                >
                    <input
                        type="tel"
                        placeholder="Номер мобільного телефону *"
                        {...register("phone", {
                            required: "Це поле обов'язкове",
                            pattern: {
                                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                                message: "Некорректний формат телефону",
                            },
                            minLength: {
                                value: 10,
                                message:
                                    "Телефонний номер має містити більше 10 цифр",
                            },
                            maxLength: {
                                value: 15,
                                message: "Телефонний номер не має містити більше 15 цифр",
                            },
                        })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>

                <div
                    className={`${styles.inputContainer} ${
                        errors.email ? styles.invalid : ""
                    }`}
                    data-field-name="Адреса електронної пошти *"
                >
                    <input
                        type="email"
                        placeholder="Адреса електронної пошти *"
                        {...register("email", {
                            required: "Це поле обов'язкове",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Некорректна електронна пошта",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className={styles.inputContainer} data-field-name="Запитання">
                    <textarea
                        rows={3}
                        name="form_question"
                        id="form_question"
                        placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме и б хотіли його поставити*"
                    ></textarea>
                </div>
                <label
                    htmlFor="form_policy"
                    className={`${styles.customCheckbox}`}
                >
                    <Checkbox
                        {...register("checkbox", {
                            required: "Це поле обов'язкове",
                        })}
                        required
                        id="form_policy"
                        sx={{
                            width: 24,
                            height: 24,
                            padding: "0",
                            marginRight: "1.25rem",
                        }}
                        icon={<CustomUncheckedIcon />}
                        checkedIcon={<CustomCheckedIcon />}
                    ></Checkbox>
                    <span>
                        Реєструючись, я повністю погоджуюся з{" "}
                        <a href="#" className={`${styles.policyLink}`}>
                            Політикою конфіденційності Uspacy
                        </a>
                    </span>
                </label>
                <div className={`${styles.buttonContainer}`}>
                    <Button
                        type="submit"
                        className={`${isValid ? "buttonDone" : ""}`}
                        disabled={!isValid}
                    >
                        Зареєструватися
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
