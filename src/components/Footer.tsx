import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="flex justify-between items-center bg-[#F5F5F5] mx-8 mt-10 mb-6 p-10 rounded-3xl">
            <div className="font-semibold">
                <p className="text-lg">&#169;<span className="ml-2 text-sm">Talup 2024. All rights reserved</span></p>
            </div>
            <ul className="flex text-sm underline font-medium">
                <li>
                    <Link to={"/"}>Terms & Conditions</Link>
                </li>
                <li className="ml-10">
                    <Link to={"/"}>Privacy Policy</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;