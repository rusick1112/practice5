import React from "react";
import './sidebar.css'
const Sidebar = () => {
    return(<div className = "sidebar">
        <a className="nov" style={{color: "rgb(27, 164, 0);"}}>НОВИНКИ</a><br></br>
        <a className="gg">ЗАВТРАКИ</a><br></br>
        <a className="gg">ЛАНЧ</a><br></br>
        <a className="gg">УЖИН</a><br></br>
        <a className="gg">КОФЕ</a><br></br>
        <a className="gg">ЧАЙ</a><br></br>
        <a className="gg">ХОЛОДНЫЕ НАПИТКИ</a><br></br>
        <a className="gg">СЭНДВИЧИ РОЛЛЫ</a><br></br>
        <a className="gg">САЛАТЫ</a><br></br>
        <a className="gg">ОСНОВНЫЕ БЛЮДА</a><br></br>
    </div>);
};

export default Sidebar;