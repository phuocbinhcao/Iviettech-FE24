import React from 'react';
import ButtonPlus from '../ButtonPlus/ButtonPluss';
import Input from '../Input/Input';
import './style.css'

class Header extends React.Component {
    render() {
      return (
            <div className="header">
                <h2>TO DO LIST APPLICATION</h2>
                <div className="input-group">
                    <Input />
                    <ButtonPlus />
                </div>
            </div>
        )
    }
  }

  export default Header;
  