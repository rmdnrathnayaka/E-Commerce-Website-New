import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
const Header= ()=>{
    return (
<>  
<div className="headerWrapper">
    <div className="top-strip bg-purple">
        <div className="container">
            <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> pandemic, oders must be proccesed with a slight delay.</p>
        </div>
      </div>
      <header className="header">
        <div className="container">
            <div className="row">
                <div className="logoWrapper d-flex align-items-center col-sm-2">
                    <Link to={'/'}><img src={Logo} alt="logo" className="logo"/></Link>
                </div>
                <div className="col-sm-10 d-flex align-items-center part2 ">
                    <CountryDropdown/>
                    {/* Header Search Start Here */}
                    <div className="headerSearch ml-3 mr-3">
                        <input type="text" placeholder='Search for products'/>
                        <Button> <IoSearch/> </Button>
                    </div>
                    {/* Header Search End Here */}

                    <div className="part3 d-flex align-items-center ml-auto">

                           <Button className='circle mr-3' ><FaRegUser/></Button>
                          <div className="ml-auto cartTab">
                             <span className='price'>$2.49</span>
                           <Button className='circle ml-2' ><IoBagHandle/></Button>
                    
                    
                          </div>

                    </div>
                </div>
            </div>
        </div>
      </header>
</div>
</>
    )
}


export default Header;