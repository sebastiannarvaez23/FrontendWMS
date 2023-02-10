import React, { useState } from "react";

// Components
import { ChatActivate } from "./ChatActivate"
import { ChatContainer } from "./ChatContainer"

export const Chat = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <React.Fragment>
            <ChatActivate
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
            <ChatContainer
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
        </React.Fragment>
    );
}