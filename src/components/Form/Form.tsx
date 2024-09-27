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

// const Form = () => {
//     const [inputName, setInputName] = useState('');
//     const [inputSurname, setInputSurname] = useState('');
//     const [inputCompany, setInputCompany] = useState('');
//     const [inputPhone, setInputPhone] = useState('');
//     const [inputEmail, setInputEmail] = useState('');
//     const [inputQuestion, setInputQuestion] = useState('');

//     const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputName(event.target.value)
//     }

//     const surnameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputSurname(event.target.value)
//     }

//     const companyChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputCompany(event.target.value)
//     }

//     const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputPhone(event.target.value)
//     }

//     const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputEmail(event.target.value)
//     }

//     const questionChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setInputQuestion(event.target.value)
//     }

//     return (
//         <>
//             <h2 className={`${styles.formTitle}`}>
//                 Відвідати онлайн-конференцію
//             </h2>
//             <form action="" className={`${styles.form}`}>
//                 <label htmlFor="form_name">
//                     <input
//                         type="text"
//                         id="form_name"
//                         required
//                         placeholder="Імʼя *"
//                         value={inputName}
//                         onChange={nameChangeHandler}
//                     />
//                 </label>
//                 <label htmlFor="form_surname">
//                     <input
//                         type="text"
//                         id="form_surname"
//                         required
//                         placeholder="Прізвище *"
//                         value={inputSurname}
//                         onChange={surnameChangeHandler}
//                     />
//                 </label>
//                 <label htmlFor="form_company">
//                     <input
//                         type="text"
//                         id="form_company"
//                         required
//                         placeholder="Компанія *"
//                         value={inputCompany}
//                         onChange={companyChangeHandler}
//                     />
//                 </label>
//                 <label htmlFor="form_phone">
//                     <input
//                         type="tel"
//                         id="form_phone"
//                         required
//                         placeholder="Номер мобільного телефону *"
//                         value={inputPhone}
//                         onChange={phoneChangeHandler}
//                     />
//                 </label>
//                 <label htmlFor="form_email">
//                     <input
//                         type="email"
//                         id="form_email"
//                         required
//                         placeholder="Адреса електронної пошти *"
//                         value={inputEmail}
//                         onChange={emailChangeHandler}
//                     />
//                 </label>
//                 <label htmlFor="form_question">
//                     <textarea
//                         name="form_question"
//                         id="form_question"
//                         placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме и б хотіли його поставити*"
//                         value={inputQuestion}
//                         onChange={questionChangeHandler}
//                     ></textarea>
//                 </label>
//                 <label
//                     htmlFor="form_policy"
//                     className={`${styles.customCheckbox}`}
//                 >
//                     <Checkbox
//                         sx={{
//                             width: 24,
//                             height: 24,
//                             padding: "0.436rem 0.313rem",
//                         }}
//                         icon={<CustomUncheckedIcon />}
//                         checkedIcon={<CustomCheckedIcon />}
//                     ></Checkbox>
//                     <span>
//                         Реєструючись, я повністю погоджуюся з{" "}
//                         <a href="#" className={`${styles.policyLink}`}>
//                             Політикою конфіденційності Uspacy
//                         </a>
//                     </span>
//                 </label>

//                 <Button className="formButton" type="submit">Зареєструватися</Button>
//             </form>
//         </>
//     );
// };

interface IFormInput {
    name: string;
    surname: string;
    company: string;
    phone: string;
    email: string;
    question: string;
}

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

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
                <div className={`${styles.inputContainer}`}>
                    <input
                        type="text"
                        placeholder="Імʼя *"
                        className={errors.name ? "invalid" : ""}
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
                <div className={`${styles.inputContainer}`}>
                    <input
                        type="text"
                        placeholder="Прізвище *"
                        className={errors.name ? "invalid" : ""}
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

                <div className={`${styles.inputContainer}`}>
                    <input
                        type="text"
                        placeholder="Компанія *"
                        className={errors.name ? "invalid" : ""}
                        {...register("company", {
                            required: "Це поле обов'язкове",
                        })}
                    />
                    {errors.company && <p>{errors.company.message}</p>}
                </div>

                <div className={`${styles.inputContainer}`}>
                    <input
                        type="tel"
                        placeholder="Номер мобільного телефону *"
                        className={errors.name ? "invalid" : ""}
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

                <div className={`${styles.inputContainer}`}>
                    <input
                        type="email"
                        placeholder="Адреса електронної пошти *"
                        className={errors.name ? "invalid" : ""}
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
                        required
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
                    <Button type="submit" className="formButton">
                        Зареєструватися
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Form;
