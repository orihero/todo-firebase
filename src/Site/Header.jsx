import { NavLink } from "react-router-dom"
import img from "../Asets/Img/logo (1).svg"
export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-inner my-4 d-flex align-items-center justify-content-between ">
                    <NavLink><img src={img} alt="" /></NavLink>
                    <ul className="header-ul w-50 d-flex align-items-center  justify-content-around">
                        <li className="header-list">
                            <NavLink className={(event) => event.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/login"}>Login</NavLink>
                        </li>
                        <li className="header-list">
                            <NavLink className={(event) => event.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/signup"}>Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}