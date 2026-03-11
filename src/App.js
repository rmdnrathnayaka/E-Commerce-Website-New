import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get("https://countriesnow.space/api/v0.1/countries/");
        setCountryList(res.data.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    getCountry();
  }, []);

  const values = { countryList, setCountryList };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };  