import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7c8c878612c2a4f6c01c4ed2aa3a7ac9&hash=8ee40130612cca5ca1a11ec930903292")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=7c8c878612c2a4f6c01c4ed2aa3a7ac9&hash=8ee40130612cca5ca1a11ec930903292`)
  }

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.jpg" alt="" />
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jfif" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}
