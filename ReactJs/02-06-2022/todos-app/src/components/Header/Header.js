import React from 'react';
import './style.css';

const Header = () => {

    return (
        <div className="header">
            <h2>TO DO LIST APPLICATION</h2>
            <div className="form-group">
                <input type="text" name="todos" placeholder="Enter todo..." />
                <button>+</button>
            </div>
        </div>
    )
}

export default Header;