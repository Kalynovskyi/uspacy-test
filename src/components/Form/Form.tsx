import { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import { Checkbox, Fade } from "@mui/material";
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
    const [isFormVisible, setIsFormVisible] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsFormVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <Fade in={isFormVisible} timeout={500}>
            <div className={styles["form-container"]} ref={formRef}>
                <h3 className={styles['form-title']}>
                    Відвідати <br /> онлайн-конференцію
                </h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`${styles['form']}`}
                >
                    <div
                        className={`${styles['input-container']} ${
                            errors.name ? styles['invalid'] : ""
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
                        className={`${styles['input-container']} ${
                            errors.surname ? styles['invalid'] : ""
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
                        className={`${styles['input-container']} ${
                            errors.company ? styles['invalid'] : ""
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
                        className={`${styles['input-container']} ${
                            errors.phone ? styles['invalid'] : ""
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
                                    message:
                                        "Телефонний номер не має містити більше 15 цифр",
                                },
                            })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>

                    <div
                        className={`${styles['input-container']} ${
                            errors.email ? styles['invalid'] : ""
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
                    <div
                        className={styles['input-container']}
                        data-field-name="Запитання"
                    >
                        <textarea
                            rows={3}
                            name="form_question"
                            id="form_question"
                            placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме и б хотіли його поставити*"
                        ></textarea>
                    </div>
                    <label
                        htmlFor="form_policy"
                        className={`${styles['custom-checkbox']}`}
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
                            <a href="#" className={styles['policy-link']}>
                                Політикою конфіденційності Uspacy
                            </a>
                        </span>
                    </label>
                    <div className={`${styles['btn-container']}`}>
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
        </Fade>
    );
};

export default Form;
