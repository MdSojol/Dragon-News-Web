import Qzone1 from "../../assets/qZone1.png"
import Qzone2 from "../../assets/qZone2.png"
import Qzone3 from "../../assets/qZone3.png"
const Qzon = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] m-4 px-2 ">
                <h1 className="font-semibold text-md mt-10 ml-4 mb-3 pt-4 text-gray-500 ">Q-Zone</h1>
                <div>
                    <img src={Qzone1} alt="" />
                    <img src={Qzone2} alt="" />
                    <img src={Qzone3} alt="" />
                </div>
               
            </div>
            
        </div>
    );
};

export default Qzon;