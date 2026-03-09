import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';



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

                    <SearchBox/>

                    <div className="part3 d-flex align-items-center ml-auto">

                           <Button className='circle mr-3' ><FaRegUser/></Button>
                          <div className="ml-auto cartTab d-flex align-items-center">
                             <span className='price'>$2.49</span>
                           <div className='position-relative ml-2'>
                            <Button className='circle' ><IoBagHandle/></Button>
                            <span className='count d-flex align-items-center justify-content-center'>2</span>
                           </div>
                    
                    
                          </div>

                    </div>
                </div>
            </div>
        </div>
      </header>
      <Navigation/>
</div>
</>






    )
}


export default Header;