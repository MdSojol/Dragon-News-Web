import Logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <div className='mb-5'>
                <img className='mx-auto mt-4 mb-3' src={Logo} alt="" />
                <p className='text-center text-md mb-1 text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <h3 className='text-md text-center'>{moment().format("dddd,  MMMM  DD,  YYYY")}</h3>
            </div>
        </div>
    );
};

export default Header;