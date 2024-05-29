import GoogleGithub from "../../login/GoogleGithub";
import FollowLink from "./FollowLink";
import Qzon from "./Qzon";

const RightSideNavBar = () => {
    return (
        <div>

            <GoogleGithub></GoogleGithub>
            <FollowLink></FollowLink>
            <Qzon></Qzon>

            <div>
                <div className="bg-banner-image">
                    
                </div>
            </div>

            
        </div>
    );
};

export default RightSideNavBar;