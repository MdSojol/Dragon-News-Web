import {  FaGithub, FaGoogle, } from "react-icons/fa";
const GoogleGithub = () => {
    return (
        <div>
            <div>
                <h1 className="font-semibold text-md ml-4 mb-3">Login With</h1>
                <div className=" outline outline-2 outline-blue-500  hover:bg-blue-400 rounded-sm mx-4 mb-3 mt-4 cursor-pointer ">
                    <div className="flex items-center w-fit mx-auto text-blue-500 hover:text-white text-sm py-1">
                        <FaGoogle />
                        <p className="ml-2 ">Login With Google</p>
                    </div>
                </div>
                <div className=" outline outline-2 text-gray-600 hover:bg-slate-500 rounded-sm mx-4 mb-4 mt-0 cursor-pointer ">
                    <div className="flex items-center w-fit mx-auto text-gray-600 hover:text-white text-sm py-1">
                        <FaGithub />
                        <p className="ml-2 ">Login With GitHub</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default GoogleGithub;