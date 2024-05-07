import { NavLink } from "react-router-dom";

function Registration() {
    return (
        <>
            <div>Registration</div>
            <NavLink to={"/success"}>registration</NavLink>
        </>
    );
}

export default Registration;