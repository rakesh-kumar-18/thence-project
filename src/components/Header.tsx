import Logo from "../assets/Logo.png";
import Close from "../assets/Close.png";
import { useNavigate } from "react-router-dom";

type Props = {
    isSuccess?: boolean;
};

function Header({ isSuccess }: Props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between items-center mx-12 my-6">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-24"
                />
                {!isSuccess &&
                    <img
                        src={Close}
                        alt="close-button"
                        className="border-[1px] border-[#CACACA] rounded-full p-2 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                }
            </div>
        </div>
    );
}

export default Header;