import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Todos = () =>{

    return (
        <div className="todos-list">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
export default Todos;
