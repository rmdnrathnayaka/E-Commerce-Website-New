import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const context = useContext(MyContext);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(false);
    setSearchQuery('');
  };

  const filteredCountries = context.countryList?.filter((item) =>
    item.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsModalOpen(true)}>
        <div className="info d-flex flex-column">
          <span className="label">{selectedCountry ? 'Your Location' : 'Select Country'}</span>
          <span className="name">{selectedCountry ?? 'Select Location'}</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your product.</p>

        <Button className="close_btn" onClick={() => setIsModalOpen(false)}>
          <MdClose />
        </Button>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button><IoSearch /></Button>
        </div>

        <ul className="countryList mt-3">
          {filteredCountries?.map((item) => (
            <li key={item.country}>
              <Button
                onClick={() => selectCountry(item.country)}
                className={selectedCountry === item.country ? 'active' : ''}
              >
                {item.country}
              </Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;


