import React, { Component } from 'react';
import '../../styles/footer.scss';
import {  toast } from 'react-toastify';


class Footer extends Component {

    handleDeleteAll = () => {
        this.props.deleteAll();
        toast.error("Delete all success!")
    }

    render() {
        let { listTodos } = this.props;
        let total = listTodos.filter(item => !item.status).length
        return (
            <div className="footer">
                <p>You have {total} unfinished tasks</p>
                <button onClick={()=>this.handleDeleteAll()}>Delete All</button>
            </div>
        );
    }
}

export default Footer;