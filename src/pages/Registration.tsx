import Form from "../components/Form";
import Header from "../components/Header";

function Registration() {
    return (
        <>
            <Header />

            <div className="text-center fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <div>
                    <p className="font-grace text-[#2DA950] text-3xl">Registration Form</p>
                    <div className="text-[#1C1C1C] text-6xl font-medium">
                        <h1>Start your success</h1>
                        <h1>Journey here!</h1>
                    </div>
                </div>

                <Form />
            </div>
        </>
    );
}

export default Registration;