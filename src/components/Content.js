import React, {useState,useContext} from "react";
import { Search } from "./Search";
import {Brand} from './Brand'
import MainContext  from "./MainContext";



export const Content = () => {
  
    const {brands} = useContext(MainContext)

  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
          {brands.map(brand =>{
              return(
                <Brand brand={brand} />
              )
          })}
      </section>
    </main>
  );
};
