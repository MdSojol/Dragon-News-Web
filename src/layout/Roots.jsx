import { Outlet } from "react-router-dom";


const Roots = () => {
    return (
        <div>

            <div className="max-w-7xl mx-auto font-poppins">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Roots;