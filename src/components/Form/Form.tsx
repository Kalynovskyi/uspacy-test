import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useForm, SubmitHandler } from "react-hook-form";

const CustomCheckedIcon: React.FC = () => (
    <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1 6L7 11L15 1" stroke="white" strokeWidth="3" />
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
        <>
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
                                message: "Invalid phone number format",
                            },
                            minLength: {
                                value: 10,
                                message:
                                    "Phone number must be at least 10 digits long",
                            },
                            maxLength: {
                                value: 15,
                                message: "Phone number cannot exceed 15 digits",
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
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <textarea
                    name="form_question"
                    id="form_question"
                    placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме и б хотіли його поставити*"
                ></textarea>

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
                            padding: "0.436rem 0.313rem",
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
        </>
    );
};

export default Form;
