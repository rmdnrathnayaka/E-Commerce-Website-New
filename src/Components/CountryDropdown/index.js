import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const CountryDropdown = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className='countryDrop' onClick={() => setOpen(true)}>
        <div className='info d-flex flex-column'>
          <span className='label'>Select Country</span>
          <span className='name'>United States</span>
        </div>
        <span className='ml-auto'><FaAngleDown/></span>
      </Button>

      <Dialog open={true}  className='LocationModal'>
        <h4>Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your product.</p>

        <div className="headerSearch w-100">
          <input type="text" placeholder='Search your area...' />
          <Button><IoSearch /></Button>
        </div>

      </Dialog>
    </>
  );
};

export default CountryDropdown;
