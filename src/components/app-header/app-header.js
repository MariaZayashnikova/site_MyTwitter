import React from 'react';
import './app-header.css';

const Header = ({liked, allPosts}) => {
   return (
        <div className="app-header d-flex"> 
            <h1>Maria Zayashnikova</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default Header;