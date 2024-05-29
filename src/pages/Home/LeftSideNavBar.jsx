import { useEffect, useState } from "react";
import LeftSideNavbarSingle from "./LeftSideNavbarSingle";

const LeftSideNavBar = () => {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div>
            <div className="">
                <h1 className="font-medium mb-3">All Category</h1>

                {
                    category.map(singleCategory => <LeftSideNavbarSingle key={singleCategory.id} singleCategory={singleCategory}></LeftSideNavbarSingle>)
                }


            </div>

            <h1 className="text-center">Left Side Navbar</h1>
            
        </div>
    );
};

export default LeftSideNavBar;