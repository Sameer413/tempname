import React from 'react'
import './Search.css'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
    return (
        <div className="header-search">
            <form action="" className="header-search-form">
                <div className="header-search-main">
                    <button className="search-btn">
                        <BsSearch size={30} viewBox='0 0 24 24 ' />
                    </button>
                    <div className="search-input">
                        <input type="text" placeholder="Search for Products, Brands and More" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search