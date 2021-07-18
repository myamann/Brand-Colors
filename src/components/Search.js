import React,{useContext} from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../MainContext';
export const Search = () => {
    const {search,setSearch} = useContext(MainContext);

    return (
        <div className="search">
            <div className="icon">
                <GrSearch/>
            </div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search Brands"/>
        </div>
    )
}
