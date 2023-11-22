import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirmPassword",
};

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            [RegisterFormKeys.Email]: "",
            [RegisterFormKeys.Password]: "",
            [RegisterFormKeys.ConfirmPassword]: "",
        },
        onRegisterSubmit
    );

    return (
        <section id="register-page" className="content auth">
            <form method="POST" onSubmit={onSubmit} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values[RegisterFormKeys.Email]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values[RegisterFormKeys.Password]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        value={values[RegisterFormKeys.ConfirmPassword]}
                        onChange={changeHandler}
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />

                    <p className="field">
                        <span>
                            If you already have profile click{" "}
                            <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
