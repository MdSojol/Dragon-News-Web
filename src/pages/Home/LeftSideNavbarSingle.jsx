import {  NavLink } from "react-router-dom";

const LeftSideNavbarSingle = ({singleCategory}) => {
    const { id, name } =singleCategory
    console.log(singleCategory)
    return (
        <div className=" py-2 ">
            <NavLink to={`/category/${id}`} className=""> <li className="tracking-6 pl-4 list-none">{name}</li></NavLink>

            
        </div>
    );
};

export default LeftSideNavbarSingle;