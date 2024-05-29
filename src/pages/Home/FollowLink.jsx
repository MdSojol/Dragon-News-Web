import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const FollowLink = () => {
    return (
        <div>
            <div>
                <h1 className="font-semibold text-md mt-10 ml-4 mb-3">Find Us On</h1>
                <div className="border border-2 border-gray-400 rounded-t-md rounded-b-none text-gray-600 hover:text-slate-500 rounded-sm mx-4 mt-0 cursor-pointer ">
                    <div className="flex items-center  text-gray-600  text-sm py-2 ml-4">
                        <FaFacebookF className="mr-2"></FaFacebookF>
                        <p>Facebook</p>
                    </div>
                </div>
                <div className="  border-gray-400 border-x-2 text-gray-600 hover:text-slate-500  mx-4  mt-0 cursor-pointer ">
                    <div className="flex items-center  text-gray-600  text-sm py-2 ml-4">
                        <FaTwitter className="mr-2"></FaTwitter>
                        <p>Twitter</p>
                    </div>
                </div>
                <div className=" border-2 border-gray-400 rounded-b-md text-gray-600 hover:text-slate-500  mx-4 mb-4 mt-0 cursor-pointer ">
                    <div className="flex items-center  text-gray-600  text-sm py-2 ml-4">
                        <FaInstagram className="mr-2"></FaInstagram>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowLink;