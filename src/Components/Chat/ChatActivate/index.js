import React from "react";
import logoChat from "../image/chat-logo.png";
import './ChatActivate.css';

export const ChatActivate = (props) => {
    return (
        <div className="logo-chat" onClick={() => props.setIsVisible(!props.isVisible)}>
            <img src={logoChat} alt="" />
        </div>
    );
}