import "./App.css";
import React, { useState,useEffect } from "react";
import MainContext from "./MainContext";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Copied } from "./components/Copied";
import BrandsData from "./brands.json";

function App() {
  const brandsArray = [];

  Object.keys(BrandsData).map((key) => {
    return brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search,setSearch] = useState('')

  useEffect(() => {
    const timeout= setTimeout(()=>{
      setCopied(false)
    },500)
    return() =>{
      clearTimeout(timeout)
    }
  }, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search)))
  }, [search])


  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    setSearch,
    search
  };
  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
        {copied && <Copied color={copied}/>}
      </MainContext.Provider>
    </>
  );
}

export default App;
