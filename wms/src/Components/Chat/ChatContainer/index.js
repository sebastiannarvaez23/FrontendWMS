import React, { useState } from "react";
import './ChatContainer.css';

export const ChatContainer = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="chat-container" style={{
            width: isVisible ? '250px' : '0',
            transition: 'width 0.5s ease-out'
        }}>
            <div>
                <span onClick={() => setIsVisible(!isVisible)}>Cerrar</span>
            </div>
        </div>
    );
}