import Logo from "../assets/Logo.png";
import Close from "../assets/Close.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import ErrorBadge from "../assets/Error.png";

interface UserDetails {
    name: string;
    email: string;
}

function Registration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<UserDetails>({
        name: "",
        email: ""
    });

    const [error, setError] = useState<boolean>(false);

    const validEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(email);
    };

    const isDisable = () => formData.name.trim().length < 1 || formData.email.trim().length < 1;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isError = false;
        const { email } = formData;

        if (!validEmail(email)) {
            setError(true);
            isError = true;
        }

        if (!isError) {
            navigate("/success");
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mx-12 my-6">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-24"
                />
                <img
                    src={Close}
                    alt="close-button"
                    className="border-[1px] border-[#CACACA] rounded-full p-2 cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className="text-center fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <div>
                    <p className="font-grace text-[#2DA950] text-3xl">Registration Form</p>
                    <div className="text-[#1C1C1C] text-6xl font-medium">
                        <h1>Start your success</h1>
                        <h1>Journey here!</h1>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-1/4 min-w-96 mx-auto mt-12">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        className="rounded-full bg-[#EFEFEF] px-8 py-5 w-full my-3 placeholder-[#827A7A] outline-[#537FF1] focus:bg-[#F5F8FF]"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        className={`rounded-full bg-[#EFEFEF] px-8 py-5 w-full my-3 placeholder-[#827A7A] outline-[#537FF1] focus:bg-[#F5F8FF] ${!error && 'mb-10'}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {error &&
                        <div className="flex items-start">
                            <img src={ErrorBadge} alt="error-badge" />
                            <p className="text-[#FF0808] mb-10 ml-2 font-semibold">Enter a valid email address</p>
                        </div>
                    }
                    <Button primary={true} isDisable={isDisable()} isSubmit={true}>Submit</Button>
                </form>
            </div>
        </>
    );
}

export default Registration;