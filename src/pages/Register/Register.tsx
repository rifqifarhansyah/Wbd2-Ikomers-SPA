import Logo from "../../assets/logo-text-color.png";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { REST_BASE_URL } from "../../constant/constants";

import FormGroup from "@/components/AuthenticationForm/FormGroup";
import FormButton from "@/components/AuthenticationForm/FormButton";

import { validateUsername } from "../../utils/validateUsername";
import { validatePassword } from "@/utils/validatePassword";

function Register() {
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmation, setConfirmation] = useState<string>("");

    const [isNameValid, setIsNameValid] = useState<boolean>(false);
    const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isConfirmationValid, setIsConfirmationValid] =
    useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
    setIsNameValid(name.length > 0);
    }, [name]);

    useEffect(() => {
    setIsUsernameValid(validateUsername(username));
    }, [username]);

    useEffect(() => {
    setIsPasswordValid(validatePassword(password));
    setIsConfirmationValid(password === confirmation);
    }, [password, confirmation]);

    const onRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const requestBody = {
        name,
        username,
        password,
    };

    const response = await fetch(`${REST_BASE_URL}/user`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });
    
    const data = await response.json();

    if (!response.ok) {
        toast.error(data.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
        localStorage.setItem("token", `Bearer ${data.token}`);
        navigate("/");
    }
    };

    return(    
    <div className="min-h-screen bg-white">
        <div className="flex wrap md:flex-col my-0 mx-auto p-10  max-w-screen-2xl">
            <>
                <ToastContainer/>
                <header className="mt-2">
                    <img src={Logo} alt="iWalet Logo" title="iWalet Logo" className="max-w-lg"></img>
                    <p> Sign up for free to start using  <b>iWalet App</b></p>
                </header>
                <form  className="flex flex-col mt-4 mb-4">
                {/* FORM GROUP */}
                    <FormGroup
                        id="name"
                        type="text"
                        label="Enter your name:"
                        placeholder="Fullname"
                        value={[name, setName]}
                        status={isNameValid}
                        errorText="Name cannot be empty!"
                    />
                    <FormGroup
                        id="username"
                        type="text"
                        label="Enter your username:"
                        placeholder="Username"
                        value={[username, setUsername]}
                        status={isUsernameValid}
                        errorText="Username can only be alphanumeric characters + underscore!"
                    />
                    <FormGroup
                        id="password"
                        type="password"
                        label="Enter your password:"
                        placeholder="Password"
                        value={[password, setPassword]}
                        status={isPasswordValid}
                        errorText="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
                    />
                    <FormGroup
                        id="confirm"
                        type="password"
                        label="Confirm your password:"
                        placeholder="Password"
                        value={[confirmation, setConfirmation]}
                        status={isConfirmationValid}
                        errorText="Confirmation password is different with password!"
                    />
                    <br/>
                    <FormButton
                        text="Register"
                        onClickFunction={onRegister}
                        disabled={
                        !isUsernameValid ||
                        !isConfirmationValid ||
                        !isPasswordValid ||
                        !isConfirmationValid
                        }
                    />
                </form>
                <p className="mt-2">
                    Already have an account?
                    <span className="text-darkgreen hover:text-lightgreen"><Link to="/login"> Log in</Link></span>.
                </p>
            </>
        </div>
    </div>
    )
}

export default Register;