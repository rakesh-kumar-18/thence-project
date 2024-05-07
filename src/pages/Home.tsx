import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <div>Home</div>
            <NavLink to={"/registration"}>registration</NavLink>
        </>
    );
}

export default Home;