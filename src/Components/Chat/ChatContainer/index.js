import React from "react";
import './ChatContainer.css';

export const ChatContainer = (props) => {

    return (
        <div className="chat-container" style={{
            width: props.isVisible ? '25%' : '0',
            transition: 'width 0.5s ease-out'
        }}>
            <div style={{
                display: props.isVisible ? 'block' : 'none'
            }}>
                <span onClick={() => props.setIsVisible(!props.isVisible)}>Close</span>
            </div>
        </div>
    );
}