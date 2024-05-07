import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Button from "./Button";

function Heading() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/registration");
    };

    return (
        <div>
            <div className="flex justify-between items-center m-4 border-[1px] border-[#EAEAEA] rounded-full p-3 pl-10">
                <div>
                    <img className="w-24 cursor-pointer" src={Logo} alt="logo" />
                </div>
                <div className="flex font-medium">
                    <div onClick={handleClick}>
                        <Button>
                            Get projects
                        </Button>
                    </div>
                    <Button primary={true}>Onboard Talent</Button>
                </div>
            </div>
        </div>
    );
}

export default Heading;