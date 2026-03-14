import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";



const Navigation = () => {

  const [isOpenSidebarVal,setisopenSidebarVal]  = useState(false); 

  return (
    <nav>
      <div className='container'>
        <div className='row'>

          <div className='col-sm-2 navPart1'>
            <div className='catWrapper'>
            <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isOpenSidebarVal)}>
              <span className='icon1 mr-2'><IoIosMenu/></span>
              <span className='text'>All Categories</span>
              <span className='icon2 ml-2'><FaAngleDown/></span>
            </Button>
            <div className={`sidebarNav ${isOpenSidebarVal===true?'open':''}`}>
              <ul>
                  <li><Link to="/"><Button>MEN <FaAngleRight className='ml-auto'/></Button></Link>
                     <div className='submenu' data-title="Men's Fashion" >
                     <Link to="/"><Button>Shirts</Button></Link>
                     <Link to="/"><Button>Trousers</Button></Link>
                     <Link to="/"><Button>Jackets</Button></Link>
                     <Link to="/"><Button>Shoes</Button></Link>
                     <Link to="/"><Button>Watches</Button></Link>
                     <Link to="/"><Button>Accessories</Button></Link>


                   </div>
                  
                  </li>
                  <li><Link to="/"><Button>WOMEN<FaAngleRight className='ml-auto'/></Button></Link>
                      <div className='submenu'data-title="Women's Fashion"> 
                     
                      <Link to="/"><Button>Shirts</Button></Link>
                     <Link to="/"><Button>Trousers</Button></Link>
                     <Link to="/"><Button>Jackets</Button></Link>
                     <Link to="/"><Button>Shoes</Button></Link>
                     <Link to="/"><Button>Watches</Button></Link>
                     <Link to="/"><Button>Accessories</Button></Link>

                      </div>
                   </li>
                  <li><Link to="/"><Button>BEAUTY</Button></Link></li>
                  <li><Link to="/"><Button>WATCHES</Button></Link></li>
                  <li><Link to="/"><Button>KIDS</Button></Link></li>
                  <li><Link to="/"><Button>GIFTS</Button></Link></li>
                  <li><Link to="/"><Button>BLOG</Button></Link></li>
                  <li><Link to="/"><Button>CONTACT</Button></Link></li>
                  <li><Link to="/"><Button>HOME</Button></Link></li>

              </ul>
              
             </div>
            </div>
          </div>

          <div className='col-sm-10 navPart2 d-flex align-items-center'>
            <ul className='list list-inline ml-auto'>
              
              {/* HOME - No Submenu */}
              <li className='list-inline-item'>
                <Link to="/"><Button>HOME</Button></Link>
              </li>

              {/* MEN - With Submenu ✅ */}
              <li className='list-inline-item'>
                <Link to="/"><Button>MEN</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Shirts</Button></Link>
                  <Link to="/"><Button>Trousers</Button></Link>
                  <Link to="/"><Button>Jackets</Button></Link>
                  <Link to="/"><Button>Shoes</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                </div>
              </li>

              {/* WOMEN - With Submenu ✅ */}
              <li className='list-inline-item'>
                <Link to="/"><Button>WOMEN</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Shirts</Button></Link>
                  <Link to="/"><Button>Trousers</Button></Link>
                  <Link to="/"><Button>Jackets</Button></Link>
                  <Link to="/"><Button>Shoes</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                </div>
              </li>

              {/* BEAUTY - With Submenu ✅ */}
              <li className='list-inline-item'>
                <Link to="/"><Button>BEAUTY</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Skincare</Button></Link>
                  <Link to="/"><Button>Makeup</Button></Link>
                  <Link to="/"><Button>Fragrance</Button></Link>
                  <Link to="/"><Button>Hair Care</Button></Link>
                  <Link to="/"><Button>Tools</Button></Link>
                  <Link to="/"><Button>Sets</Button></Link>
                </div>
              </li>

              {/* WATCHES - With Submenu ✅ */}
              <li className='list-inline-item'>
                <Link to="/"><Button>WATCHES</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Smart Watches</Button></Link>
                  <Link to="/"><Button>Analog</Button></Link>
                  <Link to="/"><Button>Digital</Button></Link>
                  <Link to="/"><Button>Luxury</Button></Link>
                  <Link to="/"><Button>Sports</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                </div>
              </li>

              {/* KIDS - With Submenu ✅ */}
              <li className='list-inline-item'>
                <Link to="/"><Button>KIDS</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Boys</Button></Link>
                  <Link to="/"><Button>Girls</Button></Link>
                  <Link to="/"><Button>Toys</Button></Link>
                  <Link to="/"><Button>Shoes</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>School Supplies</Button></Link>
                </div>
              </li>

              {/* GIFTS - No Submenu */}
              <li className='list-inline-item'>
                <Link to="/"><Button>GIFTS</Button></Link>
              </li>

              {/* BLOG - No Submenu */}
              <li className='list-inline-item'>
                <Link to="/"><Button>BLOG</Button></Link>
              </li>

              {/* CONTACT - No Submenu */}
              <li className='list-inline-item'>
                <Link to="/"><Button>CONTACT</Button></Link>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navigation;