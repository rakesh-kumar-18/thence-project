import Header from "../components/Header";
import SuccessImg from "../assets/Success.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Success() {
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount: number) => prevCount - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    count === 0 && navigate("/");

    return (
        <>
            <div>
                <Header isSuccess={true} />

                <div className="flex flex-col items-center fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <img src={SuccessImg} alt="tick" className="w-16 mb-8" />
                    <p className="font-grace text-[#2DA950] text-3xl mb-2">Success Submitted</p>
                    <h1 className="text-[#1C1C1C] text-5xl font-semibold mb-5">Congratulations</h1>
                    <div className="text-center text-[#727272] text-2xl font-medium">
                        <p>Your request has been successfully submitted to us. We</p>
                        <p>will validate your information and reach out to your</p>
                        <p>shortly with updates</p>
                    </div>
                </div>

                <div className="fixed bottom-6 left-[50%] -translate-x-1/2">
                    <span className="text-[#727272]">Redirecting you to Homespanage in </span>
                    <span className="text[#1C1C1C] font-bold">{count} Seconds</span>
                </div>;
            </div>
        </>
    );
}

export default Success;