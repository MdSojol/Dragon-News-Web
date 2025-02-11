import { NavLink } from "react-router-dom";
import User from '../../assets/user.png'

const NavBar = () => {

    const nav = <>
    <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/about"><li className="">About</li></NavLink>
    <NavLink to="/career"><li>Career</li></NavLink>
    </>
    return (
        <div>

            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {nav}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="avatar mr-3">
                        <div className="w-10 rounded-full">
                            <img src={User}/>
                        </div>
                    </div>
                    <a className='bg-[#403F3F] py-2 px-6  text-white rounded-sm'>Login</a>
                </div>
            </div>



        </div>
    );
};

export default NavBar;