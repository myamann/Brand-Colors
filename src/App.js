import "./App.css";
import React, { useState,useEffect } from "react";
import MainContext from "./MainContext";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Copied } from "./components/Copied";
import { Collection } from "./components/Collection";
import BrandsData from "./brands.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import LazyLoad ,{forceCheck} from "react-lazyload";

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

  useEffect(() => {
   forceCheck();
  }, [brands])


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
      {copied && <Copied color={copied}/>}
        <Sidebar />
       <Router>
         <Switch>
           <Route path="/" exact>
             <Content />
           </Route>
           <Route path="/collection:slugs">
              <Collection/>
           </Route>
         </Switch>
       </Router>
        
      </MainContext.Provider>
    </>
  );
}

export default App;
